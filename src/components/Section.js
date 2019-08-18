import React from "react";

function Section(props) {
    return (
        <div className="section" id="{props.id}">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default Section;