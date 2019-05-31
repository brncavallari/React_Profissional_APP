import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Michael from "../../src/imagens/tenor.gif";

const VictoryDialog = ({ isOpen, onClose, onGameRestart }) => (
    <Dialog open={isOpen} onClose={onClose}>
        <DialogContent>
            <img src={Michael}></img>
        </DialogContent>
        <DialogActions>
            <Button color="primary" onClick={onGameRestart}>
                Reiniciar
      </Button>
            <Button color="primary" onClick={onClose} autoFocus>
                Ok
      </Button>
        </DialogActions>
    </Dialog>
);

export default VictoryDialog;