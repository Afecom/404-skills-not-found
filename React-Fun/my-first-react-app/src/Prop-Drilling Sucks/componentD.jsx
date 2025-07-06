import { useContext } from "react"
import { userContext } from "./componentA"

function ComponentD(){
    const {user, setUser} = useContext(userContext)

    return(
        <div className="componentContainer">
            <h1>Hi I'm COMPONENT D</h1>
            <p>Yoo hello {user}</p>
        </div>
    )
}
export default ComponentD