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
        <div className="d-flex align-content-center justify-content-center w-75">
            <p className="flex-grow-1 align-self-center bd-highlight mb-0 ms-2 fs-4 w-25">{props.name}</p>
            <div className="justify-content-center align-self-center w-25">
                <p className={getBadgeClasses() + " align-self-center"}>{formatValue()}</p>
            </div>
            <div className="btn-group btn-block btn-sm m-2">
                <button className="btn btn-primary" aria-current="page" onClick={()=>props.onIncrement(props.id)}>+</button>
                <button className="btn btn-primary" onClick={()=>props.onDecrement(props.id)}>-</button>
            </div>
            <div className="align-self-center">
            <button className="btn btn-secondary m-2" onClick={()=>props.onDelete(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </button>
            </div>
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