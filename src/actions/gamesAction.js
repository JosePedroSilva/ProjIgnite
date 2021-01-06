import axios from "axios";
//API
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
