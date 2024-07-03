import { useCallback, useMemo, useState } from "react";
import { produce } from "immer";
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
      const newState = produce<TState>(input);
      console.log(source, newState);
      setState(newState);
    }, []);

    const memorizedValue: Ctx<TState> = useMemo(
      () => [state, updateState],
      [state, updateState]
    );

    return <ctx.Provider value={memorizedValue}>{children}</ctx.Provider>;
  };
