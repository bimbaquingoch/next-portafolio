/* eslint-disable @next/next/no-img-element */

import usePortafolio from "hooks/usePortafolio";

const Skills = () => {
  const { habilidades } = usePortafolio();

  return (
    <>
      <p className='md:mx-3 lg:mx-0 dark:text-slate-300 border-b-2 text-slate-500 md:mb-3 mt-3 md:mt-0'>
        Skills
      </p>
      <div className='historias'>
        {habilidades.map((habilidad) => (
          <div key={habilidad._id}>
            <div className='rounded-full border-2 border-red-300 cursor-pointer overflow-hidden h-14 w-14'>
              <img
                className='w-full'
                src={`${habilidad.im_skill.url}`}
                alt={`${habilidad.skill}`}
              />
            </div>
            <p className='font-light text-sm truncate text-slate-600 dark:text-slate-100 w-14 mt-1 text-center'>
              {habilidad.skill}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
