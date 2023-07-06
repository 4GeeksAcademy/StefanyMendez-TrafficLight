import React, { useEffect, useRef, useState } from "react"


const TrafficLight = () => {

    const [color, setColor] = useState('');
    const [colorRedSelected, setcolorRedSelected] = useState('');
    const [colorYellowSelected, setcolorYellowSelected] = useState('');
    const [colorGreenSelected, setcolorGreenSelected] = useState('');
    const [colorPurpleSelected, setcolorPurpleSelected] = useState('');
    const [hidden, setHidden] = useState(true)
    const interval = useRef(null);

    let colorIndex = 0


    const colorSelected = () => {

        if (color == "red") {
            setcolorRedSelected("selected")
            setcolorYellowSelected("")
            setcolorGreenSelected("")
            setcolorPurpleSelected("")
        }
        if (color == "yellow") {
            setcolorYellowSelected("selected")
            setcolorRedSelected("")
            setcolorGreenSelected("")
            setcolorPurpleSelected("")
        }
        if (color == "green") {
            setcolorGreenSelected("selected")
            setcolorRedSelected("")
            setcolorYellowSelected("")
            setcolorPurpleSelected("")
        }
        if (color == "purple") {
            setcolorPurpleSelected("selected")
            setcolorRedSelected("")
            setcolorYellowSelected("")
            setcolorGreenSelected("")

        }

    }

    const handleStart = () => {
        interval.current = setInterval(() => {

            if (hidden == false) {
                const colors = ["red", "yellow", "green", "purple"]

                const colorTurnOn = colors[colorIndex]

                if (colorTurnOn === "red") {
                    setcolorRedSelected("selected")
                    setcolorYellowSelected("")
                    setcolorGreenSelected("")
                    setcolorPurpleSelected("")
                }
                if (colorTurnOn === "yellow") {
                    setcolorYellowSelected("selected")
                    setcolorRedSelected("")
                    setcolorGreenSelected("")
                    setcolorPurpleSelected("")
                }
                if (colorTurnOn === "green") {
                    setcolorGreenSelected("selected")
                    setcolorRedSelected("")
                    setcolorYellowSelected("")
                    setcolorPurpleSelected("")
                }
                if (colorTurnOn === "purple") {
                    setcolorPurpleSelected("selected")
                    setcolorRedSelected("")
                    setcolorYellowSelected("")
                    setcolorGreenSelected("")
                }

                colorIndex < 3 ? colorIndex++ : colorIndex = 0

            }
            else {
                const colors = ["red", "yellow", "green"]
                const colorTurnOn = colors[colorIndex]

                if (colorTurnOn === "red") {
                    setcolorRedSelected("selected")
                    setcolorYellowSelected("")
                    setcolorGreenSelected("")
                    setcolorPurpleSelected("")
                }
                if (colorTurnOn === "yellow") {
                    setcolorYellowSelected("selected")
                    setcolorRedSelected("")
                    setcolorGreenSelected("")
                    setcolorPurpleSelected("")
                }
                if (colorTurnOn === "green") {
                    setcolorGreenSelected("selected")
                    setcolorRedSelected("")
                    setcolorYellowSelected("")
                    setcolorPurpleSelected("")
                }

                colorIndex < 2 ? colorIndex++ : colorIndex = 0

            }

        }, 500);

    }

    const handleReset = () => {
        clearInterval(interval.current)
        setcolorGreenSelected("")
        setcolorRedSelected("")
        setcolorYellowSelected("")
        setcolorPurpleSelected("")
    }


    const addPurple = () => {
        setHidden(false)
    }
    const deletePurple = () => {
        setHidden(true)
    }

    useEffect(() => {
        colorSelected();

    })

    return (
        <div>
            <div id="traffic-top"></div>
            <div id="container">
                <div className={"red light " + colorRedSelected} onClick={() => setColor("red")}></div>
                <div className={"yellow light " + colorYellowSelected} onClick={() => setColor("yellow")}></div>
                <div className={"green light " + colorGreenSelected} onClick={() => setColor("green")}></div>
                <div className={"purple light " + colorPurpleSelected} hidden={hidden} onClick={() => setColor("purple")}></div>
            </div>

            <div className="container-fluid">
                <button className="btn btn-lg shadow-lg" onClick={() => handleStart()}>Change Color</button>
                <button className="btn btn-lg shadow-lg" onClick={() => handleReset()}>Stop Change Color</button>
                <button className="btn btn-lg shadow-lg" onClick={() => addPurple()}>Add Purple</button>
                <button className="btn btn-lg shadow-lg" onClick={() => deletePurple()}>Delete Purple</button>
            </div>
        </div>
    )
}

export default TrafficLight