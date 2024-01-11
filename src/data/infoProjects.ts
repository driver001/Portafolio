import programing from "../assets/imgs/everydemo.png"; // Tell webpack this JS file uses this image
import baboon from "../assets/imgs/baboon.png"; // Tell webpack this JS file uses this image
import monkey from "../assets/imgs/monkeybet.png"; // Tell webpack this JS file uses this image
import qvotech from "../assets/imgs/qvotech.png"; // Tell webpack this JS file uses this image
import invariantlab from "../assets/imgs/invariantlab.png"; // Tell webpack this JS file uses this image
import everysoft from "../assets/imgs/everysoft.png"; // Tell webpack this JS file uses this image
import labsxd from "../assets/imgs/labsxd.png"; // Tell webpack this JS file uses this image

import ilarcade from "../assets/imgs/ilarcade.png"; // Tell webpack this JS file uses this image
import chimpbet from "../assets/imgs/chimpbet.png"; // Tell webpack this JS file uses this image
import socbridge from "../assets/imgs/socbridge.png"; // Tell webpack this JS file uses this image
import { CATEGORY_ANGULAR } from "../utils/const";
import angular from "../assets/angular.svg"; // Tell webpack this JS file uses this image
import css from "../assets/css.svg"; // Tell webpack this JS file uses this image
import bootstrap from "../assets/bootstrap.svg"; // Tell webpack this JS file uses this image
import ethe from "../assets/ethereum.svg"; // Tell webpack this JS file uses this image
import wordpress from "../assets/wordpress.svg"; // Tell webpack this JS file uses this image

export const infoProjects = [
    {
        id: 1,
        title: "EveryDemo",
        description: "Lider del proyecto Full Stack, creando el Front de toda la aplicación y ayudando al Back a realizar tareas.",
        company: "QvoTech",
        workers: 3,
        link: "https://everydemo.xyz/",
        category: CATEGORY_ANGULAR,
        image: programing,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 2,
        title: "Babbon",
        description: "Frontend realizando varias versiones para mostrar juegos, categorias y web3 para el manejo de la sesión.",
        company: "QvoTech",
        workers: 3,
        link: "https://baboon.bet/",
        category: CATEGORY_ANGULAR,
        image: baboon,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]

    },
    {
        id: 3,
        title: "MonkeyBet",
        description: "Plataforma de juego realizada con angular y web3 que utiliza su propia moneda para jugar.",
        company: "QvoTech",
        workers: 3,
        link: "https://casino.monkeybet.co/",
        category: CATEGORY_ANGULAR,
        image: monkey,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 4,
        title: "Qvotech",
        description: "Pagina principal para la empresa de desarrollo de software",
        company: "QvoTech",
        workers: 1,
        link: "https://www.qvotech.com/index.html",
        category: CATEGORY_ANGULAR,
        image: qvotech,
        projects: [{ title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }]
    },
    {
        id: 5,
        title: "Invariant Labs",
        description: "Pequeño landing page realizado para el contactenos de la empresa.",
        company: "QvoTech",
        workers: 1,
        link: "https://www.invariantlabs.com/",
        category: CATEGORY_ANGULAR,
        image: invariantlab,
        projects: [{ title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 6,
        title: "EverySoft",
        description: "Pagina principal de la empresa la cual se dedica a vender skins para casinos online.",
        company: "EverySoft",
        workers: 1,
        link: "https://everysoft.xyz/",
        category: CATEGORY_ANGULAR,
        image: everysoft,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 7,
        title: "IL Arcade",
        description: "Plataforma de juegos arcade web3 para dar premios a la comunidad.",
        company: "QvoTech",
        workers: 2,
        link: "https://ilarcade.xyz/home",
        category: CATEGORY_ANGULAR,
        image: ilarcade,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 8,
        title: "ChimpBet",
        description: "Skin de casino realizado aparte para especificaciones mas avanzadas.",
        company: "QvoTech",
        workers: 3,
        link: "https://chimp.bet/",
        category: CATEGORY_ANGULAR,
        image: chimpbet,
        projects: [{ title: "Angular", img: angular }, { title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 9,
        title: "SocBridge",
        description: "Pagina principal para una empresa de seguridad informatica.",
        company: "QvoTech",
        workers: 1,
        link: "https://socbridge.com/",
        category: CATEGORY_ANGULAR,
        image: socbridge,
        projects: [{ title: "CSS", img: css }, { title: "Bootstrap", img: bootstrap }, { title: "Ethereum", img: ethe }]
    },
    {
        id: 10,
        title: "LabsXD",
        description: "Pagina principal para empresa realizada en WordPress con elementor.",
        company: "LabsXD",
        workers: 1,
        link: "https://labsxd.com/",
        category: CATEGORY_ANGULAR,
        image: labsxd,
        projects: [{ title: "WordPress", img: wordpress }]

    }

]