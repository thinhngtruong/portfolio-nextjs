import React, { useEffect, useRef, useState } from "react";

export const useIntervalTitle = () => {
  const [showTitle, setShowTitle] = useState(true);
  const showTitleRef = useRef(true);


  useEffect(() => {
    var intervalId = setInterval(() => {
      setShowTitle(!showTitleRef.current);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    showTitleRef.current = showTitle;
  })

  return {
    showTitle,
  };
};
