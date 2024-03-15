export const REQUEST = (actionType: string) =>
  `${actionType}_REQUEST`.toString();
export const SUCCESS = (actionType: string) => `${actionType}_SUCCESS`;
export const FAILURE = (actionType: string) => `${actionType}_FAILED`;
