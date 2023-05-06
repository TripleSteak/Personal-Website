import React from "react";

export const bioHeading = {
    english: 'Emboldened',
    french: 'Enhardi',
};

export const EnglishText = () => {
    return (
        <p className="text">
            by a fiery optimism, I'm always looking to expand my horizons and to craft something new. The unyielding
            drive for bettering the world around me through creation is what keeps me going each and
            every morning.<br/><br/>

            Hi! I'm <span className="text-bold">Simon Ou</span>, an ambitious student currently studying software
            engineering at the University of Waterloo. Recently, I've been working on projects involving serverless
            applications, web development, socket infrastructure, cloud architecture, and game development.<br/><br/>

            Never hesitate to <a className="plain-link" href="mailto:simono768@gmail.com">contact
            me</a>! I'm always down to chat and always down to learn.
        </p>
    )
};

export const FrenchText = () => {
    return (
        <p className="text">
            par un optimisme explosif, je cherche toujours l'opportunité d'agrandir mes horizons et de confectionner
            quelque truc de nouveau. Le besoin irrépressible d'employer la création pour améliorer
            le monde autour de moi est exactement ce qui me propulse chaque matin.<br/><br/>

            Salut! Je m'appelle <span className="text-bold">Simon Ou</span>, un étudiant ambitieux qui s'est inscrit
            au programme d'ingénierie logicielle à <a className="plain-link" href="https://uwaterloo.ca/">l'Université
            de Waterloo</a>. Depuis peu, je travaille sur les projets qui se concernent avec les applications sans
            serveur, le développement Web, les résaux de sockets, l'architecture du cloud, et la conception des jeux.
            <br/><br/>

            N'hésitez jamais à <a className="plain-link" href="mailto:simono768@gmail.com">me contacter</a>! Ça me dit
            de bavarder, ça me dit d'apprendre.
        </p>
    )
};