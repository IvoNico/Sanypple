import {BrowserRouter, Routes, Route} from 'react-router-dom'   
import ItemsListContainer from '../ItemsListConteiner/ItemsListConteiner'
import ItemsDetailsContainer from '../ItemsDetailContainer/ItemsDetailContainer'
import NavBar from '../NavBar/Navbar'
import Cart from '../Cart/Cart'
import CartContextProvider from '../../Utils/CartContext/CartContext'


export const AppRouting = () =>{
    return <BrowserRouter>
        <CartContextProvider>
            <header>
                <NavBar/>
            </header>
            <Routes>
                <Route path="/" element={<ItemsListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemsListContainer/>}/>
                <Route path="/item/:id" element={<ItemsDetailsContainer/>}/>
                <Route path="/cart" element={<Cart/> }/>
            </Routes>
        </CartContextProvider>
        </BrowserRouter>
} 