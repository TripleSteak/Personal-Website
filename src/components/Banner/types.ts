import {TimeOfDay} from "../../utils/TimeUtils";
import React from "react";

export type BannerProps = {
    timeOfDay: TimeOfDay;
    children: React.ReactNode;
};