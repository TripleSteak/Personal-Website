import React, {useEffect, useState} from 'react';
import {ClockAngles, ClockProps} from "./types";
import {hourHandStyle, minuteHandStyle, secondHandStyle} from "./styles";

/**
 * @description Returns the angles of each clock arm (hour, minute, second) corresponding to the given time.
 * An angle of 0 is equivalent to pointing upwards, or at the "12" on an analog clock.
 */
const getClockAngles = (now: Date) => {
    const secondAngle = now.getSeconds() * 6;
    const minuteAngle = now.getMinutes() * 6 + secondAngle / 60;
    const hourAngle = now.getHours() * 30 + minuteAngle / 12;

    return {
        secondAngle,
        minuteAngle,
        hourAngle,
    } as ClockAngles;
};

/**
 * @description The analog alarm clock sitting on the nightstand, whose clock arms reflect the current time.
 */
const Clock = (props: ClockProps) => {
    /*
    See: https://stackoverflow.com/questions/39426083/update-react-component-every-second
    This useEffect() hook updates time every second, which is used to calculate the clock angles on screen.
     */
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const clockAngles = getClockAngles(time);

    return (
        <svg id="clock" className="banner-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 8 1919 1928">
            <rect id="second-hand" style={secondHandStyle(clockAngles.secondAngle, props.timeOfDay)} x="1549.76045"
                  y="460.38782"
                  width="0.99205" height="46.09556"/>
            <rect id="minute-hand" style={minuteHandStyle(clockAngles.minuteAngle, props.timeOfDay)} x="1549.1094"
                  y="466.72702"
                  width="2.43522" height="39.60855"/>
            <rect id="hour-hand" style={hourHandStyle(clockAngles.hourAngle, props.timeOfDay)} x="1548.73187"
                  y="481.21388"
                  width="3.04921" height="25.66845"/>
        </svg>
    );
};

export default Clock;