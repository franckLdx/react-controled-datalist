import React, { FC, useState } from "react"
import { DataList } from "./DataList";
import { DataListOption } from "./DataListOption";

export const Example1: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | undefined>(undefined)
  return (
    <div>
      <div
        style={{ width: "fit-content" }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <input placeholder="type something" />
        <DataList isOpen={isOpen} >
          <DataListOption onSelect={() => setSelected('Vaux')}>Vaux le vicompte</DataListOption>
          <DataListOption onSelect={() => setSelected('Chambord')}>Chambord</DataListOption>
        </DataList>
      </div>
      <hr />
      {selected ? `Selected: ${selected}}` : 'Nothing selected'}
    </div>
  )
}
