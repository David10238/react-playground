import { useEffect, useState } from "react";


const KeyboardTest = ()=> {

    const [timesSaved, setTimesSaved] = useState(0);

    // replace with the dictionary this won't trigger a rerender
    const keyDict = new Map<string, boolean>()


    const keyIsPressed = (key:string) => {
        return keyDict.has(key) && keyDict.get(key)
    }

    const handleKeyDown = (event:KeyboardEvent) => {
        console.log("event with key ", event.key)
        if(event.key == 's' && event.ctrlKey){
            event.preventDefault();
            console.log("A key was pressed", event.key);
            console.log("Space pressed", keyIsPressed(' '))
            setTimesSaved(timesSaved + 1);
        }

        keyDict.set(event.key, true)
    }

    const handleKeyUp = (event:KeyboardEvent) => {
        keyDict.set(event.key, false)
    }

    // only needs to be run when it's rendered, empty [] prevents it from being recreated each component change
    useEffect(() => {
        // keypress is character only. keydown is allkeys
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // cleanup the component
        return () =>{
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
      });// also works with [timesSaved]

    return (
        <div> 
            <p>Times saved {timesSaved}</p>
        </div>
    );
};

const MouseTest = () =>{
    const [mouseY, setMouseY] = useState(0)
    const [mouseX, setMouseX] = useState(0)

    // turn into dictionary
    const [leftMousePressed, setLeftMousePressed] = useState(false);

    const mouseMove = (event:MouseEvent)=>{
        setMouseX(event.x)
        setMouseY(event.y)
    };

    const mouseDown = (event:MouseEvent)=>{
        if(event.button == 0)
            setLeftMousePressed(true)
    }

    const mouseUp = (event:MouseEvent)=>{
        if(event.button == 0)
            setLeftMousePressed(false)
    }

    useEffect(()=> {
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mousedown', mouseDown)
            window.removeEventListener('mouseup', mouseUp)
        }
    })

    return(
        <div>
            <p>x: {mouseX}, y: {mouseY}</p>
        </div>
    )
};

const MouseAndKeyboardTesting = () =>(
    <div>
        <KeyboardTest/>
        <MouseTest/>
    </div>
);

export default MouseAndKeyboardTesting