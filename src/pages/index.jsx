import Contenido from "components/Contenido";
import Layout from "components/Layout";
import usePortafolio from "hooks/usePortafolio";
import { useEffect } from "react";

const Home = ({ habilidades, proyectos }) => {
  const { sethabilidades, setproyectos } = usePortafolio();

  useEffect(() => {
    sethabilidades(habilidades);
    setproyectos(proyectos);
  }, [sethabilidades, habilidades, setproyectos, proyectos]);

  return (
    <Layout page={"home"}>
      <Contenido />
    </Layout>
  );
};

export const getServerSideProps = async () => {
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

// export const getStaticProps = async () => {
//   const urlSkills = `${process.env.API_URL}/my-skills`;
//   const urlProyects = `${process.env.API_URL}/projects`;
//   const [respSkill, respProject] = await Promise.all([
//     fetch(urlSkills),
//     fetch(urlProyects),
//   ]);
//   const [habilidades, proyectos] = await Promise.all([
//     respSkill.json(),
//     respProject.json(),
//   ]);
//   return { props: { habilidades, proyectos } };
// };

export default Home;
