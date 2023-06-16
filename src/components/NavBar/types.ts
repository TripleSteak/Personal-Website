import {TimeOfDay} from "../../utils/TimeUtils";
import {Language} from "../LanguageSelect/types";

export type NavBarProps = {
    timeOfDay: TimeOfDay;
    language: Language;
    onRequestClose: () => void; /* Closes the BioPanel upon click */
};

export type NavLinkProps = {
    timeOfDay: TimeOfDay;
    link: string;
    text: string;
}