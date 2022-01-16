import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav>
           <h3 className='text-4xl'>Kino</h3>
           <ul>
               <li>
                   <Link href='/'><a>Home</a></Link>
               </li>
               <li>
                   <Link href='/about'><a>About</a></Link>
               </li>
               <li>
                   <Link href='/dashboard'><a>Dashboard</a></Link>
               </li>
           </ul>
        </nav>
    );
};

export default Header;