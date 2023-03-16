import React from 'react'

const TitleHeader = (props: any) => {
  const { title } = props
  return (
    <div className='text-start fw-bold text-dark p-4 fs-5'>
      {title}
    </div>
  )
}

export default TitleHeader
