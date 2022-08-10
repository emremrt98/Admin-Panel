import React from 'react';
import "./analytics/analytic.css"
import Analytic from './analytics/analytic'


const analyticTable = [
    {
        id: 1,
        value: 1460,
        maxValue: 3758,
        name: "Word Count"
    },
    {
        id: 2,
        value: 6,
        maxValue: 24,
        name: "Spending Time"
    },
    {
        id: 3,
        value: 75,
        maxValue: 100,
        name: "Arrive Target"
    },
    {
        id: 4,
        value: 3,
        maxValue: 24,
        name: "Spending Time for Game"
    }
]

function analytics() {

    return (
        <div>
            <div style={{ borderBottom: '1px solid black' }}>
                <h1>Analytics</h1>
            </div>
            <div className='main-contain'>
            <Analytic data = {analyticTable[0]} rank = "conic-gradient(#7d2ae8 200deg, #ededed 0deg)"/>
            <Analytic data = {analyticTable[1]} rank = "conic-gradient(#7d2ae8 92deg, #ededed 0deg)"/>
            <Analytic data = {analyticTable[2]} rank = "conic-gradient(#7d2ae8 268deg, #ededed 0deg)"/>
            <Analytic data = {analyticTable[3]} rank = "conic-gradient(#7d2ae8 30deg, #ededed 0deg)"/>
            </div>
        </div>

    );
};

export default analytics;