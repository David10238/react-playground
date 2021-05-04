import { useEffect, useState } from "react";


const MouseAndKeyboardTesting = ()=> {

    const [timesSaved, setTimesSaved] = useState(0);

    const handleKeyDown = (event:KeyboardEvent) => {
        if(event.key == 's' && event.ctrlKey){
            event.preventDefault();
            console.log("A key was pressed", event.key);
            setTimesSaved(timesSaved + 1);
        }
    }

    // only needs to be run when it's rendered, empty [] prevents it from being recreated each component change
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup the component
        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        }
      });// also works with [timesSaved]

    return (
        <div>
            <p>Times saved {timesSaved}</p>
        </div>
    );
}

export default MouseAndKeyboardTesting