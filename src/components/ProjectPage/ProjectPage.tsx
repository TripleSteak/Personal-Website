import React from 'react';
import {ProjectEntryProps, ProjectPageProps} from "./types";
import "./ProjectPage.css";
import CloseIcon from "../NavIcons/CloseIcon";
import SlidingPane from "react-sliding-pane";
import {
    automaticChessboard, battleRoyalePrototype, finalAisle,
    gasLawsSimulation, minecraftPlugins, popularBoardGames,
    yrdsbStudentApp
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

                    <ProjectEntry title={battleRoyalePrototype.title[props.language]}
                                  content={battleRoyalePrototype.content[props.language]}
                                  when={battleRoyalePrototype.when[props.language]}
                                  imgSrc={'projects/battle-royale-prototype.png'}/>

                    <ProjectEntry title={automaticChessboard.title[props.language]}
                                  content={automaticChessboard.content[props.language]}
                                  when={automaticChessboard.when[props.language]}
                                  imgSrc={'projects/automatic-chessboard.png'}/>

                    <ProjectEntry title={finalAisle.title[props.language]}
                                  content={finalAisle.content[props.language]}
                                  when={finalAisle.when[props.language]}
                                  imgSrc={'projects/final-aisle.png'}/>

                    <ProjectEntry title={yrdsbStudentApp.title[props.language]}
                                  content={yrdsbStudentApp.content[props.language]}
                                  when={yrdsbStudentApp.when[props.language]}
                                  imgSrc={'projects/yrdsb-student-app.png'}/>

                    <ProjectEntry title={gasLawsSimulation.title[props.language]}
                                  content={gasLawsSimulation.content[props.language]}
                                  when={gasLawsSimulation.when[props.language]}
                                  imgSrc={'projects/gas-laws-simulation.png'}/>

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