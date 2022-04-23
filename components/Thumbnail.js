import React from 'react'
const Thumbnail = ({result}) => {
  return (
    <pre>
      {JSON.stringify(result,null,2)}
     
    </pre>
  )
}

export default Thumbnail 