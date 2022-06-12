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
        <meta name='description' content='Portafolio creado con Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {theme === "dark" && <Burbujas />}
      {children}
    </div>
  );
};

export default Layout;
