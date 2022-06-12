import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className='header'>
      <div className='header_content'>
        {/* <h1>Portfolio</h1> */}
        <h1 className=''>Portfolio</h1>
        <nav className='navegacion'>
          <Link href={""}>
            <a className='hover:text-slate-50 hover:bg-black ' href=''>
              <AiFillGithub size={40} />
            </a>
          </Link>
          <Link href={""}>
            <a
              className='text-sky-400 hover:text-slate-50 hover:bg-sky-400'
              href=''>
              <AiFillTwitterCircle size={40} />
            </a>
          </Link>
          {/* <Link href={""}> */}
          <button
            className='shadow-md rounded-full shadow-slate-400 backdrop-blur-sm dark:text-slate-200'
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            href=''>
            {theme === "light" ? <BiMoon size={40} /> : <BiSun size={40} />}
          </button>
          {/* </Link> */}
          <Link href={""}>
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
