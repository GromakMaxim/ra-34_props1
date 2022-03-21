import Star from "./Star";
import React from "react";

export default function Stars(props) {
    const stars = (props.count >= 1 && props.count <= 5 && typeof props.count === 'number') ? props.count : 0;
    let arr = [];
    for (let i = 0; i < stars; i++) {
        arr.push(<Star key={i}/>);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            <li>
                {arr}
            </li>

        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}

