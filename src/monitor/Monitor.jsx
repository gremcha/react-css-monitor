import React, { useState } from 'react'
import './styles/style.css'
import PowerButton from './components/PowerButton'
import MonitorStand from './components/MonitorStand'

export default function Monitor() {
    const [isOffMonitor, setIsOnMonitor] = useState(false)
    return (
        <div className="monitor">
            <MonitorStand />
            <div
                className={`monitor-display ${isOffMonitor ? 'off' : ''}`}
            ></div>
            <PowerButton
                isOffMonitor={isOffMonitor}
                setIsOnMonitor={setIsOnMonitor}
            />
        </div>
    )
}
