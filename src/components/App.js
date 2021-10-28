import React from 'react';
import Header from './Header';
import Order from './Oder';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';


class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    };
    addBurger = burger => {

        //1. Делаем копию обьекта state
        const burgers = { ...this.burgers };
        //2. Добавляем новый бургер в переменную burgers
        burgers[`burger${Date.now()}`] = burger;
        //3. Записать новый обьект burgers в state
        this.setState({ burgers })
    }

addToOrder = (key) => {
//1.  ДЕлаем копию обьекта state
const order = {...this.state.order}
//2 .Добавляем ключ к закзау со значением 1, либо обновить текущее значение 
order[key] = order[key] + 1 || 1
//3. записываем обновленое значение обьекта order в state 
this.setState({order})
}

    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }
    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger" />
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger
                             key={key}
                            index={key}
                            addToOrder= {this.addToOrder}
                            details = {this.state.burgers[key]}
                            />
                        }
                        )}

                    </ul>
                </div>
                <Order burgers ={this.state.burgers} order ={this.state.order} />
                <MenuAdmin
                    addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                />
            </div>
        );
    }
}

export default App;