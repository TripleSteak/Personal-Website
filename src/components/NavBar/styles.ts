import {TimeOfDay} from "../../utils/TimeUtils";

export const navLink = (timeOfDay: TimeOfDay, isHovering: boolean) => ({
    fontFamily: 'Braah One',
    fontSize: '3vh',
    fontWeight: '400',
    margin: '0 4vh',
    textDecoration: isHovering ? 'underline' : 'none',
    color: '#FFFFFF',
});