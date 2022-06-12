import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillHome } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => setmounted(true), []);
  if (!mounted) return null;
  return (
    <header className='header'>
      <div className='header_content'>
        <h1 className=''>Portfolio</h1>
        <nav className='navegacion'>
          <Link href={"/"}>
            <a href=''>
              <AiFillHome className='text-sky-500 p-1' size={40} />
            </a>
          </Link>

          <a
            className='hover:text-slate-50 hover:bg-black '
            href='https://github.com/bimbaquingoch'
            target={"_blank"}
            rel='noreferrer'>
            <AiFillGithub size={40} />
          </a>

          <a
            className='text-sky-400 hover:text-slate-50 hover:bg-sky-400'
            href='https://twitter.com/bryandresimba'
            target={"_blank"}
            rel='noreferrer'>
            <AiFillTwitterCircle size={40} />
          </a>

          <button
            className='shadow-md rounded-full dark:shadow-none shadow-slate-400 backdrop-blur-sm dark:text-slate-200'
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            href=''>
            {theme === "light" ? <BiMoon size={40} /> : <BiSun size={40} />}
          </button>

          <Link href={"/perfil"}>
            <a className='h-10 overflow-hidden' href=''>
              <Image
                width={40}
                height={40}
                className='h-full w-full'
                src='https://avatars.githubusercontent.com/u/52583430'
                alt=''
              />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
