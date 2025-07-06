import { useState, createContext } from "react"
import ComponentB from "./componentB"

export const userContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Nuru")

    return(
        <div className="componentContainer">
            <h1>Hi I'm COMPONENT A</h1>
            <userContext.Provider value={{user, setUser}}>
                <ComponentB />
            </userContext.Provider>
        </div>
    )
}
export default ComponentA