import React, {useContext, useState} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon} from 'reactstrap';

import {v4} from 'uuid';
import {TodoContext} from '../context/TodoContext'
import {ADD_TODO} from '../context/action.type'

const TOdoForm = () => {

    const [todoString, setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext);

    // to fire the dispatch we have written this method
    // so whenever we click this add todo button this method gets fired
    const handleSubmit = event => {
        event.preventDefault();
        if (todoString === "") {
            return alert("Please enter A TODO")
        }

        const todo = {
            todoString,
            id: v4()
        }

        // this dispatch is big object we can pass multiple values in it
        dispatch({
            type : ADD_TODO,
            // what we want to send with this todo
            payload : todo
        })

        setTodoString("")
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add task Todo"
                value={todoString}
                onChange={event => setTodoString(event.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="outline-info"
                    autoFocus="true"
                    // onClick
                    >Add Task</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TOdoForm;