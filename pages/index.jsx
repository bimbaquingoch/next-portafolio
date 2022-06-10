import Head from "next/head";
import Contenido from "../components/Contenido";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className='h-screen w-full bg-slate-300 overflow-x-hidden'>
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

export default Home;
