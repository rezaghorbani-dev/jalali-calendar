import type { Spec } from "immutability-helper";

// Helper Types

export type UpdatedState<T> = Spec<T, never>;

export type StateUpdater<T> = (
  input: (State: T) => UpdatedState<T>,
  source: string
) => void;

export type Ctx<T> = [T, StateUpdater<T>];

// Layout Context

export type LayoutState = {
  dir: "ltr" | "rtl";
  locale: "fa" | "en";
};

export type LayoutContext = Ctx<LayoutState>;

export type CtxProviderProps = {
  children: React.ReactNode;
};
