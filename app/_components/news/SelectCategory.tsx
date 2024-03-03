import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NewsCategory } from "."

interface SelectCategoryProps {
  value: string
  onChange: (value: string) => void
}

export function SelectCategory({ value, onChange }: SelectCategoryProps) {
  const handleOnChange = (value: string) => {
    onChange(value)
  }
  return (
    <Select value={value} onValueChange={(value) => handleOnChange(value)} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(NewsCategory).map((category, i) => (
            <SelectItem key={i} value={category} className="capitalize">
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
