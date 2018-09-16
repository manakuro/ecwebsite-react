import { createAsyncAction, ActionType } from 'typesafe-actions'

const actions = {
  fetchHome: createAsyncAction(
    'FETCH_HOME_REQUEST',
    'FETCH_HOME_SUCCESS',
    'FETCH_HOME_FAILURE',
  )<void, {}, Error>(),
}

export type Action = ActionType<typeof actions>
export default actions
