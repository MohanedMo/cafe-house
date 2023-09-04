import "./brief.css"

const Brief = (props) => {
    return ( 
        <div className="brief" id="details">
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="text">
                    <h3>{props.data.title}</h3>
                    <h4 className="mt-4 fs-2">Cafe House</h4>
                    <p className="mb-5">{props.data.describtion}</p>
                    <a className="btn text-uppercase" href="#more">Read More</a>
                </div>
                <div className="image">
                    <img src="images/1.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Brief;
