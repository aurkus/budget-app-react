import React from 'react'
import Item from './Item';

const ItemsList = ({items, deleteItem}) => {

    const incomes = items.filter( item => {return item.type === 'inc'});
    const expenses = items.filter( item => {return item.type === 'exp'});

    return (
        <div className="container clearfix">
            <div className="income">
                <h2 className="icome__title">Income</h2>        
                <div className="income__list">
                    {incomes.map(income =>{
                        return(
                            <Item item={income} deleteItem={deleteItem}/>
                        );
                    })}
                </div>
            </div>
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>        
                <div className="expenses__list">
                    {expenses.map(expense =>{
                            return(
                                <Item item={expense} deleteItem={deleteItem}/>
                            );
                        })}
                </div>
            </div>
            
        </div>
    )
}

export default ItemsList
