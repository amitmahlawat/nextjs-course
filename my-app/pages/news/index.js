import Link from "next/link";
import { Fragment } from "react";

const NewsPage=()=>{


    return (
        
        <Fragment>
            <h1>the news page</h1>
            <ul>
            <li><Link href={'/news/1'}>Yash</Link></li>
            <li><Link href={'/news/2'}>Vaibhav</Link></li>
            <li><Link href={'/news/3'}>Suresh</Link></li>
            
            </ul>
        </Fragment>
    )
} 

export default NewsPage;