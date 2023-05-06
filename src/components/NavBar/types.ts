import {TimeOfDay} from "../../utils/TimeUtils";
import {Language} from "../LanguageSelect/types";

export type NavBarProps = {
    timeOfDay: TimeOfDay;
    language: Language;
    onRequestClose: () => void; /* Temporarily used to override click on nav bar (but not on a link) */
};

export type NavLinkProps = {
    timeOfDay: TimeOfDay;
    link: string;
    text: string;
}