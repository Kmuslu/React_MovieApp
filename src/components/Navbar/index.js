import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
           <Link to="/"> HOME </Link> 
           <Link to="/"> FAVORITES </Link> 
           <Link to="/"> TOP RATED </Link> 
        </div>
    )
}