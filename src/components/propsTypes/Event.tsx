import React from 'react'
type EventProps = {
    handleClick: () => void
}
export default function Event(props:EventProps) {
  return (
    <div>
      <button onClick={props.handleClick}>Click Props Type Script</button>
    </div>
  )
}
