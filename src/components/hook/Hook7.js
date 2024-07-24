import React, { useEffect, useState } from 'react'

export default function Hook7() {
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState(1)
    useEffect(() => {
        // console.log("Side effect")
        const x = setInterval(()=>{
            console.log("load count")
            setCount(preState => preState + 1)
        })
        
        return () => {
            clearInterval(x);
            console.log("đây là cleaned up")
        }
    }, [])
    // console.log("Render hook7")
  return (
    <div>
        <h1>Tìm hiểu useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} >Count up</button>
        <p>Number: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Number up</button>
    </div>
  )
}
