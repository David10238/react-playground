import { useEffect, useState } from "react";


const KeyboardTest = ()=> {

    const [timesSaved, setTimesSaved] = useState(0);

    // replace with the dictionary
    const [spaceDown, setSpaceDown] = useState(false);

    const handleKeyDown = (event:KeyboardEvent) => {
        console.log("event with key ", event.key)
        if(event.key == 's' && event.ctrlKey){
            event.preventDefault();
            console.log("A key was pressed", event.key);
            setTimesSaved(timesSaved + 1);
        }

        if(event.key == ' ')
            setSpaceDown(true);
    }

    const handleKeyUp = (event:KeyboardEvent) => {
        if(event.key == ' ')
            setSpaceDown(false);
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
            <p>{spaceDown ? "True" : "False"}</p>
        </div>
    );
};

const MouseTest = () =>{
    return(
        <div>
        </div>
    )
};

const MouseAndKeyboardTesting = () =>(
    <div>
        <KeyboardTest/>
        <p/>
        <MouseTest/>
    </div>
);

export default MouseAndKeyboardTesting