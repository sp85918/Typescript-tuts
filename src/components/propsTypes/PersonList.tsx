import React from 'react'

type PersonListProps = {
  names: {
    first: string,
    last: string
  }[]
}
export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {
        props.names.map(name => {
          return (
            <h4>{name.first} {name.last}</h4>
          )
        })
      }
    </div>
  )
}
