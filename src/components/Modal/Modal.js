import Dialog from '@mui/material/Dialog';
import './Modal.css'

const Modal = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog className="modal" onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default Modal