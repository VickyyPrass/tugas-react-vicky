import React from "react";
import { Input, ShowErrors } from "./Form";
import * as Validator from "validatorjs";

export default class Validation extends React.Component {
    state = {
        nama: "",
        username: "",
        email: "",
        password: "",
        errors: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { nama, username, email, password } = this.state;
        let data = { nama, username, email, password };
        let rules = {
            nama: "required",
            username: "required",
            email: "required|email",
            password: "required|min:8",
        };

        let validation = new Validator(data, rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get("nama"),
                ...validation.errors.get("username"),
                ...validation.errors.get("email"),
                ...validation.errors.get("password"),
            ],
        });

        alert(`
        nama : ${this.state.nama}
        username : ${this.state.username}
        email : ${this.state.email}
        password : ${this.state.password}
        `);

        this.setState({
            name: "",
            username: "",
            email: "",
            password: "",
            errors: [],
        });
        e.target.reset();
    };

    render() {
        const style = {
            width: "400px",
            margin: "100px auto 0",
            border: "1px solid black",
            padding: "10px",
        };

        return (
            <div style={style}>
                <h2>Form Registrasi</h2>

                {this.state.errors && <ShowErrors errors={this.state.errors} />}

                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="nama"
                        label="Nama"
                        onChange={(value) => this.setState({ nama: value })}
                    />
                    <Input
                        type="text"
                        name="username"
                        label="Username"
                        onChange={(value) => this.setState({ username: value })}
                    />
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        onChange={(value) => this.setState({ email: value })}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        onChange={(value) => this.setState({ password: value })}
                    />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}
