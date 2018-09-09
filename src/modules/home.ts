export interface HomeState {
  test: string
}

const initialState = {
  test: '',
}

export default function home(state: HomeState = initialState) {
  return state
}
