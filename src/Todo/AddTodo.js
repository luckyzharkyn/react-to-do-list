import React, {useState} from 'react'
import propTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
        
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue("")

    const [value, setValue] = useState("")

    function submitHandler(event) {
        event.preventDefault() 

        if (input.value().trim()){ 
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.prototypes = {
    onCreate: propTypes.func.isRequired
}

export default AddTodo