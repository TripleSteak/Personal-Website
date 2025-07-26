import {Language} from "../LanguageSelect/types";

export type NavBarProps = {
    language: Language;
    onRequestClose: () => void; /* Closes the BioPanel upon click */
};

export type NavLinkProps = {
    link: string;
    text: string;
}