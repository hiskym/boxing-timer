import { useState } from "react"
import Clock from "./Clock"
import SettingButtons from "./settingButtons"

export default function Timer() {

    const [work, setWork] = useState(300);
    const [rest, setRest] = useState(60);
    const [currentInterval, setCurrentInterval] = useState('work');
    const [time, setTime] = useState(work);


    return (
        <div id="timer" className="flex flex-col widescreen:section-min-height tallscreen:section-min-height scroll-mt-20 p-6 my-12 gap-5">
            <h1 className="text-4xl font-semibold">Timer</h1>

            <div>{time}</div>
            <button>Start/Pause</button>
            <button>Reset</button>
            {/* <Clock />
            <SettingButtons /> */}
        </div>
    )
}
