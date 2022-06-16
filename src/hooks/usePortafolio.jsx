import PortafolioContext from "context/PortafolioProvider";
import { useContext } from "react";

const usePortafolio = () => {
  return useContext(PortafolioContext);
};
export default usePortafolio;
