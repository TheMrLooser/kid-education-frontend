import { Close } from "@mui/icons-material";
import { Box, Dialog, Modal } from "@mui/material";
import React, { useState } from "react";
import {
  closeStyle,
  CongratsImage,
  DialogWrap,
  Message,
  MessageSection,
  Title,
} from "./Congrats.styles";

const Congrats = ({ open, setClose }) => {
  const handleClose = () => setClose(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogWrap>
        <Close sx={closeStyle} onClick={handleClose} />
        <MessageSection>
          <Title>Congratulations</Title>
          <Message> You have successfully purchased this course!</Message>
        </MessageSection>
        <CongratsImage src="/assets/congrats.png" alt="congrats" />
      </DialogWrap>
    </Dialog>
  );
};

export default Congrats;
