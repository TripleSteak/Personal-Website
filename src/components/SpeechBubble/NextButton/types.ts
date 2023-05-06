import {TimeOfDay} from "../../../utils/TimeUtils";

export type NextButtonProps = {
    timeOfDay: TimeOfDay,
    nextButtonPressed: () => void,
}