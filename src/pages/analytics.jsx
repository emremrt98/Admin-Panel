import React from 'react';
import "./analytics/analytic.css"
import Analytic from './analytics/analytic'
import { BsFillCircleFill } from "react-icons/bs";
import { animate, motion } from "framer-motion"
import { useRef } from "react";

export default function Analytics() {
    const analyticTable = [
        {
            id: 1,
            value: 1460,
            maxValue: 3758,
            name: "Word Count",
            color: "conic-gradient(#1C4FB2 20deg, #1c4eb27e 0deg)"
        },
        {
            id: 2,
            value: 6,
            maxValue: 24,
            name: "Spending Time",
            color: "conic-gradient(#D90A0A 100deg, #d90a0a7a 0deg)"
        },
        {
            id: 3,
            value: 75,
            maxValue: 100,
            name: "Arrive Target",
            color: "conic-gradient(#50A663 270deg, #50a6637a 0deg)"
        },
        {
            id: 4,
            value: 3,
            maxValue: 24,
            name: "Spending Time for Game",
            color: "conic-gradient(#CD9E42 50deg, #cd9f4288 0deg)"
        }
    ]
    const studentList = [
        {
            name: "Emre Mert",
            isActive: false
        },

        {
            name: "Emre Mert",
            isActive: false
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: false
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: false
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: false
        },
        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: true
        },

        {
            name: "Emre Mert",
            isActive: false
        },
        {
            name: "Emre Mert",
            isActive: false
        },
        {
            name: "Emre Mert",
            isActive: false
        }

    ]
    const containerRef = useRef(null);

    const variants = {
        hidden: {
            scale: 0
        },
        visible1: {
            scale: 1,
            transition: { duration: 1 }
        },
        visible2: {
            scale: 1,
            transition: { duration: 1, delay: .25 }
        },
        visible3: {
            scale: 1,
            transition: { duration: 1, delay: .5 }
        },
        visible4: {
            scale: 1,
            transition: { duration: 1, delay: .75 }
        },

        hiddenStudent: {
            x: 500,
        },
        showStudent: {
            x: 0,
            transition: { duration: 1, delay: 1.5 }
        }
    }


    return (
        <div>
            <div style={{ borderBottom: '1px solid black' }}>
                <h1>Analytics</h1>
            </div>
            <div className='main-contain'>
                <div className='contain' ref={containerRef} >
                    <motion.div initial="hidden" animate="visible1" variants={variants}  >
                        <Analytic
                            containerRef={containerRef}
                            data={analyticTable[0]}
                            rank={analyticTable[0].color}
                        />
                    </motion.div>

                    <motion.div initial="hidden" animate="visible2" variants={variants} >
                        <Analytic
                            containerRef={containerRef}
                            data={analyticTable[1]}
                            rank={analyticTable[1].color}
                        />
                    </motion.div>

                    <motion.div initial="hidden" animate="visible3" variants={variants} >
                        <Analytic
                            containerRef={containerRef}
                            data={analyticTable[2]}
                            rank={analyticTable[2].color}
                        />
                    </motion.div>

                    <motion.div initial="hidden" animate="visible4" variants={variants} >
                        <Analytic
                            containerRef={containerRef}
                            data={analyticTable[3]}
                            rank={analyticTable[3].color}
                        />
                    </motion.div>
                </div>
                <motion.div initial="hiddenStudent" animate="showStudent" variants={variants}>
                    <div className="head">
                        <h2 className='header'>Student List</h2>
                        <p className='userCount'>09 / 16</p>
                    </div>
                    <div className="student">
                        {
                            studentList.map((person, index) => (<p key={index} className='information' ><span className='person'>{person.name}</span> <span><BsFillCircleFill className='activeUser' style={person.isActive ? { "color": "green" } : { "color": "red" }} /></span></p>))
                        }
                    </div>
                </motion.div>
            </div>
        </div >

    );
};

