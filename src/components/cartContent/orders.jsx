import bin from '../../assets/sidebar icons/bin.svg'
import {useContext} from 'react';
import {AppContext} from '../../context'

export default function Order() {
    const {orderItems, removeFromCart, orderQty, setQty, imageUrl} = useContext(AppContext)

  const orderItem = orderItems.map((data, index) => {
    const {
      dishName,
      discount,
      dishPrice } = data?.item?.data;
    const {url, imageKey} = data.item2
    const total = orderQty * dishPrice 
    console.log(orderItems)
    return (
      <aside key={index} className="flex justify-between items-center my-4">
        <div className="w-[85%]">
          <aside className="flex justify-between items-center w-11/12 mb-2">
            <img src={url} alt={dishName} className="w-12 rounded-circle mr-2"/>
            <span className="w-8/12 block">
              <p className="w-11/12 truncate font-medium">{dishName}</p>
              <small className="text-lighter-text">${dishPrice}</small>
             {discount ? <small className="bg-bg-icons p-1 ml-2 rounded-sm">{discount * 100}% off</small> : ""}
            </span>
            <input type="number" className="w-12 px-2 border border-line h-12 rounded-lg text-base flex justify-center items-center bg-bg-color text-center font-medium outline-none" min="1" placeholder={orderQty} value={orderQty} onChange={(e) => {
              setQty(item.id)
            }}/>
          </aside>
          <label htmlFor="order note" className="w-12/12">
            <input type="text" placeholder="Order Note..." className="w-11/12 h-12 p-3.5 outline-none rounded-lg text-white bg-bg-color my-2 border border-line text-base" />
          </label>
        </div>
        <aside className="flex justify-between items-center flex-col">
          <p className="font-medium pb-8">${total}</p>

          <span className="flex justify-center items-center w-12 h-12 border border-bg-icons rounded-lg" onClick={() => removeFromCart(index)}>
            <img src={bin} alt="bin" />
          </span>
        </aside>
      </aside>
    );
  });

  return(
    orderItems.length < 1 ? <p className="text-lg text-center my-9 animate-pulse"><b>No order has been placed</b></p> : <section>{orderItem}</section>
  );
}
