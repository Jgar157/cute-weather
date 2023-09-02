import { useEffect, useState } from "react";
import styles from "./Landing.module.css";

function Clock() {
    const [time, setTime] = useState<string>(getCurrTime());
    
  // Timer updater for the clock on the landing page
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = getCurrTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
    return (
        <h1 className={styles.time}>{time}</h1>
    )
}

function getCurrTime() {
    const currDate: Date = new Date();
    let currHour: number = currDate.getHours();
    const AMorPM: string = currHour >= 12 ? "PM" : "AM";
    currHour = currHour === (0 || 12) ? 12 : currHour % 12;
  
    let currMin: any = currDate.getMinutes();
    currMin = currMin < 10 ? "0" + currMin : currMin;
  
    return `${currHour}:${currMin} ${AMorPM}`;
  }

export default Clock;