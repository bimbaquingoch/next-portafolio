import { createContext, useState } from "react";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [habilidades, sethabilidades] = useState([]);
  const [proyectos, setproyectos] = useState([]);
  const [education, seteducation] = useState([]);

  return (
    <PortafolioContext.Provider
      value={{
        habilidades,
        sethabilidades,
        proyectos,
        setproyectos,
        education,
        seteducation,
      }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };
export default PortafolioContext;
