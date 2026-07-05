import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import SkeletonModal from "./SkeletonModal";
import type { MealDetails } from "../types";
import RecipeModaldata from "./RecipeModaldata";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  data: MealDetails | undefined;
};

const RecipeModal = ({ isOpen, onClose, loading, data }: Props) => {
  console.log("RecipeModal render - loading:", loading, "data:", data);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <SkeletonModal />
          ) : (
            data && <RecipeModaldata data={data} />
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
