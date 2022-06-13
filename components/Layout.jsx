import { useTheme } from "next-themes";
import Head from "next/head";
import Burbujas from "./Burbujas";
import Header from "./Header";

const Layout = ({ children, page }) => {
  const { theme } = useTheme();
  return (
    <div className='layout'>
      <Head>
        <title>Bimb - {page}</title>
        <meta name='title' content={`Bimb - ${page}`} />
        <meta
          name='description'
          content='Nuevo portafolio creado con NEXTJS y strapi'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://next-portafolio-psi.vercel.app/'
        />
        <meta property='og:title' content='Bimb - home' />
        <meta
          property='og:description'
          content='Portafolio creado con Nextjs'
        />
        <meta property='og:image' content='' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://next-portafolio-psi.vercel.app/'
        />
        <meta property='twitter:title' content='Bimb - home' />
        <meta
          property='twitter:description'
          content='Portafolio creado con Nextjs'
        />
        <meta property='twitter:image' content='' />
      </Head>
      <Header />
      {theme === "dark" && <Burbujas />}
      {children}
    </div>
  );
};

export default Layout;
