import { getType } from 'typesafe-actions'
import actions, { Action } from './actions'

export interface HomeState {}

const initialState = {}

export default function home(state: HomeState = initialState, action: Action) {
  switch (action.type) {
    case getType(actions.fetchHome.success):
      return { ...state, home: action.payload }

    default:
      return state
  }
}
