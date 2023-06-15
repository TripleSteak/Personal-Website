import {TimeOfDay} from "../../../utils/TimeUtils";
import {
    nextButtonArrowColours,
    nextButtonArrowHoverColours,
    nextButtonBackgroundColours,
    nextButtonOutlineColour
} from "./constants";


export const nextButtonBackgroundStyle = (timeOfDay: TimeOfDay) => ({
    fill: nextButtonBackgroundColours[timeOfDay],
});

export const nextButtonArrowStyle = (timeOfDay: TimeOfDay, isHovering: boolean) => ({
    fill: isHovering ? nextButtonArrowHoverColours[timeOfDay] : nextButtonArrowColours[timeOfDay],
});

export const nextButtonOutlineStyle = () => ({
    fill: nextButtonOutlineColour,
});

// The language letters set 'pointer' cursor automatically, but next arrow doesn't... (this is a manual fix)
export const nextButtonStyle = (isHovering: boolean) => ({
    cursor: isHovering ? 'pointer' : 'auto',
});