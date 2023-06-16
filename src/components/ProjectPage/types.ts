import {Language} from "../LanguageSelect/types";

export type ProjectPageProps = {
    language: Language;
    isOpen: boolean;
    onRequestClose: () => void;
};

export type ProjectEntryProps = {
    title: string;
    when: string;
    content: string;
    imgSrc: string;
}