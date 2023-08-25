import React from 'react'

type  OptionalPropsList = {
    name?: string
}
export default function OptionalProps(props: OptionalPropsList) {
    const {name = 'Unknown'} = props;
  return (
    <div>
      <span>{name}</span>
    </div>
  )
}
