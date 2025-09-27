'use client';
import React, { useState } from 'react';

export default function ArmViewer() {
  const [shoulderAngle, setShoulderAngle] = useState(45);
  const [elbowAngle, setElbowAngle] = useState(30);
  const [wristAngle, setWristAngle] = useState(0);

  return (
    <div className="w-full bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30">
      <h3 className="text-xl font-bold text-white mb-4">Interactive 3D Robotic Arm</h3>
      
      <div className="h-80 mb-6 bg-slate-800/30 rounded-lg border border-slate-600/20 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <div className="text-6xl mb-4">🦾</div>
          <p className="text-lg">3D Robotic Arm Demo</p>
          <p className="text-sm">Use controls below to adjust joint angles</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-600/20">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Shoulder: {shoulderAngle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={shoulderAngle}
              onChange={(e) => setShoulderAngle(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-600/20">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Elbow: {elbowAngle}°
            </label>
            <input
              type="range"
              min="0"
              max="180"
              value={elbowAngle}
              onChange={(e) => setElbowAngle(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-600/20">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Wrist: {wristAngle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={wristAngle}
              onChange={(e) => setWristAngle(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setShoulderAngle(45);
              setElbowAngle(30);
              setWristAngle(0);
            }}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Reset Position
          </button>
        </div>
      </div>
    </div>
  );
}