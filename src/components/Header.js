import React, {useState, useEffect} from 'react';



const Header = ({items}) => {

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const incomes = items.filter( item => {return item.type === 'inc'});
    const totalIncomes = incomes.reduce((acc, curr) => {
        return (acc += curr.amount);
    }, 0);
    const expenses = items.filter( item => {return item.type === 'exp'});
    const totalExpenses = expenses.reduce((acc, curr) => {
        return (acc += curr.amount);
    }, 0);



    useEffect(() => {
        var now, year, month, months;
        now = new Date();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = now.getMonth();
        year = now.getFullYear();
        setMonth(months[month]);
        setYear(year);
    }, [])



    return (
        <div className="budget">
        <div className="budget__title">
            Available Budget in <span className="budget__title--month">{month} : {year}</span>
        </div>
        
        <div className="budget__value"> {totalIncomes - totalExpenses}</div>
        
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">+ {totalIncomes}</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
        
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">- {totalExpenses}</div>
                <div className="budget__expenses--percentage">
                    { 
                        totalIncomes > 0 ? `% ${Math.round(100*(totalExpenses / totalIncomes))}` : "---"
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header
