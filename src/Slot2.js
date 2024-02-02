// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Slot2() {

  let [time1, setTime1] = useState("");
  let [time, setTime] = useState("");
  let [time2, setTime2] = useState("");
  let [slots, setSlots] = useState([]);

  const generateSlots = () => {
    if (time1 && time2) {
      const startTime = new Date(`2024-01-01T${time1}`);
      const endTime = new Date(`2024-01-01T${time2}`);

      const slotArray = [];
      let currentTime = startTime;

      while (currentTime < endTime) {
        const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        slotArray.push(timeString);
        currentTime.setMinutes(currentTime.getMinutes() + 10);
      }

      setSlots(slotArray);
    }
  };

  return (
    <div className="App">
      <center>
        <div className='slot'>
          Enter Starting Time :<br /><input type='time' placeholder='Enter time' onChange={(e) => { setTime1(e.target.value) }}></input><br />
          Enter Ending Time :<br /><input type='time' placeholder='Enter time' onChange={(e) => { setTime2(e.target.value) }}></input>
        </div>
        <div className='slot_button'>
          <button onClick={generateSlots}>Click</button>
        </div>
        {/* <input type='text' value={slots.join(', ')}></input> */}
        {
          slots.length > 0 && (
            <div>5
              <h3>Time Slots:</h3>
              {
                  slots.map((slot, index) => (
                      <div key={index}>{slot}</div>
                  ))
              }
            </div>
          )
        }
      </center>
    </div>
  );
}

export default Slot2;
