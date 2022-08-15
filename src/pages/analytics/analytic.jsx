import { useState } from "react";

export default function Analytic({ data, rank }) {
    const [color, setColor] = useState(0);
    return (

        <div className="general-analytic">

            <div className="general-container" >
                <div className='inner' >
                    <div className="circular-progress" style={{ "background": rank }}>
                        <span className="progress-value">{`${data.value} / ${data.maxValue}`}</span>
                    </div>
                    <span className="text">{data.name}</span>
                </div>
            </div>
        </div>

    )
}