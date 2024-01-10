import React from 'react';
import './Sports.css'

const Sports = (props) => {
    //console.log(props)
    const {name, picture, time} = props.sport
    const addExerciseTime = props.addExerciseTime
    return (
        <div className='sports'>
            <img className='image' src={picture} alt="" />
            <h5>{name}</h5>
            <p>Time required : {time} s</p>
            <button onClick={() => addExerciseTime(time)} className='addtolist'>Add to list</button>
        </div>
    );
};

export default Sports;