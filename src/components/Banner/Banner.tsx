import React from 'react';
import {TimeOfDay} from "../../utils/TimeUtils";
import {bannerStyle} from "./styles";
import {BannerProps} from "./types";

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
 * @description Forms the background of the website!
 * Visually resembles a bedroom with various dynamic furniture items.
 */
const Banner = (props: BannerProps) => {
    return (
        <div style={bannerStyle(getBannerImageUrl(props.timeOfDay))}>
            {props.children}
        </div>
    );
};

export default Banner;