import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function SonucModal({ totalScore,calculateMinFinalExamScore }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button color="secondary" onPress={onOpen}>Hesapla</Button>
      <Modal
       className="dark text-foreground"
       size="sm"
       isOpen={isOpen} 
       onOpenChange={onOpenChange}
       placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sonuçlar:</ModalHeader>
              <ModalBody>
                <h2 >Ağırlıklı kurul ortalaması: <span className="text-lg font-semibold"> {totalScore}</span></h2>
                <h2>Final için minimum not: <span className="text-lg font-semibold">{calculateMinFinalExamScore}</span></h2>

              </ModalBody>
              <ModalFooter>
                <Button color="secondary"  onPress={onClose}>
                  Tamam
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
