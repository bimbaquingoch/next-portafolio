import { createContext, useState } from "react";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [habilidades, sethabilidades] = useState([]);
  const [proyectos, setproyectos] = useState([]);

  return (
    <PortafolioContext.Provider
      value={{
        habilidades,
        sethabilidades,
        proyectos,
        setproyectos,
      }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };
export default PortafolioContext;
