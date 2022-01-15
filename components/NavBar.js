import React from 'react'
import Link from 'next/link'
import NaveStyle from '../styles/Nave.module.css'
export default function NavBar() {
    return (
 
      <nav className={NaveStyle.nav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li><Link href='/about'>About</Link></li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
  

    )
}
