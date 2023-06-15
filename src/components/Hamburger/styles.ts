import {TimeOfDay} from "../../utils/TimeUtils";

export const hamburgerLink = (timeOfDay: TimeOfDay, isHovering: boolean) => ({
    fontFamily: 'Klee One',
    fontSize: '3vh',
    fontWeight: '600',
    margin: '1.5vh 0 1.5vh 1vh',
    textDecoration: isHovering ? 'underline' : 'none',
    color: '#000000',
});