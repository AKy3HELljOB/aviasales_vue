import { RequestIdResponse, TicketResponse } from "./ticket-types"

export function isOk(response: Response) {
  return response.status === 200;
}

// export function handleError(error, text, callback) {
//   return callback ? callback(error) : console.log(text, error);
// }

function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!isOk(response)) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
}

export async function getRequestId() {
  await api<RequestIdResponse>("https://front-test.beta.aviasales.ru/search")
    .then(({ searchId }) => {
      console.log(searchId);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getTickets(searchId: string) {
  if (searchId) {
    await api<TicketResponse>(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    )
      .then(({ tickets }) => {
        console.log(tickets);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export function longPolling(stop: boolean, delay: number, url: string) {
    console.log(url)    
}

// export const actions: ActionTree<State, State> & Actions = {
//     [ActionTypes.GET_COUTNER]({ commit }) {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           const data = 256
//           commit(MutationTypes.SET_COUNTER, data)
//           resolve(data)
//         }, 500)
//       })
//     },
//   }

// import { useEffect, useRef } from 'react';

// export default function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay != null) {
//       const id = setInterval(tick, delay);
//       return () => {
//         clearInterval(id);
//       }
//     }
//   }, [callback, delay])
// } 

export default getTickets;
