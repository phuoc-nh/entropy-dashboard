'use client'
import React, { useEffect, useState } from 'react'
import { TableDemo } from './Table'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { localStorageMethods } from '@/utils/localStorageMethods'
import { ConfirmDeleteModal } from './ConfirmModal'

const todos = [
  {
    isDone: true,
    description: "Do daily Leetcode",
  },
  {
    isDone: false,
    description: "Review the PR",
  },
  {
    isDone: true,
    description: "Write a blog post",
  },
]

type Todo = {
  isDone: boolean
  description: string
}

export default function Todo() {
  if (!localStorageMethods.getItem('todos')) {
    localStorageMethods.setItem('todos', JSON.stringify(todos))
  }
  const [tasks, setTasks] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number>()

  useEffect(() => {
    setTasks(JSON.parse(localStorageMethods.getItem('todos')!))
  }, [])

  const handleToggleStatus = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task
    })
    setTasks(newTasks)
    localStorageMethods.setItem('todos', JSON.stringify(newTasks))
  }

  const handleDelete = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
    localStorageMethods.setItem('todos', JSON.stringify(newTasks))
  }

  const handleAddTask = () => {
    const newTasks = [
      ...tasks,
      {
        isDone: false,
        description: input,
      },
    ]
    setTasks(newTasks)
    localStorageMethods.setItem('todos', JSON.stringify(newTasks))
    setInput('')
  }

  return (
    <Card className='p-4'>
      <div className='flex'>
        <Input placeholder='Enter task' value={input} onChange={(e) => setInput(e.target.value)} className='mr-5 w-[30%]'></Input>
        <Button onClick={handleAddTask} disabled={!input.trim()}>Add</Button>
      </div>

      <TableDemo data={tasks} handleToggleStatus={handleToggleStatus} setDeleteIndex={setDeleteIndex} setIsOpen={setIsOpen}></TableDemo>
      <ConfirmDeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteItem={() => {
          handleDelete(deleteIndex!)
          setIsOpen(false)
        }}
      ></ConfirmDeleteModal>
    </Card>
  )
}
