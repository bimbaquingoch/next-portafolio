import Image from "next/image";
import PerfilContent from "./PerfilContent";

const HeaderProfile = () => {
  return (
    <header className='grid grid-cols-3 p-3'>
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
      <section className='col-start-2 col-end-4 flex flex-col gap-1'>
        <h1 className='text-xl'>bryandresimba</h1>
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
