import { useCallback, useMemo, useState } from "react";
import { Provider, useSelector, useStore } from "react-redux";
import { useAppSelector, useAppDispatch } from "./storeHooks";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { store } from "./store";
import listOffers from "./service/list-service";

import { Stage } from "./types";
import { stages } from "./constants";

import {
  BackgroundContainer,
  ContentContainer,
  MainContainer,
} from "./components/StyledComponents";
import Breadcrumb from "./components/Breadcrumb";
import Navigation from "./components/Navigation";
import TicketList from "./components/TicketList";

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
  const [currentStage, setCurrentStage] = useState<Stage>(0);
  const { data, isError, isLoading } = useQuery(["offers"], listOffers);
  const basket = useAppSelector((state) => state.basket);

  const prevStage = () =>
    setCurrentStage(
      currentStage === 0 ? (0 as Stage) : ((currentStage - 1) as Stage)
    );
  const nextStage = () => {
    const next =
      currentStage === stages.length - 1
        ? ((stages.length - 1) as Stage)
        : ((currentStage + 1) as Stage);
    setCurrentStage(next);
  };

  const renderMainComponent = useCallback(
    (stage: Stage) => {
      const components = {
        0: <TicketList tickets={data ?? []} />,
        1: <>kosár</>,
        2: <>fizetési adatok</>,
        3: <>jegyek küldése</>,
      };
      return components[stage];
    },
    [data]
  );

  return (
    <BackgroundContainer>
      <MainContainer>
        <Breadcrumb stages={stages} current={currentStage} />
        <ContentContainer>{renderMainComponent(currentStage)}</ContentContainer>
        <Navigation
          onPrevClick={prevStage}
          prevDisabled={currentStage === 0}
          onNextClick={nextStage}
          nextDisbled={
            currentStage === stages.length - 1 || basket.tickets.length < 1
          }
        />
      </MainContainer>
    </BackgroundContainer>
  );
};

export default WrappedApp;
