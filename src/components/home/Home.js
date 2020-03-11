import React, { useState } from "react"
import { Image, Transition, Header } from "semantic-ui-react"
import "./Home.css"

const Home = () => {
    const [ shakeAndy, changeShakeAndy ] = useState(true)

    const toggleAndy = () => {
        changeShakeAndy(!shakeAndy)
    };

    return (
    <div className="homeContainer">
        <Transition animation='shake' duration={500} visible={shakeAndy}>
            <Image id="handyAndy" src={require('./handyandy.svg')} onClick={toggleAndy}/>
        </Transition>
        <div id="messageBubbleContainer">
        <Transition animation='fade up' duration={2000} visible={shakeAndy}>
            <Image id="speechBubble" src={require('./Speech_bubble.svg')} onClick={toggleAndy}/>
        </Transition>
        <Transition animation='fade up' duration={2000} visible={shakeAndy}>
            <Header id="homeMessage">Hello! <br/> Welcome to Handy Andy.</Header>
        </Transition>
        <Transition animation='fade up' duration={2000} visible={!shakeAndy}>
            <Image id="speechBubble" src={require('./Speech_bubble.svg')} onClick={toggleAndy}/>
        </Transition>
        <Transition animation='fade up' duration={2000} visible={!shakeAndy}>
            <Header id="homeMessage">Poking people in the face is not very sanitary . . .</Header>
        </Transition>
        </div>
    </div>
    );
};

export default Home