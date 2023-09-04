import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <div class="error-text">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        className="static"
        alt="Error"
      />
    </div>
  );
};

export default Error;
