import { useState } from "react";
import { ModalContext } from "./ModalContext";
// import CreateModal from "src/common/modal/createModal";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [isPopup, setPopup] = useState(true);
  //meta mask
  const [metamaskModal, setMetamaskModal] = useState(false);
  const [accounts, setAccounts] = useState(null);

  const handleAccountConnect = (acc) => {
    setAccounts(acc);
  };

  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const AMMModalHandle = () => {
    setVisibility(!visibility);
  };
  const CreateModalHandle = () => {
    setVisibility(!visibility);
  };
  const barterModalHandle = () => {
    setVisibility(!visibility);
  };
  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };
  const popupHandle = () => {
    setPopup(!isPopup);
  };

  const handleMetamaskModal = () => {
    setModalvisibility(!walletModalvisibility);
    setMetamaskModal(!metamaskModal);
  };

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        barterModalHandle,
        AMMModalHandle,
        CreateModalHandle,
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        isPopup,
        popupHandle,
        metamaskModal,
        handleMetamaskModal,
        handleAccountConnect,
        accounts,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
