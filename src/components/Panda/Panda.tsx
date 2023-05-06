import React from 'react';
import {PandaProps} from "./types";
import {pandaEyeStyle} from "./styles";

/**
 * @description The cute panda sitting on the bed. It blinks, too!
 */
const Panda = (props: PandaProps) => {
    return (
        <>
            <svg id="panda-eyes" className="banner-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 4 1919 1924">
                <ellipse style={pandaEyeStyle(props.timeOfDay)} cx="950.24411" cy="490.93393" rx="8.5058" ry="7.83868"/>
                <ellipse style={pandaEyeStyle(props.timeOfDay)} cx="981.31221" cy="489.48423" rx="7.20799" ry="7.8556"/>
            </svg>
            <img id="panda-shadow" className="banner-item" src="/panda/panda-shadow.svg" alt={"panda shadow"}/>
            <img id="panda" className="banner-item" src="/panda/panda.svg" alt={"panda"}/>
        </>
    )
};

export default Panda;