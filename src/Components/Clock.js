import React, { useEffect, useState } from 'react'
import "./Clock.css"

function Clock() {

    const [backGround,setBackgraound] = useState("#755139FF");
    const [color,setColor] = useState("#F2EDD7FF");

    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [hours,setHours] = useState(0);
    const [twelve_f,setTwelve_F] = useState(true);

    const [ampm,setAmpm] = useState("")

    function HourFormat(){
        setTwelve_F(!twelve_f);
        let temp = backGround;
        setBackgraound(color);
        setColor(temp);
    };
    
    useEffect(()=> {
        const intervalId = setInterval(() => {
            const date = new Date();
            setSeconds(date.getSeconds());
            setMinutes(date.getMinutes());

            let f_hour = date.getHours();
            if (twelve_f){
                if (f_hour > 12) {
                    setHours(f_hour - 12);
                    setAmpm("PM");
                }
                else{
                    setAmpm("AM");
                }
            }
            else{
                setHours(f_hour);
                setAmpm("--");
            }
        },1000);
        return () => clearInterval(intervalId);
    },[twelve_f]);



  return (
    <div className='mainDiv'>
        <div className='time'>
            <button>{hours}</button>:
            <button>{minutes}</button>:
            <button>{seconds}</button>
            <button className='ampm'> {ampm}</button>
        </div>
        <div className='formatChangediv'>
            <button className='formatButton'
            style={{backgroundColor:backGround,color:color}}>
                {twelve_f?"12":"24"} Hour Format
                <button className='changeButton' 
                onClick={HourFormat}
                style={{backgroundColor:color,color:backGround}}>
                    Change To {twelve_f?"24":"12"}
                </button>
            </button>
        </div>
    </div>
  )
}

export default Clock