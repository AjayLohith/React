import React, { useState, useEffect } from 'react';

//useEffect() will do the code in side it usually it prevents from rerendering
// again and again by using dependencies [] or [param,param]


const UseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize",handleResize);
    console.log("render");

    return ()=>{
        window.removeEventListener('resize',handleResize);
    }
  },[]);

  useEffect(()=>{
    document.title=`Size:${width}*${height}`
  },[width,height]);


  return (
    <div>
      <h2>Window size: {width} x {height}px</h2>
    </div>
  );
};

export default UseEffect;
