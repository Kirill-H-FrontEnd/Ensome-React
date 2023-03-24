import React, { useRef } from "react";
interface TodoProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (ref.current!.value !== '') {
            if (e.key === 'Enter') {
                props.onAdd(ref.current!.value)
                ref.current!.value = ''
            }
        }
    }

    return (
        <>
            <div className="Todo-form">
                <input
                    name="text"
                    ref={ref}
                    onKeyPress={keyPressHandler}
                    type="text"
                    placeholder="Add new task" />
            </div>
        </>
    )
}
