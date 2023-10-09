type UseOpenModalType = {
  seconds: number,
  handleToggleModal: () => void,
}

export const useOpenModal = ({ seconds, handleToggleModal }: UseOpenModalType) => {
  setTimeout(() => {
    handleToggleModal();
  }, seconds * 1000);
}
