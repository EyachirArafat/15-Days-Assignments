import React from 'react'

export const QuestionTemp = ({questions, children}) => {
  return (
    <div className="flex flex-col gp-3">
      <h1 className="lg:text-3xl text-xl tracking-wide pb-6 text-html1">
        {questions}
      </h1>
      {children}
    </div>
  )
}

