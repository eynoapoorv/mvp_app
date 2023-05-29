/**
 * File Name: useCountdown.js
 * 
 * Description: manage  counter hook for cocompetition the login user
 * 
 * Author: Eynosoft Team
 */

import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {

  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  localStorage.setItem("counter_time", countDownDate)
  if(countDown<=0){
    localStorage.removeItem("counter_time")
  }
  useEffect(() => {
    const interval = setInterval(() => {

      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

export { useCountdown };
