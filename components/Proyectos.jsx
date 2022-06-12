import usePortafolio from "../hooks/usePortafolio";
import Proyecto from "./Proyecto";
import { Fade } from "react-awesome-reveal";

const Proyectos = () => {
  const { proyectos } = usePortafolio();

  return (
    <div className='pb-4'>
      {proyectos.map((proyecto) => (
        <Fade key={proyecto._id} direction='left' triggerOnce>
          <Proyecto proyecto={proyecto} />
        </Fade>
      ))}
    </div>
  );
};

export default Proyectos;
