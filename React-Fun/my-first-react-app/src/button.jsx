
function Button(props){
    const style = {
        backgroundColor: 'aqua',
        padding: '1rem 3rem',
        border: 'none',
        borderRadius: '.5rem',
        color: 'black',
        cursor: 'pointer',
        margin: '1rem',
    }

    return(
        <button style={style} onClick={props.onClick}>{props.name}</button>
    );
}
export default Button