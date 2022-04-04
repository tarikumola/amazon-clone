import React from 'react'
// import { Link } from 'react-router-dom';
function Foot({lists}) {
    return (
        
    <li className='footLink'>
        {/* <Link to="#"> {lists} </Link> */}
        <a href="#"> {lists} </a>
    </li>
    );
}

export default Foot;