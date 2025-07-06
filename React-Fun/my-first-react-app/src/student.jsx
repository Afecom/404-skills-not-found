import propTypes from 'prop-types';

function Students(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.proptypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

Students.defaultprops = {
    name: "Seya",
    age: 21,
    isStudent: true,
}

export default Students