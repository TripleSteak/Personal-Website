import React, {useState} from 'react';
import './Hamburger.css';
import HamburgerIcon from "../NavIcons/HamburgerIcon";
import SlidingPane from "react-sliding-pane";
import CloseIcon from "../NavIcons/CloseIcon";
import {NavLinkProps} from "../NavBar/types";
import {hamburgerLink} from "./styles";
import {HamburgerProps} from "./types";
import {EMAIL_URL, GITHUB_URL, LINKED_IN_URL, navLinkStrings, RESUME_URL} from "../NavBar/constants";

const HamburgerLink = (props: NavLinkProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <a style={hamburgerLink(isHovering)} className="nav-link"
           href={props.link}
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}>
            {props.text}
        </a>
    );
}

const Hamburger = (props: HamburgerProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (<>
        <SlidingPane
            className="hamburger-menu"
            isOpen={isMenuOpen}
            onRequestClose={() => setIsMenuOpen(false)}
            from="right"
            hideHeader={true}
        >
            <div id="hamburger-link-container">
                <HamburgerLink link={EMAIL_URL} text={navLinkStrings.email[props.language]}/>
                <HamburgerLink link={GITHUB_URL} text={navLinkStrings.github[props.language]}/>
                <HamburgerLink link={RESUME_URL} text={navLinkStrings.resume[props.language]}/>
                <HamburgerLink link={LINKED_IN_URL} text={navLinkStrings.linkedin[props.language]}/>
            </div>
        </SlidingPane>

        {isMenuOpen ? (
            <CloseIcon id="hamburger-close-icon" className="dark-icon" onClick={() => setIsMenuOpen(false)}/>
        ) : (
            <HamburgerIcon id="hamburger-open-icon" className="light-icon" onClick={() => setIsMenuOpen(true)}/>
        )}
    </>);
};

export default Hamburger;