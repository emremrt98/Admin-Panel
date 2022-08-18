import { motion } from "framer-motion"
import { useRef } from "react";
export default function Analytic({ data, rank, containerRef }) {
    
    return (

        <div className="general-analytic"  >

            <div className="general-container"  >
                <motion.div className='inner' drag dragConstraints={containerRef}>
                    <div className="circular-progress" style={{ "background": rank }}>
                        <span className="progress-value">{`${data.value} / ${data.maxValue}`}</span>
                    </div>
                    <span className="text">{data.name}</span>
                </motion.div>
            </div>
        </div>

    )
}