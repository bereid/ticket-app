import { AxiosResponse } from "axios";
import service from "./service";
import { Ticket } from "../types";

const listOffers = async (): Promise<Ticket[]> => {
  return service.get("/offers").then((response) => response.data);
};

export default listOffers;
