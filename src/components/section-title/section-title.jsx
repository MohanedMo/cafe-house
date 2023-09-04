import "./section-title.css"


const Sectitle = (props) => {
    return ( 
        <div className="title-text">
            <div className="container d-flex justify-content-between">
                <div className="details d-flex align-items-center">
                <img src="./images/logo.png" alt="logo" />
                <h3>{props.data}</h3>
                </div>
                <div className="line"></div>
            </div>
        </div>
     );
}
 
export default Sectitle;