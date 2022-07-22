import { useMemo, useCallback } from "react";
import { addTo, removeFrom } from "../features/basket";
import { useAppSelector, useAppDispatch } from "../storeHooks";

import { Ticket, TicketInBasket } from "../types";

type useBasketProps = {
  tickets: Ticket[];
};

const useBasket = ({ tickets }: useBasketProps) => {
  const basket = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const ticketsInBasket = useMemo(() => {
    return basket.ticketsInBasket.map((t) => {
      const relatedTicket = tickets.find((ticket) => ticket.id === t.id);
      return {
        ...relatedTicket,
        value: t.value,
      } as TicketInBasket;
    });
  }, [basket, tickets]);

  const ticketsInBasketButSeparately = useMemo(() => {
    const ticketsToReturn: Ticket[] = [];
    basket.ticketsInBasket.forEach((t) => {
      const relatedTicket = tickets.find((ticket) => ticket.id === t.id);
      if (relatedTicket) {
        for (let i = 0; i <= t.value - 1; i++) {
          ticketsToReturn.push(relatedTicket);
        }
      }
    });
    return ticketsToReturn;
  }, [basket, tickets]);

  const summary: number = useMemo(() => {
    let sum = 0;
    ticketsInBasket.forEach((t) => {
      sum += t.price * t.value;
    });
    return sum;
  }, [ticketsInBasket]);

  const numberOfTicketInTheBusket = useCallback(
    (id: number): number => {
      const ticketInBasket = basket.ticketsInBasket.find(
        (ticket) => ticket.id === id
      );
      if (!ticketInBasket) return 0;
      return ticketInBasket.value;
    },
    [tickets, basket]
  );

  const addToBasket = (ticket: Ticket) =>
    dispatch(addTo({ id: ticket.id, value: 1 }));

  const clearFromBasket = (ticket: Ticket) =>
    dispatch(removeFrom({ id: ticket.id }));

  return {
    ticketsInBasket,
    ticketsInBasketButSeparately,
    summary,
    numberOfTicketInTheBusket,
    addToBasket,
    clearFromBasket,
  };
};

export default useBasket;
