/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import GridImg from "../components/GridImg";
import HeaderProfile from "../components/HeaderProfile";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import usePortafolio from "../hooks/usePortafolio";

const Perfil = ({ habilidades, proyectos }) => {
  const { sethabilidades, setproyectos } = usePortafolio();

  useEffect(() => {
    sethabilidades(habilidades);
    setproyectos(proyectos);
  }, [sethabilidades, habilidades, setproyectos, proyectos]);

  console.log(proyectos);

  return (
    <Layout page={"perfil"}>
      <div className='mx-auto md:max-w-3xl lg:max-w-5xl lg:mt-5 z-40 relative'>
        <HeaderProfile />
        <Skills />
        <div className='w-full border-b-2 my-4'></div>
        <GridImg />
      </div>
    </Layout>
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

export default Perfil;
