import { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Fab } from '@mui/material';
import { Accessibility, DirectionsWalk, DirectionsRun } from '@mui/icons-material';
import GestureIcon from '@mui/icons-material/Gesture';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { CSSTransition } from 'react-transition-group';
import "./styles.css";

export default function Radio(props){
    //record the toggled state
    const [toggled, setToggled] = useState(false);

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
            <div id='actionContainer'>
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
                    <div className='actionButtonsDiv' >
                        <Button className='actionButton' id='idleButton' value={'oneIdle'}>
                            <Accessibility />
                        </Button>
                        <Button className='actionButton' id='readyButton' value={'readyIdle'}>
                            <DirectionsWalk />
                        </Button>
                        <Button className='actionButton' id='ninjaButton' value={'ninyaIdle'}>
                            <DirectionsRun />
                        </Button>
                        <Button className='actionButton' id='happyButton' value={'happyIdle'}>
                            <SportsMartialArtsIcon />
                        </Button>       
                    </div>
                    
                </CSSTransition>
                    
            </div>
        )
}