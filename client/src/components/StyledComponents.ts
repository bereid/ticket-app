import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

export const colors = {
  primary: "#0c9d9a",
  dark: "#053c3c",
  light: "#0C9D9A",
};

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.primary};
  display: flex;
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
  margin: 32px 0;
  display: flex;
  justify-content: space-evenly;
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
