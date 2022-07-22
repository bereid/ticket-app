export type Stage = 0 | 1 | 2 | 3;

export type BreadcrumbStage = {
  order: Stage;
  name: string;
};

export type BasketItem = {
  id: number;
  value: number;
};

export type Basket = {
  ticketsInBasket: BasketItem[];
};

export type Ticket = {
  id: number;
  name: string;
  available: number;
  price: number;
};

export type TicketInBasket = Ticket & BasketItem;
