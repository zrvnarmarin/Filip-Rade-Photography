import React from 'react'
import { useParams } from 'react-router-dom'

const TestComponent = () => {
  const { id } = useParams()
  return (
    <div>TestComponent {id}</div>
  )
}

export default TestComponent