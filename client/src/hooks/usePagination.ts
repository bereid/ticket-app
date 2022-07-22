import { useState, useMemo } from "react";
import { validateEmail } from "../utils";
import { useAppSelector } from "../storeHooks";

import { Stage } from "../types";
import { stages } from "../constants";

const usePagination = () => {
  const [currentStage, setCurrentStage] = useState<Stage>(0);
  const basket = useAppSelector((state) => state.basket);
  const user = useAppSelector((state) => state.user);

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

  const prevDisabled = useMemo(() => currentStage === 0, [currentStage]);

  const nextDisabled = useMemo(() => {
    let disabled = false;
    if (currentStage === 0 && basket.ticketsInBasket.length < 1)
      disabled = true;
    if (currentStage === 1 && basket.ticketsInBasket.length < 1)
      disabled = true;
    if (
      currentStage === 2 &&
      (!validateEmail(user.email) || user.name.length <= 1)
    )
      disabled = true;
    if (currentStage === 3) disabled = true;
    return disabled;
  }, [currentStage, user, basket]);

  const isOnLastStage = currentStage === stages.length - 1;

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
