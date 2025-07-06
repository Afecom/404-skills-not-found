import PropTypes, { shape } from "prop-types";

function List(props){
    const importedItems = props.items;
    importedItems.sort((a, b) => a.name.localeCompare (b.name))
    const mappedItems = importedItems.map(item => <li key={item.ID}>{item.name}: &nbsp;{item.calories}</li>)

    return(
        <>
            <h3>{props.category}</h3>
            {importedItems.length >= 1 ? <ol>{mappedItems}</ol> : null} 
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ID: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
}

List.defaultProps = {
    category: "category",
    items: [],
}
export default List