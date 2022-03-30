import React from 'react';
interface ListProps<T>{
    items: T[],
    renderItem:(item:T) => React.ReactNode
}

export function List<T>(props:ListProps<T>){
    return(
        <div className='list'>{props.items.length > 0 ?
            <div className='todo-items'>
                {props.items.map(props.renderItem)}
            </div> :
            <div className='clear'>no items in list</div>
        }
        </div>
    )
}