import { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useModal } from "../hooks";

const PokeVisualModal = () => {
  const { onClose, isOpen, selectedPokemon } = useModal();

  // ---------------------------------------------- Overlay stuff ----------------------------------------------
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.600"
      backdropFilter="blur(7.5px) hue-rotate(270deg)"
    />
  );
  // -----------------------------------------------------------------------------------------------------------

  const [overlay] = useState(<OverlayOne />);

  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size={"xl"}
        useInert={false}
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{selectedPokemon.name}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokeVisualModal;
