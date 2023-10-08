import PropTypes from 'prop-types';
function Card({d}) {
    return ( 
        <>
        <div className=" w-72 md:w-96 p-3 my-3 rounded-md mx-auto bg-[#f2f2f19a]">
            <div>
                <img className=" rounded-lg my-2 w-full h-48" src={d.img} alt="Services" />
            </div>
            <h1 className=' text-2xl font-bold my-3'>{d.title}</h1>
            <button className=' bg-blue-500 text-white font-bold p-2 rounded-md'>Book & Details</button>
        </div>
        </>
     );
}
Card.propTypes = {
    d: PropTypes.object
}

export default Card;