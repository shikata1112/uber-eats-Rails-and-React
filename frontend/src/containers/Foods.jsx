import { useEffect, useReducer } from "react";

import {
  initialState as foodsInitialState,
  foodsActionTypes,
  foodsReducer,
} from "../reducers/foods";

import { fetchFoods } from "../apis/foods";

import { REQUEST_STATE } from "../constants";

export const Foods = (props) => {
  const restaurantsId = props.match.params.restaurantsId;

  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);

  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(restaurantsId).then((data) => {
      dispatch({
        type: foodsActionTypes.FETCH_SUCCESS,
        payload: {
          foods: data.foods,
        },
      });
    });
  }, []);

  return (
    <>
      {foodsState.fetchState === REQUEST_STATE.LOADING ? (
        <>
          <p>ロード中...</p>
        </>
      ) : (
        foodsState.foodsList.map((food) => <div key={food.id}>{food.name}</div>)
      )}
    </>
  );
};
