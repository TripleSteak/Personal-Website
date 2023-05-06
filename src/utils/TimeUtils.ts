/**
 * @description Five thematic variants are available for the website, based on the time of day.
 */
export enum TimeOfDay {
    Morning = "morning",
    Noon = "noon",
    Afternoon = "afternoon",
    Evening = "evening",
    Night = "night",
}

/**
 * @description Returns the time of day to be displayed on the site, which is determined by the user's timezone.
 * This also determines which colour palette to use for the banner.
 */
export const getTimeOfDay = () => {
    const bannerHour = (new Date()).getHours();

    if (bannerHour >= 5 && bannerHour < 9) {
        return TimeOfDay.Morning;
    }
    if (bannerHour >= 9 && bannerHour < 15) {
        return TimeOfDay.Noon;
    }
    if (bannerHour >= 15 && bannerHour < 18) {
        return TimeOfDay.Afternoon;
    }
    if (bannerHour >= 18 && bannerHour < 21) {
        return TimeOfDay.Evening;
    }
    return TimeOfDay.Night;
};