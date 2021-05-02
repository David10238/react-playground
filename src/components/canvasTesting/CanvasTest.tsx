import { timeStamp } from "node:console";
import { useEffect, useRef, useState } from "react";

const OneTimeRender = () =>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestAnimationFrameRef = useRef<number>(0);

    function tryRender(){
        if(canvasRef.current == null) return;

        const context = canvasRef.current.getContext("2d");

        if(context == null) return;

        context.beginPath();
        context.arc(95, 50, 40, 0, 2 * Math.PI);
        context.stroke();
    }

    useEffect(()=>{
        tryRender()
    })
    return <canvas ref={canvasRef}></canvas>
}

const LoadingCircle = () =>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestAnimationFrameRef = useRef<number>(0);

    // just for debugging
    const [timestamp, setTimestamp] = useState(0.0);

    function tryRender(timestamp:number){
        const seconds = timestamp / 1000.0
        setTimestamp(seconds)

        if(canvasRef.current == null) return;

        const context = canvasRef.current.getContext("2d");

        if(context == null) return;

        const width = canvasRef.current.width;
        const height = canvasRef.current.height;

        context.clearRect(0, 0, width, height); // always clear the context
        context.beginPath();
        context.arc(95, 50, 40, 0, (seconds % 2.0) * Math.PI);
        context.stroke();

        requestAnimationFrameRef.current = requestAnimationFrame(tryRender)
    }

    useEffect(()=>{
        requestAnimationFrame(tryRender)
    })
    return (
        <div>
            <canvas ref={canvasRef}/>
            <p>Timestamp {timestamp}</p>
            <p>Timestamp % 2.0 {timestamp % 2.0}</p>
        </div>
    );
};

const CanvasTest = () =>(
    <div>
        <OneTimeRender/>
        <LoadingCircle/>
    </div>
);


export default CanvasTest;