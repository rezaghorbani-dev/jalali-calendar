import type { Draft } from "immer";

// Helper Types

export type StateUpdater<T> = (
  input: (State: Draft<T>) => void,
  source: string
) => void;

export type Ctx<T> = [T, StateUpdater<T>];

// App Context

export type AppState = {
  dir: "ltr" | "rtl";
  locale: "fa" | "en";
};

export type AppContext = Ctx<AppState>;

export type CtxProviderProps = {
  children: React.ReactNode;
};
