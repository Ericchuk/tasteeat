import filter from '../../assets/sidebar icons/filter.svg';
import { useContext } from 'react';
import { AppContext } from '../../context';

export default function NotificationHead({headText,option1,option2,option3}){
    const { removeCart } = useContext(AppContext)
    return(
        <section className="flex justify-between items-center px-5">
            <h3 className="font-bold text-xl text-white capitalize">{headText}</h3>
            <label className="relative flex justify-start items-center">
                <img src={filter} alt="filter" className="absolute left-3" />
                <select className={`border border-line bg-sidebar text-white ${removeCart ? 'w-48' : " w-36"}  h-11 justify-start items-center appearance-none pl-10 px-3.5 rounded-lg`}>
                    <option value={option1}>{option1}</option>
                    <option value={option2}>{option2}</option>
                    <option value={option3}>{option3}</option>
                </select>
            </label>
        </section>
    )
}