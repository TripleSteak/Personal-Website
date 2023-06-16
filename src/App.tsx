import React, {useEffect, useState} from 'react';
import './App.css';
import Banner from "./components/Banner/Banner";
import {getTimeOfDay, TimeOfDay} from "./utils/TimeUtils";
import Clock from "./components/Clock/Clock";
import Panda from "./components/Panda/Panda";
import SpeechBubble from "./components/SpeechBubble/SpeechBubble";
import {Language} from "./components/LanguageSelect/types";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import {getNextLanguage} from "./utils/LanguageUtils";
import BioPanel from "./components/BioPanel/BioPanel";
import NavBar from "./components/NavBar/NavBar";
import Hamburger from "./components/Hamburger/Hamburger";
import ProjectPage from "./components/ProjectPage/ProjectPage";

const welcomeMessageNumber = Math.floor(Math.random() * 3) as 0 | 1 | 2;

/**
 * @description Force update the CSS "vh" property to ensure that elements display correctly when the screen is resized.
 */
const refreshWindowHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/**
 * @description Finds the path of the favicon .ico file, which is used to match the favicon to the time of day.
 */
const getFaviconPath = (timeOfDay: TimeOfDay) => {
    switch (timeOfDay) {
        case TimeOfDay.Morning:
            return '/icons/morning.ico';
        case TimeOfDay.Noon:
            return '/icons/noon.ico';
        case TimeOfDay.Afternoon:
            return '/icons/afternoon.ico';
        case TimeOfDay.Evening:
            return '/icons/evening.ico';
        case TimeOfDay.Night:
            return '/icons/night.ico';
    }
}

/**
 * @description It doesn't seem like we're able to dynamically set the app icon, so it will remain grayscale.
 */
const setFavicon = (timeOfDay: TimeOfDay) => {
    let link = (document.querySelector('link[rel="shortcut icon"]') ||
        document.querySelector('link[rel="icon"]')) as HTMLAnchorElement;
    if (link !== null) {
        link.href = getFaviconPath(timeOfDay);
    }
}

const App = () => {
    const [language, setLanguage] = useState(Language.English);
    const [isBioPanelOpen, setIsBioPanelOpen] = useState(false);
    const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);

    // Find the time of day, update the favicon
    const timeOfDay = getTimeOfDay();
    useEffect(() => {
        setFavicon(timeOfDay);
    }, [timeOfDay]);

    // Ensure CSS custom 'vh' property is correct and updated
    useEffect(() => {
        refreshWindowHeight();
    }, []);
    window.addEventListener('resize', refreshWindowHeight);

    return (
        <>
            <Banner timeOfDay={timeOfDay} language={language}>
                <Clock timeOfDay={timeOfDay}/>
                <Panda timeOfDay={timeOfDay}/>
                <SpeechBubble timeOfDay={timeOfDay} language={language} messageNumber={welcomeMessageNumber}
                              nextButtonPressed={() => setIsBioPanelOpen(true)}/>
                <LanguageSelect timeOfDay={timeOfDay} language={language}
                                nextLanguage={() => setLanguage(getNextLanguage(language))}/>
            </Banner>

            <BioPanel language={language} isOpen={isBioPanelOpen} onRequestClose={() => setIsBioPanelOpen(false)}
                      onViewMyProjectsClicked={() => setIsProjectPageOpen(true)}/>
            <ProjectPage language={language} isOpen={isProjectPageOpen}
                         onRequestClose={() => setIsProjectPageOpen(false)}/>

            {(isBioPanelOpen || isProjectPageOpen) && (<>
                <NavBar timeOfDay={timeOfDay} language={language} onRequestClose={() => setIsBioPanelOpen(false)}/>
                <Hamburger timeOfDay={timeOfDay} language={language}/>
            </>)}
        </>
    );
};

export default App;
