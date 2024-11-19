import React from 'react'

export default async  function SingleSalesman({params}) {
  const { id } = await params
  return (
    <>
    return <p>ID: {id}</p>
    </>
    
  )
}
