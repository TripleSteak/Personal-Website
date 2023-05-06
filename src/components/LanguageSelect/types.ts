import {TimeOfDay} from "../../utils/TimeUtils";

export enum Language {
    English = 'english',
    French = 'french'
}

export type LanguageSelectProps = {
    language: Language,
    timeOfDay: TimeOfDay,
    nextLanguage: () => void,
};