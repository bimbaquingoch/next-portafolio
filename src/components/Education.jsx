import usePortafolio from "hooks/usePortafolio";
import EduItem from "./EduItem";
import ThreeJS from "./ThreeJS";

const Education = () => {
  const { education } = usePortafolio();
  return (
    <div className='fixed w-[341px] backdrop-blur-md h-screen    '>
      <p className='heading'>Education</p>
      <div className=' h-24'>
        <ThreeJS />
      </div>
      {education.map((eduItem) => (
        <EduItem key={eduItem._id} eduItem={eduItem} />
      ))}
    </div>
  );
};

export default Education;
