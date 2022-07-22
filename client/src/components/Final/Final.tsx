import { useCallback, useState } from "react";
import { Grid, Box } from "@mui/material";
import useBasket from "../../hooks/useBasket";
import { Ticket } from "../../types";

import FinalBottomPanel from "../FinalBottomPanel";
import {
  colors,
  FinalContainer,
  FinalCard,
  FinalCardContainer,
  FinalCardContentContainer,
  FinalCardContentItem,
  FinalCardHeader,
} from "../StyledComponents";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

type FinalProps = {
  tickets: Ticket[];
};

const Final = ({ tickets }: FinalProps) => {
  const { ticketsInBasketButSeparately } = useBasket({ tickets });
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelection = useCallback(
    (id: number) => {
      let newSelected = [...selected];
      const index = selected.indexOf(id);
      if (index > -1) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(id);
      }
      setSelected(newSelected);
    },
    [selected]
  );

  const toggleAll = () =>
    selected.length === ticketsInBasketButSeparately?.length
      ? setSelected([])
      : setSelected(ticketsInBasketButSeparately?.map((_, i) => i));

  console.log(selected);

  return (
    <FinalContainer>
      <FinalCardContainer container spacing={2}>
        {ticketsInBasketButSeparately.map((ticket, i) => (
          <Grid key={ticket.name} item xs={4}>
            <FinalCard
              onClick={() => toggleSelection(i)}
              style={{
                backgroundColor: selected.includes(i)
                  ? `${colors.light}33`
                  : "",
                border: selected.includes(i) ? `1px solid ${colors.dark}` : "",
              }}
              elevation={6}
            >
              <ConfirmationNumberIcon
                style={{ color: colors.dark }}
                fontSize="large"
              />
              <FinalCardHeader>{ticket.name}</FinalCardHeader>
              <FinalCardContentContainer
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                rowSpacing={1}
              >
                <FinalCardContentItem item xs={6}>
                  Darab:
                </FinalCardContentItem>
                <FinalCardContentItem item xs={6}>
                  1
                </FinalCardContentItem>
                <FinalCardContentItem item xs={6}>
                  Ár:
                </FinalCardContentItem>
                <FinalCardContentItem item xs={6}>
                  {`${ticket.price} Ft`}
                </FinalCardContentItem>
              </FinalCardContentContainer>
            </FinalCard>
          </Grid>
        ))}
      </FinalCardContainer>
      <FinalBottomPanel
        toggleAll={toggleAll}
        print={() => {}}
        send={() => {}}
      />
    </FinalContainer>
  );
};

export default Final;
