import React from "react";
import "./Navbar.scss";
import {Container, Heading} from "@chakra-ui/react";

export const Navbar: React.FC = () => {
    return (
        <div className={"nav nav__black"}>
            {/*<Heading as="h1" size={"4xl"}>Netflix</Heading>*/}
            <div className="nav__content">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                     alt="Netflix logo" className={"nav__logo"}/>
                <img src="~/../peep-101.svg" alt="avatar" className={"nav__user-logo"}/>
            </div>
        </div>
    )
}