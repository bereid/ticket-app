import { Button, Grid, FormControlLabel, Switch } from "@mui/material";

import { PanelContainer, PanelButton } from "../StyledComponents";

import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";

type FinalBottomPanelProps = {
  toggleAll: () => void;
  send: () => void;
  print: () => void;
};

const FinalBottomPanel = ({
  toggleAll,
  print,
  send,
}: FinalBottomPanelProps) => {
  return (
    <PanelContainer container>
      <Grid item xs={6}>
        <FormControlLabel
          control={<Switch onChange={toggleAll} />}
          label="Mind kijelölése / Kijelölés törlése"
        />
      </Grid>
      <Grid item xs={3}>
        <PanelButton variant="contained" onClick={send}>
          <EmailIcon fontSize="large" />
          Küldés
        </PanelButton>
      </Grid>
      <Grid item xs={3}>
        <PanelButton variant="contained" onClick={print}>
          <PrintIcon fontSize="large" />
          Nyomtatás
        </PanelButton>
      </Grid>
    </PanelContainer>
  );
};

export default FinalBottomPanel;
