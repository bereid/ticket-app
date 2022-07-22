import { Ticket } from "../../types";
import useBasket from "../../hooks/useBasket";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../storeHooks";

type BasketProps = {
  tickets: Ticket[];
};

const Basket = ({ tickets }: BasketProps) => {
  const { ticketsInBasket, summary } = useBasket({ tickets });

  return (
    <List
      dense={true}
      sx={{
        position: "relative",
        overflow: "auto",
        maxHeight: 500,
        margin: "0 24px",
      }}
    >
      {ticketsInBasket?.map((ticket) => (
        <ListItem key={ticket.name} divider>
          <ListItemText
            primary={ticket.name}
            secondary={`Ár: ${ticket.price} Ft, elérhető: ${ticket.available} darab`}
          />
          <ListItemText
            sx={{
              textAlign: "right",
              marginRight: 2,
            }}
            primary={`Kosárban:`}
            secondary={`${ticket.value} darab`}
          />
        </ListItem>
      ))}
      <ListItem>
        <ListItemText
          sx={{
            textAlign: "right",
            marginRight: 2,
          }}
          primary={`Összesen:`}
          secondary={`${summary} Ft`}
        />
      </ListItem>
    </List>
  );
};

export default Basket;
