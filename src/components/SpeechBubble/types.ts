import {Language} from "../LanguageSelect/types";
import {TimeOfDay} from "../../utils/TimeUtils";

export type SpeechBubbleProps = {
    messageNumber: 0 | 1 | 2,
    timeOfDay: TimeOfDay,
    language: Language,
    nextButtonPressed: () => void,
};