import React from 'react'
import { cn } from '../lb/utils/cn'

export const Title = ({className, title}) => {
  return (
    <div className={cn("text-xl font-bold pb-4",className)}>
      {title}
    </div>
  )
}
