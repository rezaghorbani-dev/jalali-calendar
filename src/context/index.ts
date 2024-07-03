import { createCtx, ctxProviderBuilder, useCtx } from "./utils";
import type { AppContext, AppState } from "./types";

const initialState: AppState = {
  dir: "rtl",
  locale: "fa",
};

export const AppCtx = createCtx<AppContext>();

export const AppCtxProvider = ctxProviderBuilder(initialState, AppCtx);

export const useApp = () => useCtx(AppCtx)[0];

export const useAppUpdater = () => useCtx(AppCtx)[1];
