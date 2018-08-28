// this page is for all my character photo tiles to load and to listen for clicks by user on photos

import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div>
        <div>
            <a onClick={() => props.selectCharacter()}>
                <img alt={props.name} src={props.image}/>
            </a>
        </div>
    </div>
);
export default CharacterCard;