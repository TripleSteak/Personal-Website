import React from "react";

export const bioHeading = {
    english: 'Emboldened',
    french: 'Enhardi',
};

export const viewMyProjectsText = {
    english: 'View My Work!',
    french: 'Regardez Mon Travail!',
}

export const EnglishBioPanelText = () => {
    return (
        <p className="text">
            by a fiery optimism, I'm always looking to expand my horizons and to craft something new. The unyielding
            drive for bettering the world around me through creation is what keeps me going each and every
            morning.<br/><br/>

            Hi! I'm <span className="text-bold">Simon Ou</span>. I'm currently attending studies at the University of
            Waterloo and working full-time as a full-stack software engineer. I love tinkering with software and have
            experience with serverless applications, web development, socket infrastructure, cloud architecture, and
            game development.<br/><br/>

            Three things you should never forget about me– I love my family, I love my friends, and I love learning!
            Befriend me, <a className="plain-link" href="mailto:simono768@gmail.com">teach me something</a>, and I
            will stay by your side and do whatever I can to turn our wildest dreams into a reality!
        </p>
    )
};

export const FrenchBioPanelText = () => {
    return (
        <p className="text">
            par un optimisme explosif, je cherche toujours l'opportunité d'agrandir mes horizons et de confectionner
            quelque truc de nouveau. Le besoin irrépressible d'employer la création pour améliorer le monde autour de
            moi est exactement ce qui me propulse chaque matin.<br/><br/>

            Salut! Je m'appelle <span className="text-bold">Simon Ou</span>. Je fais actuellement mes études à
            l'Université de Waterloo et travaille à plein temps comme ingénieur logiciel full-stack. Ça me dit de
            bricoler des logiciels, et j'ai de l'expérience avec les applications serverless, le développement Web,
            les résaux de socket, l'architecture du cloud, et la conception des jeux.<br/><br/>

            Il faut que vous n'oubliiez jamais ça: j'aime ma famille, j'aime mes amis, et j'adore apprendre! Devenez
            mon ami, <a className="plain-link" href="mailto:simono768@gmail.com">enseignez-moi</a>, et je resterai à
            vos côtés et ferai tout ce que je pourrai pour transformer nos rêves fous en réalité!
        </p>
    )
};