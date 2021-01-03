import axios from "axios";
//API
import { popularGamesURL } from "../api";

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
