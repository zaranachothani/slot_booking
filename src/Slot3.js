// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Slot3() {

  let [time1, setTime1] = useState("");
  let [time2, setTime2] = useState("");
  let [slots, setSlots] = useState();

    const generateSlots = () => {
        // setSlots(time1+" "+time2);
        if(time1 && time2){
          // const startTime=time1+" "+time2;
          // setSlots(startTime);

          // const [startHour, startMinute] = time1.split(":").map(Number);
          // const [endHour, endMinute] = time2.split(":").map(Number);
          
          const myDate = new Date(); // Replace this with your Date object

          const hours = myDate.getHours();
          const minutes = myDate.getMinutes();

          console.log(`Hours: ${hours}, Minutes: ${minutes}`);



        }
    }
  

  return (
    <div className="App">
      <center>
        <div className='slot'>
          Enter Starting Time :<br /><input type='time' onChange={(e) => { setTime1(e.target.value) }}></input><br />
          Enter Ending Time :<br /><input type='time' onChange={(e) => { setTime2(e.target.value) }}></input>
        </div>
        <div className='slot_button'>
          <button onClick={generateSlots}>Click</button>
        </div>

        {/* <table>
            <tr>
                <td>{slots}</td>
            </tr>
        </table> */}

        {
          slots && (
            <div>
              <h3>Time Slots:</h3>
              <table border={1}>
                <tbody>
                  <tr>
                    <td>{slots}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
      </center>
    </div>
  );
}

export default Slot3;
