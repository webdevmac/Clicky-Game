import React from "react";
import "./style.css";
import "../Game/Game.js";


function FriendsCard(props) {
    return ( 
//    const FriendsCard = props => (
         <div className="card" onClick={() => props.clickedImage(props.id)} >
            <div className="img-container" >
                <img alt={props.name} src={props.image}/>
               
            </div>

        </div>
        
    );
}

export default FriendsCard;
