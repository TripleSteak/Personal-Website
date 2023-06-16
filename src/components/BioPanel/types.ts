import {Language} from "../LanguageSelect/types";

export type BioPanelProps = {
    language: Language;
    isOpen: boolean;
    onRequestClose: () => void;
    onViewMyProjectsClicked: () => void;
};

export type BioTextProps = {
    language: Language;
}

export type ViewMyProjectsProps = {
    language: Language;
    onViewMyProjectsClicked: () => void;
}