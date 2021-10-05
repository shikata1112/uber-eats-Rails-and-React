import axios from "axios";
import { lineFoods, lineFoodsReplace } from "../urls/index";

export const postLineFoods = (params) => {
  console.log(params);
  return axios
    .post(lineFoods, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const replaceLineFoods = (params) => {
  return axios
    .put(lineFoodsReplace, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
