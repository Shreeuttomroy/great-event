import Order from "./Order";

function Orders() {
    const getOrder = JSON.parse(localStorage.getItem("booked"));
    return ( 
        <>
        {
            getOrder?
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 justify-between">{getOrder.map((d)=> <Order key={d.id} d={d}></Order>)}</div>:
            <div className=" w-full h-[400px] flex justify-center"><p className=" self-center font-bold text-2xl">You haven`t booked any event!</p></div>
        }
        </>
     );
}

export default Orders;