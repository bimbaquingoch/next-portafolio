import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Bimb - {page}</title>
        <meta name='description' content='Portafolio creado con Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
