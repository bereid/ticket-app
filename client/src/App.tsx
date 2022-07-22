import { useCallback } from "react";
import { Provider } from "react-redux";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { store } from "./store";
import listOffers from "./service/list-service";
import usePagination from "./hooks/usePagination";
import { Stage } from "./types";
import { stages } from "./constants";

import Basket from "./components/Basket";
import Breadcrumb from "./components/Breadcrumb";
import Contact from "./components/Contact";
import Logo from "./logo.jpeg";
import Navigation from "./components/Navigation";
import TicketList from "./components/TicketList";
import {
  BackgroundContainer,
  ContentContainer,
  MainContainer,
  StyledLogo,
} from "./components/StyledComponents";

const queryClient = new QueryClient();

const WrappedApp = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
};

const App = () => {
  const { data, isError, isLoading } = useQuery(["offers"], listOffers);
  const { currentStage, prevStage, nextStage, prevDisabled, nextDisabled } =
    usePagination();

  const renderMainComponent = useCallback(
    (stage: Stage) => {
      const components = {
        0: <TicketList tickets={data ?? []} />,
        1: <Basket tickets={data ?? []} />,
        2: <Contact />,
        3: <>jegyek küldése</>,
      };
      return components[stage];
    },
    [data]
  );

  return (
    <BackgroundContainer>
      <MainContainer>
        <StyledLogo src={Logo} />
        <Breadcrumb stages={stages} current={currentStage} />
        <ContentContainer>{renderMainComponent(currentStage)}</ContentContainer>
        <Navigation
          onPrevClick={prevStage}
          prevDisabled={prevDisabled}
          onNextClick={nextStage}
          nextDisbled={nextDisabled}
        />
      </MainContainer>
    </BackgroundContainer>
  );
};

export default WrappedApp;
