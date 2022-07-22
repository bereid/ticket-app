import { Ticket, TicketInBasket } from "../../types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../storeHooks";
import { useMemo } from "react";

type BasketProps = {
  tickets: Ticket[];
};

const Basket = ({ tickets }: BasketProps) => {
  const basket = useAppSelector((state) => state.basket);

  const ticketsInBasket = useMemo(() => {
    return basket.tickets.map((t) => {
      const relatedTicket = tickets.find((ticket) => ticket.id === t.id);
      return {
        ...relatedTicket,
        value: t.value,
      } as TicketInBasket;
    });
  }, [basket, tickets]);

  const summary: number = useMemo(() => {
    let sum = 0;
    ticketsInBasket.forEach((t) => {
      sum += t.price * t.value;
    });
    return sum;
  }, [ticketsInBasket]);

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
