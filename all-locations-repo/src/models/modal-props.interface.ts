export interface ModalProps {
  isShown: boolean
  hide: () => void
  count: number
  modalContent: JSX.Element
  name?: string
}
