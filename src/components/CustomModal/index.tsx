import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa'
import { Container } from './styles';

interface CustomModalProps {
  isOpen: boolean;
  children: any
  onRequestClose: () => void;
}

export function CustomModal(props: CustomModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="overlayCustomModal"
      className="contentCustomModal"
    >
      <Container>
        <FaWindowClose id="closeModalButton" onClick={props.onRequestClose} />
        {props.children}
      </Container>
    </Modal>
  )
}