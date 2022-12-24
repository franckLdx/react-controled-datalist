import React, { FC } from "react"
import { DataList } from "./DataList";
import { DataListOption } from "./DataListOption";

export const App: FC = () => (
  <>
    <input placeholder="type something" />
    <DataList isOpen >
      <DataListOption>Vaux le vicompte</DataListOption>
      <DataListOption>Chambord</DataListOption>
    </DataList>
  </>
)
