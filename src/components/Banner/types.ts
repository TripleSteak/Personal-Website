import {TimeOfDay} from "../../utils/TimeUtils";
import React from "react";
import {Language} from "../LanguageSelect/types";

export type BannerProps = {
    language: Language;
    timeOfDay: TimeOfDay;
    children: React.ReactNode;
};

export type BottomLeftBannerTextProps = {
    language: Language;
}