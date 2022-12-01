import React, {useState} from "react";
import ButtonRefresh from "./buttonRefresh";
import ButtonDelete from "./buttonDelete";
import Counter from "./counter";
import Navbar from "./navbar";
import TotalPrice from "./totalPrice";


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Cheese", price: 11},
        {id: 2, value: 0, name: "Bread", price: 3.5},
        {id: 3, value: 0, name: "Milk", price: 1.3},
        {id: 4, value: 0, name: "Coffee", price: 3},
        {id: 1, value: 0, name: "Bananas", price: 2.6},
        ];

    const [counters, setCounters ] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters)
    }
    
    const handleIncrement = (id) => {
        const countInc = counters.map((count) => {
            if(id === count.id){
                count.value += 1;
            }
            return count;
        })
        setCounters(countInc);
    }

    const handleDecrement = (id) => {
        const countDec = counters.map((count) => {
            if(id === count.id && count.value > 0){
                count.value -= 1;
            }
            return count;
        })
        setCounters(countDec);
    }


    return <>
        <div className="d-inline-flex flex-column align-content-start w-50 m-4">
            {<Navbar counters={counters}/>}
            <div>
                {counters.map((count) => (
                    <Counter key={count.id} {...count} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
                ))}
                <div className="d-flex justify-content-between w-75">
                    <div className="d-flex">
                        {<ButtonDelete setCounters={setCounters}/>} 
                        {<ButtonRefresh initialState={initialState} setCounters={setCounters}/>} 
                    </div> 
                    <div>
                        {<TotalPrice counters={counters}/>}
                    </div> 
                </div>
            </div>
        </div>

    </>
}

export default CountersList;