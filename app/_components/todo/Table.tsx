'use client'

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@radix-ui/react-checkbox"
import { CheckCircle, Circle, Trash2 } from "lucide-react"



interface TodoProps {
  data: {
    isDone: boolean
    description: string
  }[]
  handleToggleStatus: (index: number) => void
  handleDelete: (index: number) => void
}

export function TableDemo(props: TodoProps) {
  const data = props.data

  return (
    <Table>
      <TableCaption>A list of your todo tasks</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((todo, i) => (
          <TableRow key={i}>
            <TableCell>
              <Button variant="ghost" onClick={() => props.handleToggleStatus(i)}>
                {todo.isDone ? <CheckCircle className="h-15 w-15 text-green-500"/> : <Circle className="h-15 w-15"/>}
              </Button>
            </TableCell>
            <TableCell>{todo.description}</TableCell>
            {/* <TableCell className="">asd</TableCell> */}
            <TableCell className="">
              <Button variant="ghost" onClick={() => props.handleDelete(i)}>
                <Trash2 className="h-15 w-15 text-red-500" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  )
}
