import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from "./Game";

const {Component, Fragment} = React;
const {render, findDOMNode} = ReactDOM;


render(
    <Game
        w={window.innerWidth}
        h={window.innerHeight}
    />,
    document.querySelector(".app"),
)
