import { useEffect } from "react";
import { fetchFoods } from "../apis/foods";

export const Foods = (props) => {
  const restaurantsId = props.match.params.restaurantsId;
  useEffect(() => {
    fetchFoods(restaurantsId).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      フード一覧
      <p>hoge</p>
    </>
  );
};
