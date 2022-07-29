import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import "./styles.css";

class actionButtons extends Component{

    render(){
        return (
            <> 
                <Button className='actionButton' id='idleButton' >Idle</Button>
                <Button className='actionButton' id='readyButton' >Ready</Button>
                <Button className='actionButton' id='ninjaButton' >Ninja</Button>
                <Button className='actionButton' id='happyButton' >Happy</Button>
                {/*<Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>*/}
            </>
        )
    }
    
}

export default actionButtons;