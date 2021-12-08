import React from "react";
import css from "./css/NavBarSimple.module.css";

// const NavBarSimple = () => {
    // return (
    //     <div className = {css.NavBar} >
    //         <h1>My Gallery</h1>
    //         <span></span>
    //         <button></button>
    //     </div>
    // )
// }

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            }
        }, console.log(this.state.message))
    }

    render() {
        return (
            <div className = {css.NavBar} >
                <h1>My Gallery</h1>
                <span>{ this.state.message }</span>
                <button onClick={ () => this.handleClick() }>{ this.state.buttonText }</button>
            </div>
        )
    }
}

export default NavBarSimple;