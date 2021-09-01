import './developer.css';
const Developer = (props) => {
    return(
        <div className='developer'>
            <div>Dev: {props.name}</div>
            <div className='midle'>Idade: {props.age}</div>
            <div>País: {props.country}</div>
        </div>
    ) 
}


export default Developer;