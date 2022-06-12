import usePortafolio from "../hooks/usePortafolio";
import Proyecto from "./Proyecto";

const Proyectos = () => {
  const { proyectos } = usePortafolio();

  return (
    <div>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto._id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default Proyectos;
