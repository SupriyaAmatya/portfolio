import designIcon from '../../assets/images/design-icon.png';
import figmaIcon from '../../assets/images/figma-icon.png';
import illustratorIcon from '../../assets/images/illustrator-icon.png';
import photoshopIcon from '../../assets/images/photoshop-icon.png'

const initState = {
    title: 'design',
    title_icon: designIcon,
    skills: [
        { id: '1', imgSrc: figmaIcon, imgTitle: 'Figma' },
        { id: '2', imgSrc: illustratorIcon, imgTitle: 'Illustrator' },
        { id: '3', imgSrc: photoshopIcon, imgTitle: 'Photoshop' }
    ]
}

const designReducer = (state = initState, action) => {
    return state;
}

export default designReducer