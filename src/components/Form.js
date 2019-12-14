import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

const Form = ({
    onSubmit,
    type,
    updateType,
    description,
    updateDescription,
    amount,
    updateAmount
}) => {
    return (
        <div className="add">
                <div className="add__container">
                    <form onSubmit={onSubmit}>
                        <select className="add__type" name="type" value={type} onChange={updateType}>
                            <option value="inc">+</option>
                            <option value="exp">-</option>
                        </select>
                        <input type="text" className="add__description" placeholder="Add description" name="description" value={description} onChange={updateDescription}/>
                        <input type="number" className="add__value" placeholder="Value" name="amount" value={amount} onChange={updateAmount}/>
                        <button type="submit" className="add__btn"><MdAddCircleOutline /></button>
                    </form>
                </div>
            </div>
    )
}

export default Form
