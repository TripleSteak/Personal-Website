import {TimeOfDay} from "../../utils/TimeUtils";
import {clockHandColours, clockTransformOrigin} from "./constants";

const clockHandStyle = (angle: number) => ({
    transform: `rotate(${angle}deg)`,
    transformOrigin: clockTransformOrigin,
});

export const hourHandStyle = (angle: number, timeOfDay: TimeOfDay) => ({
    ...clockHandStyle(angle),
    fill: clockHandColours.hour[timeOfDay],
});

export const minuteHandStyle = (angle: number, timeOfDay: TimeOfDay) => ({
    ...clockHandStyle(angle),
    fill: clockHandColours.minute[timeOfDay],
});

export const secondHandStyle = (angle: number, timeOfDay: TimeOfDay) => ({
    ...clockHandStyle(angle),
    fill: clockHandColours.second[timeOfDay],
});
