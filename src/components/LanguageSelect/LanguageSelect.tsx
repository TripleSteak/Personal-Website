import React, {useState} from 'react';
import './LanguageSelect.css';
import {Language, LanguageSelectProps} from "./types";
import {langLetterStyle, langTriangleStyle} from "./styles";

/**
 * @description Expressed as a two-letter abbreviation on the globe in the top-left corner of the website,
 * which can be clicked to change the website's language.
 */
const LanguageSelect = (props: LanguageSelectProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return <>
        <div id="lang-triangle" style={langTriangleStyle(props.timeOfDay)}></div>
        <div id="lang-toggle">
            <svg id="lang-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.36886 60.39457"
                 onClick={props.nextLanguage} onMouseEnter={() => setIsHovering(true)}
                 onMouseLeave={() => setIsHovering(false)}>
                <g id="lang-en">
                    <polygon
                        points="0.793 2.936 39.129 0.918 36.112 15.446 13.004 15.446 13.004 26.481 35.062 26.481 32.042 37.109 12.872 37.109 12.61 47.865 35.062 47.865 39.2 59.434 1.712 59.434 0.793 2.936"
                        style={langLetterStyle(props.timeOfDay, props.language === Language.English, isHovering)}/>
                    <polygon
                        points="41.391 0.918 41.391 59.434 53.407 58.682 51.668 20.34 67.453 57.931 79.106 59.434 79.106 1.67 66.265 2.422 67.99 33.242 52.943 0.867 41.391 0.918"
                        style={langLetterStyle(props.timeOfDay, props.language === Language.English, isHovering)}/>
                </g>
                <g id="lang-fr">
                    <polygon
                        points="0.793 2.936 39.129 0.918 36.112 15.446 13.004 15.446 13.004 26.481 35.062 26.481 32.042 37.109 12.872 37.109 12.384 57.268 1.712 59.434 0.793 2.936"
                        style={langLetterStyle(props.timeOfDay, props.language === Language.French, isHovering)}/>
                    <path
                        d="M230.89,154.39l7.77,25.15-11.65-1.5-5.14-20.16h-9.26l.35,20.91-12.01.75V122.1l29.88-.52S250.04,138.37,230.89,154.39Zm-8.56-7.09s10.64-7.34-.08-13.76l-11.51.91.17,2.06.45,10.79Z"
                        transform="translate(-159.5575 -120.10917)"
                        style={langLetterStyle(props.timeOfDay, props.language === Language.French, isHovering)}/>
                </g>
            </svg>
        </div>
    </>;
};

export default LanguageSelect;
