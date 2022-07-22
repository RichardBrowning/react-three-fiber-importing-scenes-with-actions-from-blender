import Button from 'react-bootstrap/Button';
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class actionButtons extends Component{
    jQuerycode = () => {
        $("#idleButton").click(function(){
            console.log("idle")
        });
        $("#readyButton").click(function(){
            console.log("ready")
        });
        $("#ninjaButton").click(function(){
            console.log("ninja")
        });
        $("#happyButton").click(function(){
            console.log("happy")
        });
    } 

    componentDidMount(){
        this.jQuerycode()
    }
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