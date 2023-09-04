import "./main.css";

const Main = (props) => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="images d-flex justify-content-evenly">
            <img src="/images/light.png" alt="light" />
            <img src="/images/light.png" alt="light" />
            <img src="/images/light.png" alt="light" />
          </div>
          <div className="details">
            <h2 className="text-white title">{props.data.title}</h2>
            <h2 className="text-uppercase cafe">cafe house</h2>
            <p>{props.data.describtion}</p>
            <a className="btn text-uppercase" href="#details">
              {props.data.btn}
            </a>
          </div>
          <img className="table" src="images/table-set.png" alt="Not found" />
        </div>
      </div>
    </>
  );
};

export default Main;
