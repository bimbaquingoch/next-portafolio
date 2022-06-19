/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FiGithub } from "react-icons/fi";
import { HiLink } from "react-icons/hi";
import usePortafolio from "hooks/usePortafolio";

const GridImg = () => {
  const { proyectos } = usePortafolio();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 pb-7'>
      {proyectos.map((proyecto) => (
        <Fade key={proyecto._id}>
          <div className='w-full h-28 md:h-60 lg:h-72 relative'>
            <div className='divHover'>
              <Link href={""}>
                <a
                  className='btnPost h-8 w-8 md:h-14 md:w-14'
                  target={"_blank"}
                  href={proyecto.repo_url}
                  rel='noreferrer'>
                  <FiGithub className='w-full h-full' />
                </a>
              </Link>
              <Link href={""}>
                <a
                  className='btnPost h-8 w-8 md:h-14 md:w-14'
                  target={"_blank"}
                  href={proyecto.demo_url}
                  rel='noreferrer'>
                  <HiLink className='w-full h-full' />
                </a>
              </Link>
            </div>
            <img
              className='w-full h-full object-cover p-1 '
              src={proyecto.img_proyect.url}
              alt=''
            />
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default GridImg;
