import { Ticket } from "@/api/ticket-types";
import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State, FilterState, FilterTypes, OrderTypes, state } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_ORDER](state: S, payload: OrderTypes): void;
  [MutationTypes.SET_FILTER](state: S, payload: FilterTypes): void;
  [MutationTypes.ADD_TICKETS](state: S, payload: Array<Ticket>): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ORDER](state, payload) {
    state.order = payload;
  },

  [MutationTypes.SET_FILTER](state, payload) {
    console.log(state);
    const updateAll = (state: FilterState) => ({
      ...state,
      all: state.none && state.one && state.two && state.three,
    });

    const newFilterState = (state: FilterState, change: FilterTypes) => {
      switch (change) {
        case FilterTypes.ALL:
          return {
            all: !state.all,
            none: !state.all,
            one: !state.all,
            two: !state.all,
            three: !state.all,
          };
        case FilterTypes.NONE:
          return updateAll({
            ...state,
            none: !state.none,
          });
        case FilterTypes.ONE:
          return updateAll({
            ...state,
            one: !state.one,
          });
        case FilterTypes.TWO:
          return updateAll({
            ...state,
            two: !state.two,
          });
        case FilterTypes.THREE:
          return updateAll({
            ...state,
            three: !state.three,
          });
        default:
          throw new Error();
      }
    };
    state.filter = newFilterState(state.filter, payload);
  },
  [MutationTypes.ADD_TICKETS](state, payload) {
    return { ...state, tickets: payload };
  },
};
