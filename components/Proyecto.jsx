/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

import PostButtons from "./PostButtons";

const Proyecto = ({ proyecto }) => {
  const {
    title,
    img_proyect,
    fecha_inicio,
    demo_url,
    repo_url,
    tech,
    description,
  } = proyecto;
  return (
    <div className='bg-slate-50 dark:backdrop-blur-md dark:bg-slate-600 my-3 md:my-5 md:rounded-md dark:shadow-lg '>
      <div className='flex p-2 items-center justify-between'>
        <Link href={""}>
          <a className='flex items-center gap-3' href=''>
            <Image
              width={40}
              height={40}
              className='rounded-full'
              src='https://avatars.githubusercontent.com/u/52583430'
              alt='bryan imbaquingo'
            />
            <p>bimbaquingo</p>
          </a>
        </Link>
        <p>
          Created at:
          <span className='ml-2 text-sky-400'>{fecha_inicio}</span>
        </p>
      </div>

      <img className='object-cover w-full' src={img_proyect.url} alt={title} />

      <PostButtons repo_url={repo_url} demo_url={demo_url} />

      <div className='flex p-2 flex-wrap items-center pb-3'>
        <Link href={""}>
          <a className='flex items-center gap-1' href=''>
            <Image
              width={40}
              height={40}
              className='rounded-full'
              src='https://avatars.githubusercontent.com/u/52583430'
              alt='bryan imbaquingo'
            />
            <p>bimbaquingo:</p>
          </a>
        </Link>
        <span className='ml-1 text-slate-500 dark:text-slate-200'>
          {`${description}. `}
        </span>{" "}
        Behind this project I used:{" "}
        <span className='ml-1 text-sky-600 dark:text-sky-400 capitalize'>
          {tech}
        </span>
      </div>
    </div>
  );
};

export default Proyecto;
