const createModalManager = () => {
  const ModalManager = ({ children }) => {
    const [openedModals, setOpenedModals] = useState([]);
    const modalManager = useModalManager();

    function openModal(modal) {
      const key = uuidv();
      setOpenedModals((state) => {
        return [...state, { key, modal: modal }];
      });
      return key;
    }

    function closeModal(modalKey) {
      const currentModal = findCurrentModal(modalKey);

      setOpenedModals((prevModals) => {
        return prevModals.filter((item) => item !== currentModal);
      });
    }

    return (
      <ModalManagerContext.Provider value={openedModals}>
        {children}
      </ModalManagerContext.Provider>
    );
  };
};
