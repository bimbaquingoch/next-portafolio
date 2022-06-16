import Image from "next/image";
import Link from "next/link";

const ImgProfile = () => {
  return (
    <Link href={"/perfil"}>
      <a className='flex items-center gap-1' href=''>
        <Image
          width={35}
          height={35}
          className='rounded-full'
          src='https://avatars.githubusercontent.com/u/52583430'
          alt='bryan imbaquingo'
        />
        <p className='opacity-60 dark:opacity-100'>bimbaquingo</p>
      </a>
    </Link>
  );
};

export default ImgProfile;
