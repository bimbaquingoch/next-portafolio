import Image from "next/image";
import Link from "next/link";
import PerfilContent from "./PerfilContent";
import { BiLink } from "react-icons/bi";

const HeaderProfile = () => {
  return (
    <header className='grid grid-cols-3 p-3 backdrop-blur-lg rounded-md dark:shadow-md mb-2'>
      <div className='w-20 h-20 md:w-36 md:h-36 mx-auto'>
        <Image
          layout='responsive'
          width={100}
          height={100}
          className='rounded-full'
          src='https://avatars.githubusercontent.com/u/52583430'
          alt='bryan imbaquingo'
        />
      </div>
      <section className='col-start-2 col-end-4 flex flex-col gap-1 items-center md:items-start justify-center'>
        <h1 className='text-xl'>bryandresimba</h1>
        <Link href={""}>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            href='https://resume-red-gamma.vercel.app/'
            target={"_blank"}
            className='bg-slate-200 flex gap-1 items-center rounded-md px-5 py-1  capitalize dark:text-slate-600'>
            <BiLink />
            see cv
          </a>
        </Link>
        <section className='col-start-1 col-end-4 my-2 hidden md:block w-full'>
          <PerfilContent />
        </section>
      </section>
      <section className='col-start-1 col-end-4 my-2 md:hidden w-full flex flex-col gap-1'>
        <PerfilContent />
      </section>
    </header>
  );
};

export default HeaderProfile;
