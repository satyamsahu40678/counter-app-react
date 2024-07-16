import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({ by, increamentMethod, decrementMethod}) {
    //[0,f]
    // const [count, setCount] = useState(0);

    // console.log(by);
    // function increamentCounter() {

    //     // setCount(count + by);
    //     increamentMethod(by);
    //     // console.log('Increment Clicked', count);
    // }

    // function decrementCounter() {
    //     // setCount(count - by);
    //     decrementMethod(by);
    //     // console.log('Decrement Clicked', count);
    // }

    // const buttonStyle = {
    //     fontSize: "16px",
    //     backgroundColor: "#00a5ab",
    //     width: "100px",
    //     margin: "10px",
    //     color: "white",
    //     padding: "15px",
    //     borderRadius: "5px",
    // }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" onClick={() => increamentMethod(by)}
                // style = {buttonStyle}
                >+{by}</button>
                <button className="counterButton" onClick={() => decrementMethod(by)}>-{by}</button>
            </div>

        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number,
}
CounterButton.defaultProps = {
    by: 1,
}