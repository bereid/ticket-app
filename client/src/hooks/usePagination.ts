import { useState, useMemo } from "react";
import { validateEmail } from "../utils";
import { useAppDispatch, useAppSelector } from "../storeHooks";

import { Stage } from "../types";
import { stages } from "../constants";
import { clearBasket } from "../features/basket";
import { clearUser } from "../features/user";

const usePagination = () => {
  const [currentStage, setCurrentStage] = useState<Stage>(0);
  const basket = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const { email, name, printedAll, sentAll } = useAppSelector(
    (state) => state.user
  );

  const isOnLastStage = currentStage === stages.length - 1;

  const prevStage = () =>
    setCurrentStage(
      currentStage === 0 ? (0 as Stage) : ((currentStage - 1) as Stage)
    );

  const nextStage = () => {
    const next = isOnLastStage ? (0 as Stage) : ((currentStage + 1) as Stage);
    if (isOnLastStage) {
      console.log("bejöttem");
      dispatch(clearBasket());
      dispatch(clearUser());
    }
    setCurrentStage(next);
  };

  const prevDisabled = useMemo(() => currentStage === 0, [currentStage]);

  const nextDisabled = useMemo(() => {
    let disabled = false;
    if (currentStage === 0 && basket.ticketsInBasket.length < 1)
      disabled = true;
    if (currentStage === 1 && basket.ticketsInBasket.length < 1)
      disabled = true;
    if (currentStage === 2 && (!validateEmail(email) || name.length <= 1))
      disabled = true;
    if (currentStage === 3 && !printedAll && !sentAll) disabled = true;
    return disabled;
  }, [currentStage, basket, email, name, printedAll, sentAll]);

  return {
    currentStage,
    prevStage,
    nextStage,
    prevDisabled,
    nextDisabled,
    isOnLastStage,
  };
};

export default usePagination;
