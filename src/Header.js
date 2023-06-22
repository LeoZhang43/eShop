import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";

function Header(){
    return(
        <div className="header">
            <div className="header_logo">
                <ShoppingBagIcon className="header_logoImage" fontSize="large"/>
                <h2 className='header_logoTitle'>eShop</h2>
            </div>
            <div className="header_search">
                <SearchIcon className='headerSeacrhIcon'/>
                <input type="text" className="header_searchInput" />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                <span className="itemLineOne">Hello Guest</span>
                <span className="itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                <span className="itemLineOne">Returns&</span>
                <span className="itemLineTwo">Orders</span>
                </div>
                <div className="nav_item">
                <AddShoppingCartIcon fontSize="large" className="shoppingCartIcon"/>
                <span className="shoppingBasketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header