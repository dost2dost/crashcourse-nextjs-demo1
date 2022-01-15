import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import styleNave from '../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            
        <div>
         
          <div className={styleNave.container}>
                <main className={styleNave.main}>
                    {children}
              </main>
          </div>
           
        </div>
        </>
    )
}

