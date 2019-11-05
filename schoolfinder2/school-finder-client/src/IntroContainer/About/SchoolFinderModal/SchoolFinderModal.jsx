import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AboutSchooFinderModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    <div>
      <Button color="secondary" onClick={toggle}>Click Here</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>What is the Chicago SchooFinder App?</ModalHeader>
        <ModalBody>
            The Chicago SchoolFinder App is designed to help Chicago caregivers of children in grades K-12 find a suitable school for children in their care. 
            Using SchoolFinder increases a caregiver's ability to quickly find or eliminate schools based on the school's zipcode, the school's rating, whether the school has a dress code (uniform) policy, or if a school is proximate to public transit. 
        <br></br>
        <br></br>
          {/* <Button color="success" onClick={toggleNested}>What information do I need?</Button> */}
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            {/* <ModalHeader>What information do I need to consider?</ModalHeader> */}
            <ModalBody>.</ModalBody>
            {/* <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter> */}
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Done</Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AboutSchooFinderModal;