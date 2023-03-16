
import React from 'react'
import { ArrowsLeft } from '../../../assets/Icons/Icons'
import { useNavigate } from 'react-router-dom'

export const ArrowsPrevious = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><ArrowsLeft /></div>
  )
}
