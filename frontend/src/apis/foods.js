import axios from "axios";
import { foodsIndex } from "../urls/index";

export const fetchFoods = (restaurantId) => {
  return axios
    .get(foodsIndex(restaurantId))
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
};
