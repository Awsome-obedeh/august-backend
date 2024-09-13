import React from 'react'
import notFound from './dashboard/not-found'

export default function NotFound() {

  let req=false

if(req!=true){
    return notFound
}
  return (
    <div>
      <h2 className="text-2xl text-red-600">PAGE NOT FOUND</h2>
    </div>
  )
}
