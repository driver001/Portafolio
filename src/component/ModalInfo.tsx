import { Box, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { setIsOpen } from "../redux/modalSlice";
import { RootState } from "../redux/store";
import { MODAL_STYLE } from "../utils/const";

const ModalInfo = () => {
  const user = useSelector((state: RootState) => state.user);
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setIsOpen(false));

  return (
    <Modal open={modal.isOpen} onClose={handleClose}>
      <Box sx={MODAL_STYLE}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Datos de Contacto
        </Typography>
        <Typography sx={{ mt: 2 }}>{user.name}</Typography>

        <Typography sx={{ mt: 1 }}>{user.email}</Typography>
        <Box
          component="a"
          href="https://wa.me/5804123579911"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          <WhatsAppIcon sx={{ mr: 2 }}></WhatsAppIcon>
          <span>{user.phone}</span>
        </Box>
        <Box
          component="a"
          href="https://ve.linkedin.com/in/andres-fernandez-043972b6"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          <LinkedInIcon sx={{ mr: 2 }}></LinkedInIcon>
          <span>Linkedin</span>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalInfo;
