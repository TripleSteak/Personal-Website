import {Language} from "../components/LanguageSelect/types";

/**
 * @description TypeScript is weird, so a crusty implementation for finding the next language was implemented.
 * Remember to add an entry here when you introduce a new language to the site!
 */
export const getNextLanguage = (language: Language) => {
    switch (language) {
        case Language.English:
            return Language.French;
        case Language.French:
            return Language.English;
        default:
            return Language.English;
    }
}
