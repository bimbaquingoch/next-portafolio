/* eslint-disable @next/next/no-img-element */

import Education from "./Education";
import Proyectos from "./Proyectos";
import Skills from "./Skills";

const Contenido = () => {
  return (
    <main className='principal'>
      <section className='principal_sec1'>
        <Skills />
        <Proyectos />
      </section>
      <section className='principal_sec2'>
        <Education />
      </section>
    </main>
  );
};

export default Contenido;
