import React from "react";
import './style.css';
class Popup extends React.Component{
render(){
    return(
    <div className="popup">
        <div className="popupinner">
            <h1 className="close" onClick={this.props.onClick}>X</h1>
            <br>
            </br>
            <center>
                <span className="tick">&#10003;</span>
            </center>
            <h2 className="text2">You Have Successfully Signed up</h2>
        </div>
    </div>
    )
}
}
export default Popup;