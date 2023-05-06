import {TimeOfDay} from "../../utils/TimeUtils";
import {pandaEyeColours} from "./constants";

export const pandaEyeStyle = (timeOfDay: TimeOfDay) => ({
    fill: pandaEyeColours[timeOfDay],
});