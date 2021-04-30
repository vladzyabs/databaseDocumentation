import { viewConstants } from '../constants';

export const viewActions: ViewActions = {
  increment: () => ({type: viewConstants.INCREMENT} as const),
  decrement: () => ({type: viewConstants.DECREMENT} as const),
};

export type ViewActions = {
  increment: () => {type: typeof viewConstants.INCREMENT}
  decrement: () => {type: typeof viewConstants.DECREMENT}
}

export type ActionType
  = ReturnType<typeof viewActions.increment>
  | ReturnType<typeof viewActions.decrement>
