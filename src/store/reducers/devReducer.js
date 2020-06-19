import devIcon from '../../assets/images/dev-icon.png';
import htmlIcon from '../../assets/images/html-icon.png';
import cssIcon from '../../assets/images/css-icon.png';
import jsIcon from '../../assets/images/js-icon.png';
import reactIcon from '../../assets/images/react-icon.png';
import cplusIcon from '../../assets/images/java-icon.png';
import javaIcon from '../../assets/images/cplus-icon.png';

const initState = {
    title: 'development',
    title_icon: devIcon,
    skills: [
        { id: '1', imgSrc: htmlIcon, imgTitle: 'HTML' },
        { id: '2', imgSrc: cssIcon, imgTitle: 'CSS' },
        { id: '3', imgSrc: jsIcon, imgTitle: 'JavaScript' },
        { id: '4', imgSrc: reactIcon, imgTitle: 'React' },
        { id: '5', imgSrc: cplusIcon, imgTitle: 'C++' },
        { id: '6', imgSrc: javaIcon, imgTitle: 'Java' }
    ]
}

const devReducer = (state = initState, action) => {
    return state;
}

export default devReducer