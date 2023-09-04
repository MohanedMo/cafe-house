import "./menu-content.css";

const MenuContent = (props) => {
  const { drink } = props;
  let allDrinks = [];
  let price = 5;
  for (let i = 0; i < 5; i++) {
    let product = { ...drink };
    product.title += ` ${i + 1}`;
    price += 5;
    product.price = price;
    product.id = i;
    allDrinks.push(product);
  }

  return (
    <>
      {allDrinks.map((el) => (
        <div
          key={el.id}
          className="drink d-flex flex-column flex-md-row col-12 align-items-center justify-content-between"
        >
          <img className="me-4" src={el.image} alt="drinkphoto" />
          <div className="textb col-12 col-lg-6 col-md-5 ">
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
          <span className="price col-md-1 col-2 d-block position-relative">
            {el.price}$
          </span>
        </div>
      ))}
    </>
  );
};
export default MenuContent;
