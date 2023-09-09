import {navLink} from "./styles";
import React, {useState} from "react";
import {NavBarProps, NavLinkProps} from "./types";
import {EMAIL_URL, GITHUB_URL, LINKED_IN_URL, navLinkStrings, RESUME_URL} from "./constants";

/**
 * @description A single link on the NavBar.
 */
const NavLink = (props: NavLinkProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <a style={navLink(props.timeOfDay, isHovering)} className="nav-link"
           href={props.link}
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}>
            {props.text}
        </a>
    );
}

/**
 * @description Navigation bar, which makes up the top part of the BioPanel.
 * Nav bar is only rendered if the aspect ratio is greater than 1 (i.e. screen is wide enough)
 */
const NavBar = (props: NavBarProps) => {
    return <div id="nav-link-container" className="banner-item" onClick={props.onRequestClose}>
        <NavLink timeOfDay={props.timeOfDay} link={EMAIL_URL} text={navLinkStrings.email[props.language]}/>
        <NavLink timeOfDay={props.timeOfDay} link={GITHUB_URL} text={navLinkStrings.github[props.language]}/>
        <NavLink timeOfDay={props.timeOfDay} link={RESUME_URL} text={navLinkStrings.resume[props.language]}/>
        <NavLink timeOfDay={props.timeOfDay} link={LINKED_IN_URL} text={navLinkStrings.linkedin[props.language]}/>
    </div>;
};

export default NavBar;