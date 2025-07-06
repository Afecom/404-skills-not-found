
function Counter(props){
    const style = {
        marginLeft: "18%",
        color: "aqua",
        fontSize: "5rem",
        fontFamily: "Arial, Sans-Serif"
    }

    return(
        <h1 style={style}>{props.value}</h1>
    );
}
export default Counter