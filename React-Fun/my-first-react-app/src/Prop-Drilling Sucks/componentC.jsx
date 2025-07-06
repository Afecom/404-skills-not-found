import ComponentD from "./componentD"

function ComponentC(){
    return(
        <div className="componentContainer">
            <h1>Hi I'm COMPONENT C</h1>
            <ComponentD />
        </div>
    )
}
export default ComponentC