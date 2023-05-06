import {TimeOfDay} from "../../../utils/TimeUtils";
import {nextButtonArrowColours, nextButtonBackgroundColours} from "./constants";

const outlineColour = '#231F20';

export const nextButtonBackgroundStyle = (timeOfDay: TimeOfDay) => ({
    fill: nextButtonBackgroundColours[timeOfDay],
});

export const nextButtonArrowStyle = (timeOfDay: TimeOfDay, isHovering: boolean) => ({
    fill: isHovering ? outlineColour : nextButtonArrowColours[timeOfDay],
});

export const nextButtonOutlineStyle = () => ({
    fill: outlineColour,
});

// The language letters set 'pointer' cursor automatically, but next arrow doesn't... (this is a manual fix)
export const nextButtonStyle = (isHovering: boolean) => ({
    cursor: isHovering ? 'pointer' : 'auto',
});