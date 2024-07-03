import { useCallback, useMemo, useState } from "react";
import update from "immutability-helper";
import { Ctx, CtxProviderProps, StateUpdater } from "../types";

export const ctxProviderBuilder =
  <TState,>(
    initialState: TState,
    ctx: React.Context<Ctx<TState> | undefined>
  ) =>
  ({ children }: CtxProviderProps) => {
    // context management
    const [state, setState] = useState<TState>(initialState);

    const updateState: StateUpdater<TState> = useCallback((input, source) => {
      setState((currentState) => {
        const changes = input(currentState);

        const newState = update(currentState, changes);
        console.log(source, newState);

        return newState;
      });
    }, []);

    const memorizedValue: Ctx<TState> = useMemo(
      () => [state, updateState],
      [state, updateState]
    );

    return <ctx.Provider value={memorizedValue}>{children}</ctx.Provider>;
  };
