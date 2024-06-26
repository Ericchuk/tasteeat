import { useContext } from "react";
import { AppContext } from "../../context";

export default function OrderInNotification() {
  const { notificationOrder,removeCart, notificationFilter, orderFromDb } = useContext(AppContext); 
  console.log(orderFromDb)
  const list = orderFromDb.map((data, index) => {
    const {displayName, 
      photoURL} = data?.data?.usera
    
      const {dishName } = data?.data?.orderItems[index]?.item?.data

      const { total } = data?.data
    return (
      <ul key={index}>
        {status && notificationFilter === "sent out" && out == "true" || status && notificationFilter === "Completed" && out === "true"  ? <li className="flex justify-between items-center px-5 py-2 my-2">
          {removeCart ? <div className="flex flex-col justify-start items-center w-[142px]">
            <img src={
photoURL} alt={displayName} className="mr-4 rounded-full"/>
            <p className="text-sm text-lighter-text font-normal">{displayName}</p>
          </div> : <h3 className="font-semibold text-xl ">{displayName}</h3>}
          <p className={`text-lighter-text capitalize text-sm ${removeCart ? "w-[137px]" : "w-auto"}`}>{}</p>
          <p className="text-lighter-text text-sm pr-20">${`${removeCart ? total : total}`}</p>
          {status === true && out === "true" ?  <p className={`capitalize px-3 py-1 text-[#50D1AA] bg-[#6be2be72] w-40 h-8 flex justify-center items-center rounded-[30px]  ${removeCart ?"mr-0" : 'mr-10' }`}>completed</p> : status === true && out === "false" ? <p className={`capitalize text-[#FFB572] bg-[#eb956aab] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>preparing</p> : <p className={`capitalize text-[#9290FE] bg-[#9290fe71] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>Pending</p>}
        </li> : 
         notificationFilter === "Filter options" || notificationFilter === "Filter Order"   ? <li className="flex justify-between items-center px-5 py-2 my-2">
        {removeCart ? <div className="flex flex-col justify-start items-center w-[142px]">
        <img src={
photoURL} alt={displayName} className="mr-4 rounded-full h-[40px] mb-2"/>
          <p className="text-sm text-lighter-text font-normal">{displayName}</p>
        </div> : <h3 className="font-semibold text-xl ">{displayName}</h3>}
        <p className={`text-lighter-text capitalize text-sm ${removeCart ? "w-[137px]" : "w-auto"}`}>{dishName}</p>
        <p className="text-lighter-text text-sm pr-20">${`${removeCart ? total : total}`}</p>
        {status === true && out === "true" ?  <p className={`capitalize px-3 py-1 text-[#50D1AA] bg-[#6be2be72] w-40 h-8 flex justify-center items-center rounded-[30px]  ${removeCart ?"mr-0" : 'mr-10' }`}>completed</p> : status === true && out === "false" ? <p className={`capitalize text-[#FFB572] bg-[#eb956aab] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>preparing</p> : <p className={`capitalize text-[#9290FE] bg-[#9290fe71] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>Pending</p>}
      </li> : 
      status && notificationFilter === "Preparing" && out === "false"  ? <li className="flex justify-between items-center px-5 py-2 my-2">
      {removeCart ? <div className="flex flex-col justify-start items-center w-[142px]">
      <img src={
photoURL} alt={displayName} className="mr-4 rounded-full"/>
        <p className="text-sm text-lighter-text font-normal">{displayName}</p>
      </div> : <h3 className="font-semibold text-xl ">{item.customer}</h3>}
      <p className={`text-lighter-text capitalize text-sm ${removeCart ? "w-[137px]" : "w-auto"}`}>{item.menu}</p>
      <p className="text-lighter-text text-sm pr-20">${`${removeCart ? total : total}`}</p>
      {item.status === true && item.out === "true" ?  <p className={`capitalize px-3 py-1 text-[#50D1AA] bg-[#6be2be72] w-40 h-8 flex justify-center items-center rounded-[30px]  ${removeCart ?"mr-0" : 'mr-10' }`}>completed</p> : item.status === true && item.out === "false" ? <p className={`capitalize text-[#FFB572] bg-[#eb956aab] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>preparing</p> : <p className={`capitalize text-[#9290FE] bg-[#9290fe71] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>Pending</p>}
    </li> : ""}
      </ul>
    );
  });
  return <section>{list}</section>;
}
