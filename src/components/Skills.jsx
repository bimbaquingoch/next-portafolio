/* eslint-disable @next/next/no-img-element */

import usePortafolio from "hooks/usePortafolio";

const Skills = () => {
  const { habilidades } = usePortafolio();

  return (
    <>
      <p className='heading'>
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
