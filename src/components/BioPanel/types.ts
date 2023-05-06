import {Language} from "../LanguageSelect/types";

export type BioPanelProps = {
    language: Language;
    isOpen: boolean;
    onRequestClose: () => void;
};

export type BioTextProps = {
    language: Language;
}