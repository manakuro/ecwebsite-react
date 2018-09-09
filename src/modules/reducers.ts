import { combineReducers } from 'redux'
import { RouterState } from 'connected-react-router'
import home, { HomeState } from '@/modules/home'

export interface RootState {
  home: HomeState
  router: RouterState
}

export default combineReducers({
  home,
})
