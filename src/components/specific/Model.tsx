import { ReactNode } from 'react'

interface  ModalPropType  {
    open: boolean,
    onClose: () => void
    onOpen: () => void
    children: ReactNode
    
    }

const Modal = ({open, onClose, children}:ModalPropType) => {
  return (
    <div className={`flex h-screen fixed inset-0 justify-center items-center transition-colors  ${open? 'bg-[#1b2029] visible': 'invisible'}`} onClick={onClose}>
     {children}
    </div>
  )
}

export default Modal
