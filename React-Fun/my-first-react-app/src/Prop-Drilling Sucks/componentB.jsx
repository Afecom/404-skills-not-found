import ComponentC from "./componentC"

function ComponentB(){
    return(
        <div className="componentContainer">
            <h1>Hi I'm COMPONENT B</h1>
            <ComponentC />
        </div>
    )
}
export default ComponentB