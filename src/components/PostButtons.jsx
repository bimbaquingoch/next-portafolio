import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiLink } from "react-icons/hi";

const PostButtons = ({ repo_url, demo_url }) => {
  return (
    <div className='flex p-2 px-3 mt-1 w-full justify-between'>
      <Link href={""}>
        <a
          className='btnPost'
          target={"_blank"}
          href={repo_url}
          rel='noreferrer'>
          <FiGithub size={30} />
        </a>
      </Link>
      <Link href={""}>
        <a
          className='btnPost'
          target={"_blank"}
          href={demo_url}
          rel='noreferrer'>
          <HiLink size={30} />
        </a>
      </Link>
    </div>
  );
};

export default PostButtons;
