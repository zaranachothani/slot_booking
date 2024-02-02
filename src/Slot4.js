import './App.css';
import {useState} from 'react';

function Slot4() {
  let[time,setTime1]=useState('');
  let[endtime,setTime2]=useState('');
  let [slots, setSlots] = useState([]);

  const handlesloat=()=>{
    if(time && endtime){
      const startTime = new Date(`01/01/2024 ${time}`);
      const endTime = new Date(`01/01/2024 ${endtime}`);
      if(startTime<endTime){
        const tempsloat=[];
          while(startTime<endTime) {
            if(new Date(startTime.getTime() + 10 * 60000)<endTime)
            {
              let set_time=new Date(startTime.getTime() + 10 * 60000);
              const slot={
                start: startTime.getHours()+":"+startTime.getMinutes(),
                end: set_time.getHours()+":"+set_time.getMinutes()
              }
              tempsloat.push(slot);
            }else{
              let diff=endTime.getMinutes()-startTime.getMinutes();
              // alert(diff);
              let set_time=new Date(startTime.getTime() + diff * 60000);
              const slot={
                start: startTime.getHours()+":"+startTime.getMinutes(),
                end: set_time.getHours()+":"+set_time.getMinutes()
              }
              tempsloat.push(slot);
            }
            startTime.setMinutes(startTime.getMinutes()+10); 
          }
          setSlots(tempsloat);
      }else{
          alert("End time should be after start time");
      }
    }else{
      alert("Enter Time Or Endtime");
    }
  }
  return (
    <div className="App">
      <center>
      <div className='slot'>
          Enter Starting Time :<br/><input type='time' onChange={(e) => { setTime1(e.target.value) }}></input><br/>
          Enter Ending Time :<br/><input type='time' onChange={(e) => { setTime2(e.target.value) }}></input>
        </div>
        <div className='slot_button'>
          <button onClick={handlesloat}>Click</button>
        </div>
        <div className='slots'>
            <h3>Time Slots</h3>
            <ul>
              {slots.map((slot, index) => (
                <li key={index}>
                  {slot.start} - {slot.end}
                </li>
              ))}
            </ul>
          </div>
      </center>
    </div>
  );
}

export default Slot4;