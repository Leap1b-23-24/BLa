import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 551,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          borderRadius="16px"
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
        >
          <img src="./modal.png" alt="Modal" className="w-[60px] h-[60px]" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Бүтээгдэхүүн амжилттай нэмэгдлээ.
          </Typography>
          <button className="btn bg-black text-white">
            Тохиргоог үргэлжлүүлэх
          </button>
        </Box>
      </Modal>
    </div>
  );
}
