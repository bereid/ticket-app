import useBasket from "../../hooks/useBasket";
import useFinalPage from "../../hooks/useFinalPage";

import { Ticket } from "../../types";

import FinalBottomPanel from "../FinalBottomPanel";
import {
  colors,
  CardCover,
  FinalContainer,
  FinalCard,
  FinalCardContainer,
  FinalCardContentContainer,
  FinalCardContentItem,
  FinalCardHeader,
} from "../StyledComponents";
import { Grid } from "@mui/material";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmailIcon from "@mui/icons-material/Email";
import PrintIcon from "@mui/icons-material/Print";

type FinalProps = {
  tickets: Ticket[];
};

const Final = ({ tickets }: FinalProps) => {
  const { ticketsInBasketButSeparately } = useBasket({ tickets });
  const {
    selected,
    printed,
    sent,
    toggleSelection,
    send,
    print,
    toggleAll,
    isPrinterIconShown,
    isEmailIconShown,
  } = useFinalPage({ ticketsInBasketButSeparately });

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
              {(isPrinterIconShown(i) || isEmailIconShown(i)) && (
                <CardCover>
                  <FinalCardHeader>{ticket.name}</FinalCardHeader>
                  <FinalCardContentContainer
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    rowSpacing={1}
                  >
                    {isEmailIconShown(i) && (
                      <EmailIcon
                        style={{ color: colors.dark }}
                        fontSize="large"
                      />
                    )}
                    {isPrinterIconShown(i) && (
                      <PrintIcon
                        style={{ color: colors.dark }}
                        fontSize="large"
                      />
                    )}
                  </FinalCardContentContainer>
                </CardCover>
              )}
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
      <FinalBottomPanel toggleAll={toggleAll} print={print} send={send} />
    </FinalContainer>
  );
};

export default Final;
