import Contenido from "components/Contenido";
import Layout from "components/Layout";
import usePortafolio from "hooks/usePortafolio";
import { useEffect } from "react";

const Home = ({ habilidades, proyectos, educacion }) => {
  const { sethabilidades, setproyectos, seteducation } = usePortafolio();

  useEffect(() => {
    sethabilidades(habilidades);
    setproyectos(proyectos);
    seteducation(educacion);
  }, [
    sethabilidades,
    habilidades,
    setproyectos,
    proyectos,
    seteducation,
    educacion,
  ]);

  return (
    <Layout page={"home"}>
      <Contenido />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const urlSkills = `${process.env.API_URL}/my-skills`;
  const urlProyects = `${process.env.API_URL}/projects?_sort=fecha_inicio:DESC`;
  const urlEducation = `${process.env.API_URL}/educations`;
  const [respSkill, respProject, respEducation] = await Promise.all([
    fetch(urlSkills),
    fetch(urlProyects),
    fetch(urlEducation),
  ]);
  const [habilidades, proyectos, educacion] = await Promise.all([
    respSkill.json(),
    respProject.json(),
    respEducation.json(),
  ]);
  return { props: { habilidades, proyectos, educacion } };
};

// export const getStaticProps = async () => {
//   const urlSkills = `${process.env.API_URL}/my-skills`;
//   const urlProyects = `${process.env.API_URL}/projects?_sort=fecha_inicio:DESC`;
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
