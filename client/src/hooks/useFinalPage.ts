import { useCallback, useState } from "react";
import { setPrintedAll, setSentAll } from "../features/user";
import { useAppDispatch } from "../storeHooks";

import { Ticket } from "../types";

type UseFinalPageProps = {
  ticketsInBasketButSeparately: Ticket[];
};

const useFinalPage = ({ ticketsInBasketButSeparately }: UseFinalPageProps) => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<number[]>([]);
  const [printed, setPrinted] = useState<number[]>([]);
  const [sent, setSent] = useState<number[]>([]);

  const toggleSelection = useCallback(
    (index: number) => {
      let newSelected = [...selected];
      const indexOfSelected = selected.indexOf(index);
      if (indexOfSelected > -1) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(index);
      }
      setSelected(newSelected);
    },
    [selected]
  );

  const send = useCallback(() => {
    const union = Array.from(new Set([...selected, ...sent]));
    if (union.length === ticketsInBasketButSeparately.length)
      dispatch(setSentAll());
    setSent(union);
  }, [selected, ticketsInBasketButSeparately]);

  const print = useCallback(() => {
    const union = Array.from(new Set([...selected, ...printed]));
    if (union.length === ticketsInBasketButSeparately.length)
      dispatch(setPrintedAll());
    setPrinted(union);
  }, [selected, ticketsInBasketButSeparately]);

  const toggleAll = () =>
    selected.length === ticketsInBasketButSeparately?.length
      ? setSelected([])
      : setSelected(ticketsInBasketButSeparately?.map((_, i) => i));

  const isPrinterIconShown = useCallback(
    (index: number) => printed.includes(index),
    [printed]
  );

  const isEmailIconShown = useCallback(
    (index: number) => sent.includes(index),
    [sent]
  );

  return {
    selected,
    printed,
    sent,
    toggleSelection,
    send,
    print,
    toggleAll,
    isPrinterIconShown,
    isEmailIconShown,
  };
};

export default useFinalPage;
