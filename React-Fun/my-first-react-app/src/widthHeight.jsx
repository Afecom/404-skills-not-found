import { useState, useEffect } from "react"

function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", sizeChangeHandler);

        return () => {
            window.removeEventListener("resize", sizeChangeHandler)
        }
    }, [])

    useEffect(() => {
        document.title = `${width} x ${height}`
    }, [width])

    function sizeChangeHandler(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div>
            <h1>Width: {width}</h1>
            <h1>Height: {height}</h1>
        </div>
    );

}
export default MyComponent