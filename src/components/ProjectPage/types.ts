import {Language} from "../LanguageSelect/types";

export type ProjectPageProps = {
    language: Language;
    isOpen: boolean;
    onRequestClose: () => void;
};

export type ProjectEntryProps = {
    title: string;
    content: string;
    imgSrc: string;
}