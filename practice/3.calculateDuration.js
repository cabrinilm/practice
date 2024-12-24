
// takes two time strings ( time the person went to sleep and time woke up)
//return the total sleep duration( formatted to two decimal places)
// must handle cases where the wake up time is on the following day


function calculateDuration(sleep_time, wake_time) {
    const [sleepHour, sleepMinute] = sleep_time.split(':').map(Number);
    const [wakeHour, wakeMinute] = wake_time.split(':').map(Number);
  
    const sleepMinutes = sleepHour * 60 + sleepMinute;
    const wakeMinutes = wakeHour * 60 + wakeMinute;
  
    const durationMinutes = wakeMinutes >= sleepMinutes
      ? wakeMinutes - sleepMinutes
      : 1440 - sleepMinutes + wakeMinutes;
  
    
    return (durationMinutes / 60).toFixed(2); 
  }




module.exports = calculateDuration;