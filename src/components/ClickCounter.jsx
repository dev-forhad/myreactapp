import withCounter from "./HOC/withCounter";

const ClickCounter = (props) =>{
    const {count, incrementCount} = props;
    return (
        <div>
            <button  onClick={incrementCount} >
                You clicked {count} times.
            </button>
        </div>
    )

}

export default withCounter(ClickCounter);