import Head from "next/head";
import { useEffect } from "react";
import Contenido from "../components/Contenido";
import Header from "../components/Header";
import usePortafolio from "../hooks/usePortafolio";

const Home = ({ habilidades, proyectos }) => {
  const { sethabilidades, setproyectos } = usePortafolio();

  useEffect(() => {
    sethabilidades(habilidades);
    setproyectos(proyectos);
  }, [sethabilidades, habilidades, setproyectos, proyectos]);

  return (
    <div className='h-screen w-full bg-slate-300 dark:bg-slate-700 overflow-x-hidden'>
      <Head>
        <title>Bimb</title>
        <meta name='description' content='Portafolio creado con Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <Contenido />
    </div>
  );
};

export const getStaticProps = async () => {
  const urlSkills = `${process.env.API_URL}/my-skills`;
  const urlProyects = `${process.env.API_URL}/projects`;
  const [respSkill, respProject] = await Promise.all([
    fetch(urlSkills),
    fetch(urlProyects),
  ]);
  const [habilidades, proyectos] = await Promise.all([
    respSkill.json(),
    respProject.json(),
  ]);
  return { props: { habilidades, proyectos } };
};

export default Home;
