import React, { FC } from "react"

export const App: FC = () => {
  console.log('I m mounted');

  return (<input placeholder="type something" />)
}