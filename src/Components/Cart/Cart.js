import React, { useState } from 'react';
import "./Cart.css"
const Cart = ({totalExerciseTime}) => {
    const [time, setTime] = useState([0])
    const addBreak = (breakTime) =>{
        setTime(breakTime)
    }
    return (
        <div>
            <h2>Shahriar Shaown</h2>
            <p>Mirpur,Dhaka</p>
            <h3>Add a Break</h3>
            <div className='btn-break'>
                <button onClick={() => addBreak(10)}>10s</button>
                <button onClick={() => addBreak(20)}>20s</button>
                <button onClick={() => addBreak(30)}>30s</button>
                <button onClick={() => addBreak(40)}>40s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='etime'>
                <h3>Exercise Time :  </h3>
                <p><span className='second'>{totalExerciseTime} seconds</span></p>
            </div>
            <div className='etime'>
                <h3>Break Time :  </h3>
                <p><span className='second'>{time} seconds</span></p>
            </div>
            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;