import { motion } from "framer-motion"
export default function Analytic({ data, rank, containerRef }) {

    return (

        <div className="general-analytic"  >

            <div className="general-container"  >
                <motion.div className='inner' drag dragConstraints={containerRef}>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: .75 }}  className="circular-progress" style={{ "background": rank }}>
                        <span className="progress-value">{`${data.value} / ${data.maxValue}`}</span>
                    </motion.div>
                    <span className="text">{data.name}</span>
                </motion.div>
            </div>
        </div>

    )
}