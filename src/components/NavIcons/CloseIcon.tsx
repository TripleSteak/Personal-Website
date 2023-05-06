import React from "react";
import './NavIcons.css';
import {IconProps} from "./types";

/**
 * @description "X" mark for closing the popup windows.
 */
const CloseIcon = (props: IconProps) => {
    return <svg id={props.id} className={props.className} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 99.66576 99.66575">
        <rect x="-11.9242" y="39.8" width="123.8484" height="20.4" rx="2.81651"
              transform="translate(-20.8778 49.83287) rotate(-45)"/>
        <rect x="39.8" y="-11.9242" width="20.4" height="123.8484" rx="2.81651"
              transform="translate(-20.8778 49.83289) rotate(-45.00001)"/>
    </svg>
};

export default CloseIcon;