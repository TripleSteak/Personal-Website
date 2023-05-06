import React, {useState} from "react";
import {NextButtonProps} from "./types";
import {nextButtonArrowStyle, nextButtonBackgroundStyle, nextButtonOutlineStyle, nextButtonStyle} from "./styles";

/**
 * @description The arrow button that appears next to the speech bubble, which opens the BioPanel.
 * Not sure why two copies of the background polygon (the middle one) are needed, but a small visual "slit" artifact shows up without the duplicate...
 */
const NextButton = (props: NextButtonProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <svg id="next-button" xmlns="http://www.w3.org/2000/svg" style={nextButtonStyle(isHovering)}
             viewBox="0 0 421.52196 411.82616" onClick={props.nextButtonPressed}
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            <polygon points="0.542 27.349 32.494 396.049 378.714 411.306 420.964 0.537 0.542 27.349"
                     style={nextButtonOutlineStyle()}
            />
            <polygon points="22.961 48.298 43.442 386.638 362.839 385.94 411.287 11.776 22.961 48.298"
                     style={nextButtonBackgroundStyle(props.timeOfDay)}
            />
            <polygon points="22.961 48.298 43.442 386.638 362.839 385.94 411.287 11.776 22.961 48.298"
                     style={nextButtonBackgroundStyle(props.timeOfDay)}
            />
            <path
                d="M1542.38961,932.65079c0,1.639-.5812,113.64111-.5812,113.64111l129.609-20.76136-9.88051,85.23083L1791.146,976.35891,1669.68456,851.19926l4.111,90.53811Z"
                transform="translate(-1441.27842 -772.92758)"
                style={nextButtonArrowStyle(props.timeOfDay, isHovering)}/>
        </svg>
    );
}

export default NextButton;