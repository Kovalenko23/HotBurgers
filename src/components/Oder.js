import React from 'react'

class Order extends React.Component {

    renderOrder = (key) => {
        const burger = this.props.burgers[key];
        const count = this.props.order[key];

        const isAvailable = burger && burger.status === 'available';

        if (!isAvailable) {
            return (

                <li className='unavailable' key={key}>
                    Извините, {burger ? burger.name : 'бургер'} временно недоступен
                </li>

            );
        }
        return <li key={key}>
            <span>
                {count}</span>
            шт. {burger.name}
            <span> {count * burger.price}₴</span>
            <button className='cancellItem'>&times;</button>
        </li>
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];
            const isAvailable = burger && burger.status === 'available';
            if (isAvailable) {
                return prevTotal + burger.price * count;
            }
            return prevTotal;
        }, 0);
        return (
            < div className='order-wrap'>
                <h2>Ваш заказ</h2>
                <ul className='order'> {orderIds.map(this.renderOrder)}</ul>

                <div className='total'>
                    <div className='total_wrap'>
                        <div className='total_wrap-final'>
                            Итого: {total}₴
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;