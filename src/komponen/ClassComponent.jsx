import React from "react";

export default class ClassComponent extends React.Component {
    state = {
        kelas: "Eduwork",
    };

    render() {
        return (
            <div className="text">
                <h2>
                    Halo nama saya {this.props.nama} dan saya {this.props.umur}{" "}
                    tahun
                </h2>
                <p>ini pembelajaran di {this.state.kelas}</p>
            </div>
        );
    }
}
