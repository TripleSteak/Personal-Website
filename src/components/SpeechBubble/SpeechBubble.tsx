import React from 'react';
import './SpeechBubble.css';
import {SpeechBubbleProps} from "./types";
import {welcomeMessages} from "./constants";
import NextButton from "./NextButton/NextButton";

/**
 * @description The speech bubble just below the panda, which contains a randomized message.
 */
const SpeechBubble = (props: SpeechBubbleProps) => {
    return (
        <div id={"speech-bubble"}>
            <p id={"welcome-msg"}>{welcomeMessages[props.timeOfDay][props.messageNumber][props.language]}</p>
            <NextButton timeOfDay={props.timeOfDay} nextButtonPressed={props.nextButtonPressed}/>
        </div>
    );
};

export default SpeechBubble;