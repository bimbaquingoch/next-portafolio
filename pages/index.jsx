import Head from "next/head";
import Contenido from "../components/Contenido";
import Header from "../components/Header";

const Home = ({ habilidades }) => {
  return (
    <div className='h-screen w-full bg-slate-300 overflow-x-hidden'>
      <Head>
        <title>Bimb</title>
        <meta name='description' content='Portafolio creado con Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <Contenido habilidades={habilidades} />
    </div>
  );
};

export const getStaticProps = async () => {
  const url = `${process.env.API_URL}/my-skills`;
  const respuesta = await fetch(url);
  const habilidades = await respuesta.json();

  return { props: { habilidades } };
};

export default Home;
