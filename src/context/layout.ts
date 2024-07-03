import { createCtx, ctxProviderBuilder, useCtx } from "./utils";
import type { LayoutContext, LayoutState } from "./types";

const initialState: LayoutState = {
  dir: "rtl",
  locale: "fa",
};

export const LayoutCtx = createCtx<LayoutContext>();

export const LayoutCtxProvider = ctxProviderBuilder(initialState, LayoutCtx);

export const useLayout = () => useCtx(LayoutCtx)[0];

export const useLayoutUpdater = () => useCtx(LayoutCtx)[1];
