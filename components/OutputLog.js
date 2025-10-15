import React from 'react'

export default function OutputLog({output}) {
  return (
    <div>
        {output.map((line, i) => (
            <p key={i} className='whitespace-pre-wrap'>{line}</p>
        ))}
    </div>
  )
}
