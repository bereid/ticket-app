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
import Final from "./components/Final";
import Navigation from "./components/Navigation";
import TicketList from "./components/TicketList";
import {
  BackgroundContainer,
  ContentContainer,
  MainContainer,
} from "./components/StyledComponents";
import { useAppSelector } from "./storeHooks";

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
  const {
    data: tickets,
    isError,
    isLoading,
  } = useQuery(["tickets"], listOffers);
  const {
    currentStage,
    prevStage,
    nextStage,
    prevDisabled,
    nextDisabled,
    isOnLastStage,
  } = usePagination();

  const state = useAppSelector((state) => state);

  console.log(state);

  const renderMainComponent = useCallback(
    (stage: Stage) => {
      const components = {
        0: <TicketList tickets={tickets ?? []} />,
        1: <Basket tickets={tickets ?? []} />,
        2: <Contact />,
        3: <Final tickets={tickets ?? []} />,
      };
      return components[stage];
    },
    [tickets]
  );

  return (
    <BackgroundContainer>
      <MainContainer>
        <Breadcrumb stages={stages} current={currentStage} />
        <ContentContainer>{renderMainComponent(currentStage)}</ContentContainer>
        <Navigation
          onPrevClick={prevStage}
          prevDisabled={prevDisabled}
          onNextClick={nextStage}
          nextDisbled={nextDisabled}
          isOnLastStage={isOnLastStage}
        />
      </MainContainer>
    </BackgroundContainer>
  );
};

export default WrappedApp;
