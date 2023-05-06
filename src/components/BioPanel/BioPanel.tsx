import React from 'react';
import './BioPanel.css';
import '../NavBar/NavBar.css';
import {BioPanelProps, BioTextProps} from "./types";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CloseIcon from "../NavIcons/CloseIcon";
import {bioHeading, EnglishText, FrenchText} from "./constants";
import {Language} from "../LanguageSelect/types";

/**
 * @description Body text for the BioPanel component.
 * It's essentially an introduction of who I am! (At least career-wise)
 */
const BioText = (props: BioTextProps) => {
    switch (props.language) {
        case Language.English:
            return <EnglishText/>;
        case Language.French:
            return <FrenchText/>;
    }
    return null;
};

/**
 * @description Pop-up panel that appears when the SpeechBubble's NextButton is clicked.
 * Contains information about myself!
 */
const BioPanel = (props: BioPanelProps) => {
    return (
        <div>
            <SlidingPane
                className="bio-panel"
                isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                from="bottom"
                width="100%"
                hideHeader={true}
            >
                <CloseIcon id="bio-close-icon" className="dark-icon" onClick={props.onRequestClose}/>

                <div id="bio-panel-container">
                    <img id="portrait-image" src="/portrait/portrait.jpg" alt="portrait"/>

                    <div id="text-container">
                        <h1 id="start-heading">{bioHeading[props.language]}</h1>
                        <BioText language={props.language}/>
                        <p id="all-rights-reserved">{`Copyright © 2021-${new Date().getFullYear()} Simon Ou. All Rights Reserved.`}</p>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
};

export default BioPanel;