import { createSignal, type JSXElement } from 'solid-js'

interface Props {
    initValue?: number
    children?: JSXElement;
}

const Counter = (props: Props) => {

    const [counter, setCounter] = createSignal(props.initValue || 0)



    return (


        <>
            {/* <h1 class='text-4xl font-bold'>Counter</h1> */}
            {props.children}
            <h3 class='text-xl'>Value: {counter()} </h3>

            <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-4' onClick={() => setCounter(counter() + 1)}>+1</button>
            <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md' onClick={() => setCounter(counter() - 1)}>-1</button>
        </>
    )
}

export default Counter
