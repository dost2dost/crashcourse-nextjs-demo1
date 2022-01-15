import styleHeader from '../styles/Header.module.css'
import Head from 'next/head'

export default function Header() {
    return (
        <>
            <Head>
            <title className='title'>My ok now  title test</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" ></link>

                
            </Head>  
            <div>
                <h1 className='title'>
                 web div   <span>news</span>
                </h1>
                <style jsx>

                    {`
                    .title{
                        color:red
                    }
                    `}
                </style>
            </div>
        </>
    )
}
