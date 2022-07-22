import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class actionButtons extends Component{

    render(){
        return (
            <> 
                <Button id='idleButton' >Idle</Button>
                <Button id='readyButton' >Ready</Button>
                <Button id='ninjaButton' >Ninja</Button>
                <Button id='happyButton' >Happy</Button>
                {/*<Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>*/}
            </>
        )
    }
    
}

export default actionButtons;