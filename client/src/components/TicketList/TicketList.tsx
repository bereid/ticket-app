import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircleRounded } from "@mui/icons-material";
import useBasket from "../../hooks/useBasket";

import { Ticket } from "../../types";

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  const { numberOfTicketInTheBusket, addToBasket, clearFromBasket } = useBasket(
    { tickets }
  );

  return (
    <List
      dense={true}
      sx={{
        position: "relative",
        overflow: "auto",
        maxHeight: 480,
        margin: "0 24px",
      }}
    >
      {tickets?.map((ticket) => (
        <ListItem key={ticket.name} disabled={ticket.available <= 0} divider>
          <ListItemText
            primary={ticket.name}
            secondary={`Ár: ${ticket.price} Ft, elérhető: ${ticket.available} darab`}
          />
          {numberOfTicketInTheBusket(ticket.id) !== 0 && (
            <ListItemText
              sx={{
                textAlign: "right",
                marginRight: 2,
              }}
              primary={`Kosárban:`}
              secondary={`${numberOfTicketInTheBusket(ticket.id)} darab`}
            />
          )}
          <ListItemAvatar>
            <IconButton onClick={() => addToBasket(ticket)}>
              <AddCircleRounded />
            </IconButton>
          </ListItemAvatar>
          <ListItemAvatar>
            <IconButton onClick={() => clearFromBasket(ticket)}>
              <DeleteIcon />
            </IconButton>
          </ListItemAvatar>
        </ListItem>
      ))}
    </List>
  );
};

export default TicketList;
