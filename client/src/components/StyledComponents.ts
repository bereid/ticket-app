import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import bg from "../festival.jpg";

export const colors = {
  primary: "#0c9d9a",
  dark: "#053c3c",
  light: "#0C9D9A",
};

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-positition: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled(Card)`
  width: 60%;
  min-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  height: 500px;
`;

export const BreadcrumbContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: ${colors.light}33;
`;

export const BreadcrumbItem = styled(Box)<{ active: boolean }>`
  justify-self: center;
  font-size: 10;
  color: ${({ active }) => (active ? colors.dark : colors.light)};
  font-weight: ${({ active }) => (active ? "bold" : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  max-width: 100px;

  > div {
    background-color: ${({ active }) => (active ? colors.dark : colors.light)};
  }
`;

export const BreadcrumbNumber = styled.div`
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 8px;
`;

export const NavigationContainer = styled(Box)`
  padding: 32px 0;
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.light}33;
`;

export const NavigationButton = styled(Button)`
  && {
    background-color: ${colors.light};

    &:hover {
      background-color: ${colors.dark};
    }
  }
`;

export const FormContainer = styled(Box)`
  margin: auto;
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

export const FinalCard = styled(Paper)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;

  &:hover {
    border: 1px solid ${colors.dark};
  }
`;

export const FinalCardHeader = styled.div`
  color: ${colors.dark};
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

export const FinalCardContentContainer = styled(Grid)`
  color: ${colors.light};
`;

export const FinalCardContentItem = styled(Grid)`
  font-size: 12px;
  &:nth-child(even) {
    text-align: right;
  }
`;

export const FinalContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PanelContainer = styled(Grid)`
  padding: 24px;
`;

export const PanelButton = styled(Button)`
  && {
    background-color: ${colors.light};

    &:hover {
      background-color: ${colors.dark};
    }
  }
`;

export const FinalCardContainer = styled(Grid)`
  max-height: 400px;
  overflow-y: scroll;
  padding: 8px 16px;
  margin-top: 0 !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardCover = styled(Box)`
  position: absolute;
  background-color: ${colors.primary};
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
