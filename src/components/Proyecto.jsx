/* eslint-disable @next/next/no-img-element */
import ImgProfile from "./ImgProfile";
import PostButtons from "./PostButtons";

const Proyecto = ({ proyecto }) => {
  return (
    <div className='proyecto'>
      <div className='flex p-2 items-center justify-between'>
        <ImgProfile />
        <p>
          Created at:
          <span className='ml-2 text-sky-400'>{proyecto.fecha_inicio}</span>
        </p>
      </div>

      <img
        className='object-cover w-full'
        src={proyecto.img_proyect.url}
        alt={proyecto.title}
      />

      <PostButtons repo_url={proyecto.repo_url} demo_url={proyecto.demo_url} />

      <div className='flex px-3 flex-wrap items-center pb-3'>
        <ImgProfile />
        <span className='mt-2'>
          <span className='text-slate-500 dark:text-slate-200'>
            {proyecto.description}
          </span>
          {`. Behind this project I used: `}
          <span className='text-sky-500 dark:text-sky-400'>
            {proyecto.tech}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Proyecto;
