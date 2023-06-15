import React from 'react';
import './Banner.css';
import {TimeOfDay} from "../../utils/TimeUtils";
import {bannerStyle} from "./styles";
import {BannerProps, BottomLeftBannerTextProps} from "./types";
import {bioPanelText} from "./constants";

/**
 * @description Returns the path of the banner SVG to be displayed on the website.
 * Returned banner will match the given TimeOfDay.
 */
const getBannerImageUrl = (timeOfDay: TimeOfDay) => {
    switch (timeOfDay) {
        case TimeOfDay.Morning:
            return '/banner/banner-morning.svg';
        case TimeOfDay.Noon:
            return '/banner/banner-noon.svg';
        case TimeOfDay.Afternoon:
            return '/banner/banner-afternoon.svg';
        case TimeOfDay.Evening:
            return '/banner/banner-evening.svg';
        case TimeOfDay.Night:
            return '/banner/banner-night.svg';
    }
};

/**
 * @description Text in the bottom left of the banner that suggests the user to return to the site later if they don't like the colour!
 * (This is to let users know that the site changes colours based on time of day...)
 */
const BottomLeftBannerText = (props: BottomLeftBannerTextProps) => {
    return (
        <div id='banner-bottom-left-text'>
            <p>{bioPanelText[props.language]}</p>
        </div>
    );
}

/**
 * @description Forms the background of the website!
 * Visually resembles a bedroom with various dynamic furniture items.
 */
const Banner = (props: BannerProps) => {
    return (
        <div style={bannerStyle(getBannerImageUrl(props.timeOfDay))}>
            {props.children}
            <BottomLeftBannerText language={props.language}/>
        </div>
    );
};

export default Banner;