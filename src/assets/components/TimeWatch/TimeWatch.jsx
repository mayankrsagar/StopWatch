import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';

const TimeWatch = () => {
const [time,setTime]=useState({minute:0,seconds:0})
const [start,setStart]=useState(false)


useEffect(()=>{
let timer;
if(start){

   timer= setInterval(() => {
       setTime(prev=>{
        const totalSeconds=prev.minute*60+prev.seconds+1
        return{
            minute:Math.floor(totalSeconds/60),
            seconds:totalSeconds%60
        }
       })
    }, 1000);
}

return ()=>{
    clearInterval(timer);
}

},[start])

  return (
    <Fragment>
        <h1>Stopwatch</h1>
        <p>Time {time.minute }:{time.seconds<10?`0${time.seconds}`:time.seconds}</p>
        <button onClick={()=>setStart(prev=>!prev)}>{start?"Stop":"Start"}</button>
        <button onClick={()=>setTime({minute:0,seconds:0})}>Reset</button>
    </Fragment>
  )
}

export default TimeWatch