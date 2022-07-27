import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'   
import ItemsListContainer from '../ItemsListConteiner/ItemsListConteiner'
import ItemsDetailsContainer from '../ItemsDetailContainer/ItemsDetailContainer'
import NavBar from '../NavBar/Navbar'
import Cart from '../Cart/Cart'
import { Nosotros } from '../Pages/Nosotros/Nosotros'
import CartContextProvider from '../../Utils/CartContext/CartContext'
import LinearDeterminate from '../../Utils/Loading/Progress';
import { Footer } from '../Pages/Footer/Footer'
import { Page404 } from '../Pages/Pag404/Pag404'


export const AppRouting = () =>{
    const [loading, SetLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            SetLoading(false)
        }, 5000)
    }, [])

    return( 
        <BrowserRouter>
        <CartContextProvider>
            <header>
                <NavBar/>
            </header>
            {loading ? <LinearDeterminate/> :
            <><Routes>
                    <Route path="/" element={<ItemsListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemsListContainer />} />
                    <Route path="/item/:id" element={<ItemsDetailsContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/Nosotros" element={<Nosotros/>} />
                    <Route path="*" element={<Page404/>} />

                </Routes>
                <footer>
                    <Footer />
                </footer></>
            }
        </CartContextProvider>
        </BrowserRouter>
    ) 
} 