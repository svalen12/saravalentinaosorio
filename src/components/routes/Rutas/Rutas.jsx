import { Routes, Route } from "react-router-dom"

import {Home} from "../../pages/Home/Home"
import {Historia} from "../../pages/Historia/historia"
import {Introduccion} from "../../pages/Introduccion/Introduccion"
import {Experiencia} from "../../pages/Experiencia/Experiencia"

import { Menu } from "../../common/Menu/Menu"


export function Rutas(){
    return(
        <>
        <Menu></Menu>
        
        <Routes>
             <Route path='/' element={<Introduccion/>}></Route>
            <Route path='/inicio' element={<Home/>}> </Route>
            <Route path='/proyectos' element={<Historia/>}></Route>
            <Route path='/saraosorio' element={<Introduccion/>}></Route>
            <Route path='/experiencia' element={<Experiencia/>}></Route>
        </Routes>
        </>
    )
}