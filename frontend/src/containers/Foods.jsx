export const Foods = (props) => {
  const { match } = props;

  return (
    <>
      フード一覧
      <p>restaurant-idは {match.params.restaurantsId} です</p>
    </>
  );
};
