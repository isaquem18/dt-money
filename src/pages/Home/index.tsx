import { useState } from 'react';
import { CustomModal } from '../../components/CustomModal';
import Modal from 'react-modal';
import Dashboard from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from '../../components/NewTransactionModal';

export function Home() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  Modal.setAppElement('#root');

  const handleOpenModalButtonClick = () => {
    setNewTransactionModalOpen(true);
  }


  return (
    <>
      <CustomModal
        isOpen={newTransactionModalOpen}
        onRequestClose={() => setNewTransactionModalOpen(false)}
      >
        <NewTransactionModal />
      </CustomModal>
      <Header handleOpenModalButtonClick={handleOpenModalButtonClick} />
      <Dashboard />
    </>
  )
}