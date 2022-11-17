import React from "react"

const Counter = (props) => {
    const {value} = props;

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    }

    const getBadgeClasses = () => {
        let classes = "badge p-2 m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btm-sm m-2" onClick={()=>props.onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btm-sm m-2" onClick={()=>props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btm-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
        </div>
    )
};

export default Counter;




// хук useState() - асинхронный; инструмент для хранения и обновления данных в "хранилище"; 
// возвращает кортеж(массив, в кот строгая последовательность элементов): 
// [value, setValue] = value - состояние; setvalue - функция, которая обновляет состояние

// props - некий объект, в который мы можем передавать атрибуты и эти атрибуты будут свойствами данного компонента; доступ только для чтения, не изменяются
// state - включает данные, которые локальные/частные для этого компонента; другие компоненты не могут получить доступ к этому состоянию - полностью изолированные данные
// ПРАВИЛО: компонент, которому принадлежит часть состояний, должен быть тем, что его модифицирует!