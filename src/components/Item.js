import React from 'react';
import { MdDelete } from "react-icons/md";

const Item = ({item:{id, type, description, amount}, deleteItem}) => {

    return (
            <div className="item clearfix" key={id}>
                <div className="item__description">{description}</div>
                <div className="right clearfix">
                    <div className="item__value">${amount}</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => deleteItem(id)}>
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Item;
