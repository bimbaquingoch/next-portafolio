const EduItem = ({ eduItem }) => {
  const { title, desc, fecha } = eduItem;
  return (
    <div className='flex mb-3 w-full transition-all duration-500'>
      <div className='pr-1'>
        {/* rounder */}
        <span className='shadow-lg relative block h-4 w-4 bg-purple-700 dark:bg-slate-200 rounded-full mt-2'></span>
        {/* line */}
        <span className='block w-[2px] bg-violet-700 dark:bg-gray-400 h-full translate-x-[7px]'></span>
      </div>
      <div className='shadow-md rounded-md p-3'>
        <p className='text-justify  text-purple-700 dark:text-slate-400'>
          {desc}
        </p>
        <p className='text-sm  text-violet-700 dark:text-zinc-400 py-1'>
          {fecha}
        </p>
        <p className='text-indigo-600 dark:text-gray-300'>{title}</p>
      </div>
    </div>
  );
};

export default EduItem;
