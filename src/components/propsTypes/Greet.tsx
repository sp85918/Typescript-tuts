import React from 'react'

type GreedProps = {
    name: string,
    totalMessages: number,
    isLoggedIn: boolean
}
export default function Greet(props: GreedProps) {
  return (
    <div>
        {props.isLoggedIn ? <h2 className="title">Hi {props.name} How are you! You have {props.totalMessages}</h2> : 'Welcome Guest' }
        
    </div>
  )
}
