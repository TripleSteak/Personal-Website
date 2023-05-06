import {TimeOfDay} from "../../utils/TimeUtils";
import {langLetterColours, langTriangleColours} from "./constants";

export const langTriangleStyle = (timeOfDay: TimeOfDay) => ({
    backgroundColor: langTriangleColours[timeOfDay],
});

export const langLetterStyle = (timeOfDay: TimeOfDay, isVisible: boolean, isHovering: boolean) => ({
    fill: isVisible ? (isHovering ? '#FFFFFF' : langLetterColours[timeOfDay]) : 'none',
})