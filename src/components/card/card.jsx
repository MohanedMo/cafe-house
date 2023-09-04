import "./card.css";

const Card = (props) => {
  const { data } = props;

  return (
    <>
      <div className="card text-center ">
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body px-4">
          <h5 className="card-title fs-2 p-2 ">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <span className="price d-block">{data.price}$</span>
        </div>
      </div>
    </>
  );
};

export default Card;
