import Proyecto from "./Proyecto";
import { Fade } from "react-awesome-reveal";
import usePortafolio from "hooks/usePortafolio";

const Proyectos = () => {
  const { proyectos } = usePortafolio();

  return (
    <div className='pb-4'>
      {proyectos.map((proyecto) => (
        <Fade key={proyecto._id}>
          <Proyecto proyecto={proyecto} />
        </Fade>
      ))}
    </div>
  );
};

export default Proyectos;
