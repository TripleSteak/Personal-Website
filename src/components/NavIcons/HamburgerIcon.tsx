import React from "react";
import './NavIcons.css';
import {IconProps} from "./types";

/**
 * @description Displayed when the Hamburger menu is available, usually on mobile windows only.
 */
const HamburgerIcon = (props: IconProps) => {
    return <svg id={props.id} className={props.className} onClick={props.onClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100">
        <rect width="100" height="20" rx="2.76128"/>
        <rect y="80" width="100" height="20" rx="2.76128"/>
        <rect y="40" width="100" height="20" rx="2.76128"/>
    </svg>
};

export default HamburgerIcon;