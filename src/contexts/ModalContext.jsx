import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const [selectedPokemon, setSelectedPokemon] = useState();

  const data = {
    isOpen,
    onClose,
    onOpen,
    onToggle,
    selectedPokemon,
    setSelectedPokemon,
  };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
