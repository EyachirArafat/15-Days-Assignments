import React from 'react'

export const QuestionTemp = ({questions, children}) => {
  return (
    <div className="flex flex-col gp-3">
      <h1 className="lg:text-3xl text-xl tracking-wide pt-7 pb-3 text-html1">
        {questions}
      </h1>
      {children}
    </div>
  )
}

