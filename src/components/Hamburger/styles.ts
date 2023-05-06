import {TimeOfDay} from "../../utils/TimeUtils";

export const hamburgerLink = (timeOfDay: TimeOfDay, isHovering: boolean) => ({
    fontFamily: 'Gluten',
    fontSize: '3vh',
    fontWeight: '500',
    margin: '2vh 0 2vh 1vh',
    textDecoration: isHovering ? 'underline' : 'none',
    color: '#000000',
});