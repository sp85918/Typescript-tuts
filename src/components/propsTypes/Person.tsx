import React from 'react'
type PersonProps = {
    name: {
        first: string,
        last: string
    }
}
export default function Person(props: PersonProps) {
  return (
    <div>
      <h3>{props.name.first} {props.name.last}</h3>
    </div>
  )
}
