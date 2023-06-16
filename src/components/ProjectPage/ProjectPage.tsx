import React from 'react';
import {ProjectEntryProps, ProjectPageProps} from "./types";
import "./ProjectPage.css";
import CloseIcon from "../NavIcons/CloseIcon";
import SlidingPane from "react-sliding-pane";
import {
    automatedVoiceControlledChessboard, finalAisle,
    idealGasLawsSimulation, minecraftPlugins, popularBoardGames,
    upcomingBattleRoyale,
    yrdsbStudentPlannerApp
} from "./constants";

const ProjectEntry = (props: ProjectEntryProps) => {
    return <div className='project-entry'>
        <img className='project-image' src={props.imgSrc} alt={props.title}/>

        <div>
            <h1 className='project-header'>{props.title}</h1>
            <p className='project-when'>{props.when}</p>
            <p className='project-text'>{props.content}</p>
        </div>
    </div>
}

/**
 * @description Container for short accounts of personal projects, past and present!
 */
const ProjectPage = (props: ProjectPageProps) => {
    return (
        <div>
            <SlidingPane
                className="project-page"
                isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                from="bottom"
                width="100%"
                hideHeader={true}
            >
                <CloseIcon id="project-close-icon" className="dark-icon" onClick={props.onRequestClose}/>

                <div id='project-text-container'>

                    <ProjectEntry title={upcomingBattleRoyale.title[props.language]}
                                  content={upcomingBattleRoyale.content[props.language]}
                                  when={upcomingBattleRoyale.when[props.language]}
                                  imgSrc={'projects/upcoming-battle-royale.png'}/>

                    <ProjectEntry title={automatedVoiceControlledChessboard.title[props.language]}
                                  content={automatedVoiceControlledChessboard.content[props.language]}
                                  when={automatedVoiceControlledChessboard.when[props.language]}
                                  imgSrc={'projects/automatic-voice-controlled-chessboard.png'}/>

                    <ProjectEntry title={finalAisle.title[props.language]}
                                  content={finalAisle.content[props.language]}
                                  when={finalAisle.when[props.language]}
                                  imgSrc={'projects/final-aisle.png'}/>

                    <ProjectEntry title={yrdsbStudentPlannerApp.title[props.language]}
                                  content={yrdsbStudentPlannerApp.content[props.language]}
                                  when={yrdsbStudentPlannerApp.when[props.language]}
                                  imgSrc={'projects/yrdsb-student-app.png'}/>

                    <ProjectEntry title={idealGasLawsSimulation.title[props.language]}
                                  content={idealGasLawsSimulation.content[props.language]}
                                  when={idealGasLawsSimulation.when[props.language]}
                                  imgSrc={'projects/ideal-gas-laws-simulation.png'}/>

                    <ProjectEntry title={popularBoardGames.title[props.language]}
                                  content={popularBoardGames.content[props.language]}
                                  when={popularBoardGames.when[props.language]}
                                  imgSrc={'projects/popular-board-games.png'}/>

                    <ProjectEntry title={minecraftPlugins.title[props.language]}
                                  content={minecraftPlugins.content[props.language]}
                                  when={minecraftPlugins.when[props.language]}
                                  imgSrc={'projects/minecraft-plugins.png'}/>

                    <p id="all-rights-reserved-project-page">{`Copyright © 2021-${new Date().getFullYear()} Simon Ou. All Rights Reserved.`}</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default ProjectPage;