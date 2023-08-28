import React from 'react'
type EventProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export default function Event(props:EventProps) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click Props Type Script</button>
    </div>
  )
}
