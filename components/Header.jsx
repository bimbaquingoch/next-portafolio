import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const [dark, setdark] = useState(false);
  return (
    <header className='header'>
      <div className='header_content'>
        <h1>Portfolio</h1>
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
          {dark ? (
            <Link href={""}>
              <a className='' onClick={() => setdark(!dark)} href=''>
                <BiSun size={40} />
              </a>
            </Link>
          ) : (
            <Link href={""}>
              <a
                className='hover:bg-slate-800 p-0 hover:text-slate-100'
                onClick={() => setdark(!dark)}
                href=''>
                <BiMoon size={40} />
              </a>
            </Link>
          )}
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
