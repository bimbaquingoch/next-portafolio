/* eslint-disable @next/next/no-img-element */

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
        {/* fixed */}
        <div className='h-max w-max fixed'>
          <h1 className='bg-teal-300'>mini</h1>
        </div>
      </section>
    </main>
  );
};

export default Contenido;