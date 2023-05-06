import {TimeOfDay} from "../../utils/TimeUtils";

export interface ClockAngles {
    secondAngle: number;
    minuteAngle: number;
    hourAngle: number;
}

export type ClockProps = {
    timeOfDay: TimeOfDay;
};