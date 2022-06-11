/* eslint-disable @next/next/no-img-element */

const Skills = ({ habilidades }) => {
  return habilidades.map((habilidad) => (
    <div key={habilidad.id}>
      <div className='rounded-full border-2 border-red-300 cursor-pointer overflow-hidden h-14 w-14'>
        <img
          className='w-full'
          src={`${habilidad.im_skill.url}`}
          alt={`${habilidad.skill}`}
        />
      </div>
      <p className='font-light text-sm truncate text-slate-600 w-14 mt-1 text-center'>
        {habilidad.skill}
      </p>
    </div>
  ));
};

export default Skills;
