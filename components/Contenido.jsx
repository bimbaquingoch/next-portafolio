import Skills from "./Skills";

/* eslint-disable @next/next/no-img-element */
const Contenido = ({ habilidades }) => {
  return (
    <main className='principal'>
      <section className='principal_sec1'>
        <p className='hidden md:block mx-3 lg:mx-0 border-b-2 text-slate-500 mb-3'>
          Skills
        </p>
        <div className='historias'>
          <Skills habilidades={habilidades} />
        </div>
        {/* posts */}
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
