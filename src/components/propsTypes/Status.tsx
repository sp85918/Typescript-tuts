import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
export default function Status(props: StatusProps) {
    let message;
    if(props.status === 'loading'){
        message="Loading...";
    } 
    if(props.status === 'success'){
        message= "Success!";
    } 
    if(props.status === 'error'){
        message ="Error!" ;
    }
  return (
    <div>
      <h4>{message}</h4>
    </div>
  )
}
