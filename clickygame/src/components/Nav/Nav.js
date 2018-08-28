// tried to get page to load current game score and also highscore into html

import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul>
            <li><a>Clicky Game</a></li>
            <li>
                {props.message}
            </li>
            <li>Score: <span>{props.gameScore}</span> | Top Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Nav;