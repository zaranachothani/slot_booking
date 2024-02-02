import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Slot1() {
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [extraTime, setExtraTime] = useState(0); // Initialize extraTime as a state
  const [slots, setSlots] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const generateSlots = () => {
    if (time1 && time2 && extraTime >= 0) { // Ensure extraTime is non-negative
      const [startHour, startMinute] = time1.split(':').map(Number);
      const [endHour, endMinute] = time2.split(':').map(Number);

      const baseDate = new Date(2024, 0, 1);

      const startTime = new Date(baseDate);
      startTime.setHours(startHour, startMinute);

      let endTime = new Date(baseDate);
      endTime.setHours(endHour, endMinute);

      if (endTime < startTime) {
        endTime.setDate(endTime.getDate() + 1);
      }

      const slotArray = [];
      let currentTime = startTime;

      while (currentTime < endTime) {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
        slotArray.push(timeString);

        currentTime.setMinutes(currentTime.getMinutes() + 10);
      }

      // Ensure the last slot covers the remaining minutes plus extra time
      const lastSlotIndex = slotArray.length - 1;
      const lastSlot = new Date(slotArray[lastSlotIndex]);
      const remainingMinutes = (endTime - lastSlot) / (1000 * 60);

      if (remainingMinutes > 0) {
        const extraSlot = new Date(endTime);
        extraSlot.setMinutes(extraSlot.getMinutes() + remainingMinutes + extraTime);
        const extraHours = extraSlot.getHours();
        const extraMinutes = extraSlot.getMinutes();
        const extraPeriod = extraHours >= 12 ? 'PM' : 'AM';
        const extraTimeString = `${extraHours}:${extraMinutes < 10 ? '0' : ''}${extraMinutes} ${extraPeriod}`;
        slotArray[lastSlotIndex] = extraTimeString;
      }

      setSlots(slotArray);
      setErrorMessage(''); // Reset error message if any
    } else {
      setErrorMessage('Invalid input. Please make sure to provide valid times and a non-negative extra time.');
    }
  };

  return (
    <div className="App">
      <center>
        <div className='slot'>
          Enter Starting Time :
<input type='time' onChange={(e) => { setTime1(e.target.value) }}></input>

          Enter Ending Time :
<input type='time' onChange={(e) => { setTime2(e.target.value) }}></input>
        </div>
        <div className='slot_button'>
          <button onClick={generateSlots}>Click</button>
        </div>
        {
          slots.length > 0 && (
            <div>
              <h3>Time Slots:</h3>
              {slots.map((slot, index) => (
                <table border={1}>
                  <tr>
                    <td key={index}>{slot}</td>
                  </tr>
                </table>
              ))}
            </div>
          )
        }
      </center>
    </div>
  );
}

export default Slot1;
