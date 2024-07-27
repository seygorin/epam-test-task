import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { startEngine, stopEngine } from "../store/api/engineApi";
import {
  setStartTime,
  setIsRacing,
  setPositions,
  setWinner,
  setStoppedCars,
} from "../store/slices/garageSlice";

export const useRaceActions = () => {
  const dispatch = useDispatch();

  const handleStartEngine = useCallback(
    async (id) => {
      await dispatch(startEngine(id));
      dispatch(setStartTime({ [id]: performance.now() }));
    },
    [dispatch],
  );

  const handleStopEngine = useCallback(
    (id) => {
      dispatch(stopEngine(id));
    },
    [dispatch],
  );

  const resetRace = useCallback(() => {
    dispatch(setIsRacing(false));
    dispatch(setPositions({}));
    dispatch(setWinner(null));
    dispatch(setStoppedCars([]));
  }, [dispatch]);

  return {
    handleStartEngine,
    handleStopEngine,
    resetRace,
    dispatch,
  };
};
