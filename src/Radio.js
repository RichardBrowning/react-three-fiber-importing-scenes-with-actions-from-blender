import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accessibility, DirectionsWalk, DirectionsRun } from '@mui/icons-material';
import GestureIcon from '@mui/icons-material/Gesture';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import "./styles.css";

export default function Radio(props){
    //record the toggled state
    const [toggled, setToggled] = useState(false);
    //const actButDivRef = useRef(null);
    const toggleMenu =()=>{
        setToggled(!toggled);
        console.log(toggled);        
    }
    /**
     * toggle:
     * 1.click the actionMainButton WHEN LIST IS NOT TOGGLED
     * untoggle:
     * 1.click the actionMainButton WHEN LIST IS TOGGLED
     * 2.click else places of the page */
        return (
            <span id='actionContainer'>
                <Button className={toggled? 'actionsActive':'actions'} id='actionMainButton' onClick={toggleMenu}>
                    <GestureIcon />
                </Button>
                <CSSTransition
                    in={toggled}
                    timeout={300}
                    unmountOnExit
                    classNames="actionButtonsDiv"
                    onEnter={() => setToggled(true)}
                    onExited={() => setToggled(false)}
                    >
                        <Stack direction='vertical' id='actionButtonsDiv'>
                        <Button className='actionButton' id='idleButton' value={'oneIdle'} onClick={()=>props.changeAnimation('oneIdle')}>
                            <Accessibility />
                        </Button>
                        <Button className='actionButton' id='readyButton' value={'readyIdle'} onClick={()=>props.changeAnimation('readyIdle')}>
                            <DirectionsWalk />
                        </Button>
                        <Button className='actionButton' id='ninjaButton' value={'ninyaIdle'} onClick={()=>props.changeAnimation('ninyaIdle')}>
                            <DirectionsRun />
                        </Button>
                        <Button className='actionButton' id='happyButton' value={'happyIdle'} onClick={()=>props.changeAnimation('happyIdle')}>
                            <SportsMartialArtsIcon />
                        </Button>       
                        </Stack>
                </CSSTransition>
            </span>
        )
}