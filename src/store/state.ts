import { Ticket } from "@/api/ticket-types";

export enum FilterTypes {
  ALL = "all",
  NONE = "none",
  ONE = "one",
  TWO = "two",
  THREE = "three",
}
export enum OrderTypes {
  CHEAPEST = "cheapest",
  FASTEST = "fastest",
}
export type FilterState = {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};
const defautFilter: FilterState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true,
};

export const state = {
  order: OrderTypes.CHEAPEST,
  filter: defautFilter,
  tickets: Array<Ticket>(),
  //currentTickets: Array<Ticket>
  // currentPageTickets: Array<number>
};

export type State = typeof state;
