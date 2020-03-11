import React, { useState } from "react"
import { Image, Transition } from "semantic-ui-react"
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
    </div>
    );
};

export default Home