import { LOADING, RELOADING, CONNECTING } from './Actions';

const initState = {
      Data: [],
      isConnected: false

}
const reducer = (state = initState, action) => {
      if (action.type == LOADING) {
            return (
                  {
                        ...state,
                        Data: action.payload,

                  }

            )


      }
      else if (action.type == CONNECTING) {

            return (
                  {
                        ...state,
                        isConnected: action.payload,

                  }

            )

      }
      else return state;
}
export default reducer;