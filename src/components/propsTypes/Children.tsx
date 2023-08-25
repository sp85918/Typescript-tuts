import React from 'react'
type ChildrenProps = {
    children: React.ReactNode
}
export default function Children(props: ChildrenProps) {
  return (
    <div>
      <span>{props.children}</span>
    </div>
  )
}
