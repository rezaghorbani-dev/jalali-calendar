import { Context, createContext, useContext } from "react";
import { WrongContextPlacementError } from "../../lib/errors";

export const createCtx = <T>() => createContext<T | undefined>(undefined);

export const useCtx = <T>(ctx: Context<T>) => {
  const value = useContext<T>(ctx);

  if (value === undefined) {
    throw new WrongContextPlacementError(`use${ctx.displayName}`);
  }

  return value;
};

export * from "./provider-builder";
