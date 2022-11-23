import React, {useState} from "react";
import ButtonRefresh from "./buttonRefresh";
import ButtonDelete from "./buttonDelete";
import Counter from "./counter";
import Navbar from "./navbar";


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь"},
        {id: 1, value: 0, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},
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
              <div className="d-flex">
                    {<ButtonDelete setCounters={setCounters}/>} 
                    {<ButtonRefresh initialState={initialState} setCounters={setCounters}/>} 
                </div>  
                   
            </div>
        </div>

    </>
}

export default CountersList;