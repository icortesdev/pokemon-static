import { createSignal } from 'solid-js'

const Counter = () => {

    const [counter, setCounter] = createSignal(10)



    return (
        <>
            <h1>Counter</h1>
            <h3>Value: {counter()} </h3>

            <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-4' onClick={() => setCounter(counter() + 1)}>+1</button> 
            <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md' onClick={() => setCounter(counter() - 1)}>-1</button>
        </>
    )
}

export default Counter
