import { __ as def } from "./ns";

export const __ = payload => ({
  type: def,
  action: payload
});
