import imageStego from '../../assets/images/projects/imagestego.png';
import lf from '../../assets/images/projects/leapfrog.png';
import yts from '../../assets/images/projects/yts.png';
import todo from '../../assets/images/projects/todo.png';

import ladyBoss from '../../assets/images/projects/slay-queen.png';
import oreo from '../../assets/images/projects/oreo.png';
import nezuko from '../../assets/images/projects/nezuko.png';
import girl from '../../assets/images/projects/girl.png';
import todoIcon from '../../assets/images/projects/todo-icon.png';



const initState = {
  projects: [
    {
      id: 1,
      title: "Image Steganography",
      imgSrc: imageStego,
      body: "This project is an academic based desktop application that hides a message inside an image using Least Significant Bits (LSB) technique.This project produce a security tool based on steganography and cryptography techniques for sending and receiving sensitive information over the internet.",
      language: [
        'Java'
      ],
      demo:'',
      code:'https://github.com/SupriyaAmatya/ImageSteganography'
    },
    {
      id: 2,
      title: "Leapfrog Internship",
      imgSrc: lf,
      body: "This Projects consists of a pixel perfect design and responsive of webpages from a PSD template using HTML, CSS and plain JavaScript. Also it includes some game development like car game, flappy bird and many more.",
      language: [
        'HTML', 'CSS', 'JavaScript', 'React', 'Redux'
      ],
      demo:'https://supriyaamatya.github.io/leapfrog-intern-projects/',
      code:'https://github.com/SupriyaAmatya/Leapfrog'
    },
    {
      id: 3,
      title: "Yify Movies",
      imgSrc: yts,
      body: "This project is a self learing project build using ReactJS and Rest API. This torrent movies website like YTS.mx where users can download free yify movies torrents.",
      language: [
        'ReactJS','React Router', 'YTS Web API'
      ],
      demo:'https://supriyaamatya.github.io/yts-movie-app/',
      code:'https://github.com/SupriyaAmatya/yts-movie-app'
    },
    {
      id: 4,
      title: "ToDo Web App",
      imgSrc: todo,
      body: "A single page web application for organizing your todos list made by using React for learing purpose.",
      language: [
        'React'
      ],
      demo:'https://supriyaamatya.github.io/todo-app-react/',
      code:'https://github.com/SupriyaAmatya/todo-app-react'
    },
  ],

  illustrator:[
    {id:1, title: 'The Lady Boss', imgSrc:ladyBoss},
    {id:2, title: 'Nezuko', imgSrc:nezuko},
    {id:3, title: 'Oreo', imgSrc:oreo},
    {id:4, title: 'Bicycle Girl', imgSrc:girl},
    {id:5, title: 'Todo Icon', imgSrc:todoIcon}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer
