import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Contenido = () => {
  return (
    <main className='principal'>
      <section className='principal_sec1'>
        {/* historias */}
        <div className='flex space-x-2 pt-3 px-3 md:bg-slate-200 shadow-md shadow-slate-400 md:rounded-md overflow-x-scroll rounded-none bg-slate-100'>
          <div>
            <div className='rounded-full border-2 border-red-300 cursor-pointer overflow-hidden h-14 w-14'>
              <img
                className='w-full'
                src='https://avatars.githubusercontent.com/u/52583430'
                alt=''
              />
            </div>
            <p className='font-light text-sm truncate w-14 mt-1 text-center'>
              html
            </p>
          </div>
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
