import React, { useEffect, useState } from 'react';
import './Main.css'
import Sports from '../Sports/Sports';
import Cart from '../Cart/Cart';
const Main = () => {
    const [sports, setSports] = useState([])
    const [exerciseTimes, setExerciseTimes] = useState([0])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    },[])
    const addExerciseTime = (time) =>{
            setExerciseTimes(prevTime => parseInt(prevTime + time))
    }
    return (
        <div>
            <div className='main-container'>
              <div className="sports-container">
                <h3>Select Today's Exercise</h3>
                <div className='sport'>
                    {
                        sports.map(sport => <Sports 
                                key={sport.id}
                                sport = {sport}
                                addExerciseTime={addExerciseTime}
                            ></Sports>)
                    }
                </div>
              </div>
              <div className="cart-container">
                <Cart
                    totalExerciseTime={exerciseTimes}
                ></Cart>
              </div>
            </div>
            <div>
                <h5>1-- Instead of manipulating Browser's DOM , React creates a virtual DOM in the memory, where it does all the manipulating before changing the browser's DOM.
                    React finds out what changes are needed and changes only what needs to be changed .
                </h5><br />
                <h5>2--State- We use state where we need to manage data within a Component and it can be changed using setState function.
                    Props- props is generally used to send data from parent component to child component. It is immutable that cant be changed with in a component.
                </h5><br />
                <h5>3--It allows us to perform side effects in our component. Some examples of side effects are fetching data, directly updating the DOM , timers etc</h5>
            </div>
        </div>
    );
};

export default Main;