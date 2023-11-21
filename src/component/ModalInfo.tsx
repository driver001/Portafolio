import { Box, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { setIsOpen } from "../redux/modalSlice";
import { RootState } from "../redux/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalInfo = () => {
  const user = useSelector((state: RootState) => state.user);
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setIsOpen(false));

  return (
    <Modal open={modal.isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Conctac Info
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
