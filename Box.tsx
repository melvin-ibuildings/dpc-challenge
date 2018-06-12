import * as React from "react";
import * as ReactDOM from "react-dom";
import {ReactInstance} from "react";

const { Component, Fragment } = React;
const { render, findDOMNode } = ReactDOM;
const idle = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/player-idle.png"

export default class Box extends Component {
    constructor(...params) {
        super(...params);

        // ...start it a bit higher to account for motion
        this.y = this.props.y - 15;

        // ...increase direction to speed up
        this.direction = 1.5;

        // ...increase limit to move more
        this.limit = 30;
    }

    animate(state) {
        this.y += this.direction

        // ...if we have moved enough
        // in one direction, reverse
        if (
            this.y >= this.props.y + this.limit
            || this.y <= this.props.y - this.limit
        ) {
            this.direction *= -1
        }

        const node = findDOMNode(this as ReactInstance);
        node.style.top = this.y + "px"
    }

    render() {
        const {x, w, h} = this.props;
        const {y} = this

        return (
            <div
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: w,
                    height: h,
                    background: "green",
                }}
            />
        )
    }
}