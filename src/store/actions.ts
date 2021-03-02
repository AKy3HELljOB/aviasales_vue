import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { getRequestId } from '../api/ticket'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_REQUEST_ID](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>,

  [ActionTypes.GET_TICKETS](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>

}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_REQUEST_ID]({ commit }) {
    return new Promise((resolve) => {
      // setTimeout(() => {
      //   const data = 256
      //   commit(MutationTypes.SET_ORDER, data)
      //   resolve(data)
      // }, 500)
    })
  },
  
  [ActionTypes.GET_TICKETS]({ commit }) {
    return new Promise((resolve) => {
      // setTimeout(() => {
      //   const data = 256
      //   commit(MutationTypes.SET_ORDER, data)
      //   resolve(data)
      // }, 500)
    })
  },
}
