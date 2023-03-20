import React from "react";
import ClassComponent from "./ClassComponent";

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <ClassComponent nama="vicky" umur="23" />
            </div>
        );
    }
}
