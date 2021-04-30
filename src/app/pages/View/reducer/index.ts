import { viewConstants } from '../constants';

import { ActionType } from '../actions';

const initialState = {
  count: 0 as number,
};

type InitialState = typeof initialState

export const dashboardReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case viewConstants.INCREMENT:
      return {
        ...state,
        count: ++state.count,
      };
    case viewConstants.DECREMENT:
      return {
        ...state,
        count: --state.count,
      };
    default:
      return state;
  }
};