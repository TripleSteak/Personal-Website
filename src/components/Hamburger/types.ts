import {TimeOfDay} from "../../utils/TimeUtils";
import {Language} from "../LanguageSelect/types";

export type HamburgerProps = {
    timeOfDay: TimeOfDay;
    language: Language;
};