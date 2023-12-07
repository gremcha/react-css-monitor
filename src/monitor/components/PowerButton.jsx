import React from 'react'
import '../styles/style.css'

export default function PowerButton({ isOffMonitor, setIsOnMonitor }) {
    return (
        <div
            className="monitor-power-button"
            onClick={() => setIsOnMonitor(!isOffMonitor)}
        >
            <div
                className={`monitor-power-light-line ${
                    isOffMonitor ? 'off' : ''
                }`}
            ></div>
            <div
                className={`monitor-power-light-round ${
                    isOffMonitor ? 'off' : ''
                }`}
            ></div>
        </div>
    )
}
