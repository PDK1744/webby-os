import React, { useState } from 'react'

export default function CommandInput({ onSubmit }) {
  const [command, setCommand] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && command.trim()) {
        onSubmit(command);
        setCommand('');
    }
  };

  return (
    <div className='flex'>
        {/* <span className='text-green-500 mr-2'>webbyos@web:</span>
        <span className='text-green-500 mr-2'>~$</span> */}
        <span className='text-green-500 mr-2'>{">"}</span>
        <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className='flex-1 bg-transparent outline-none text-green-400'
            autoFocus
        />
    </div>
  )
}
