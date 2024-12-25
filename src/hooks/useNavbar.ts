import { create } from "zustand";

interface NavbarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavbar = create<NavbarProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavbar;
