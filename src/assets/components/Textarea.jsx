import React from 'react'

const Textarea = ({setValue, ...props}) => {
  return (
    <>
      <textarea onChange={({target}) => setValue(target.value)} {...props}/>
    </>
  )
}

export default Textarea