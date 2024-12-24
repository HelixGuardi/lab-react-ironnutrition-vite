function FoodBox(props) {
  // console.log(props);
  const { foods } = props;
  console.log(foods);

  return (
    <>
      {foods.map((eachFood) => {
        return (
          <div>
            <p>{eachFood.name}</p>

            <img src={eachFood.image} />

            <p>Calories: {eachFood.calories}</p>
            <p>Servings {eachFood.servings}</p>

            <p>
              <b>Total Calories: {eachFood.servings * eachFood.calories} </b> kcal
            </p>

            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default FoodBox;
