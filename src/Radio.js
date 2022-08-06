import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Fab } from '@mui/material';
import { Accessibility, DirectionsWalk, DirectionsRun } from '@mui/icons-material';
import GestureIcon from '@mui/icons-material/Gesture';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import "./styles.css";

export default function Radio(props){
    //record the toggled state
    const [toggled, setToggled] = useState(false);
    const actButDivRef = useRef(null);
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
            <span id='actionContainer' style={{"backgroundColor": "red"}}>
                <Button className={toggled? 'actionsActive':'actions'} id='actionMainButton' onClick={toggleMenu}>
                    <GestureIcon />
                </Button>
                    <span id='actionButtonsDiv' ref={actButDivRef} style={{"backgroundColor": "blue"}}>
                        <Button className={toggled? 'actionButton':'actionButtonInactive'} id='idleButton' value={'oneIdle'}>
                            <Accessibility />
                        </Button>
                        <Button className={toggled? 'actionButton':'actionButtonInactive'}  id='readyButton' value={'readyIdle'}>
                            <DirectionsWalk />
                        </Button>
                        <Button className={toggled? 'actionButton':'actionButtonInactive'}  id='ninjaButton' value={'ninyaIdle'}>
                            <DirectionsRun />
                        </Button>
                        <Button className={toggled? 'actionButton':'actionButtonInactive'}  id='happyButton' value={'happyIdle'}>
                            <SportsMartialArtsIcon />
                        </Button>       
                    </span>
            </span>
        )
}