'use client'
import Image from "next/image";
import Logo from "../../../assets/img/AfroLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { MdDiversity1 } from "react-icons/md";
import { TbWorldPlus } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FaRegEye  } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
export default function Header() {

    const[menuAtivado, setMenuAtivado] = useState(false);
    const[dark, setDark] = useState(false);

    function abrirMenu() {

        if (menuAtivado == false) {
            setMenuAtivado(true);
        }
        else {
            setMenuAtivado(false);
        }

    }

    function fecharMenu(){

        if (menuAtivado == false) {
            setMenuAtivado(false);
        }
        else {
            setMenuAtivado(false);
        }

    }{/*estrutura de condição para menu hamburguer*/}

    function trocarTema() {

        if (dark == false) {

            setDark(true);
        }

        else {

            setDark(false);
        }

    }{/*estrutura de condição para menu hamburguer*/}

    return(

        <>

            <RxHamburgerMenu onClick={abrirMenu}  className={`absolute z-10 hidden text-2xl text-black-bg mt-2 ml-2 cursor-pointer lg:flex ${menuAtivado? 'lg:hidden' : 'flex'}`}/> {/*Btn para abrir menu*/}
            
            <div className={`h-screen w-[500px] bg-white-facebook pt-2 duration-[0.2s] lg:ml-[-500px]`}>

                <div className="flex flex-col items-center justify-between gap-5 p-5 h-full ">

                    <Image src={Logo} className="w-[250px] max-w-full" draggable="false" loading="eager" alt="Logo do projeto"/> 

                    <div className="flex flex-col items-start">

                        <a className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsPeople className="text-2xl"/> 
                            <p className="text-2xl font-bold">Quem são</p>

                        </a> {/*Quem são*/}

                        <a href="#legislacao" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsBook className="text-2xl" /> 
                            <p className="text-2xl font-bold">Legislação</p>

                        </a> {/*Legislação*/}

                        <a href="#diversidade" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdDiversity1 className="text-2xl" />
                            <p className="text-2xl font-bold">Diversidade</p>

                        </a> {/*Diversidade*/}

                        <a href="#cultura" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <p className="text-2xl font-bold">Cultura</p>

                        </a> {/*Cultura*/}

                        <a href="#desafios" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdLightbulbOutline className="text-2xl" />
                            <p className="text-2xl font-bold">Desafios</p>

                        </a> {/*Desafios*/}

                        <a href="#acoes" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsMegaphone className="text-2xl" />
                            <p className="text-2xl font-bold">Ações</p>

                        </a> {/*Ações*/}

                        <a href="#educacao"className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdOutlineCastForEducation className="text-2xl" />
                            <p className="text-2xl font-bold">Educação</p>

                        </a> {/*Educação*/}

                        <a href="#parcerias" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <RiContactsLine className="text-2xl" />
                            <p className="text-2xl font-bold">Parcerias</p>

                        </a> {/*Parcerias*/}

                        <a href="#perspectivas" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <FaRegEye  className="text-2xl" />
                            <p className="text-2xl font-bold">Perspectivas</p>

                        </a> {/*Perspectivas*/}

                    </div> {/*Btns para navegação*/}

                    <div onClick={ trocarTema } className={`w-16 p-1 rounded-full cursor-pointer ${dark? 'bg-gray-text' : 'bg-black-bg'}`}>
                        <div onClick={trocarTema} className={`${dark ? "ml-[64%] bg-black-bg" : "bg-white"} w-5 h-5 rounded-full duration-[0.2s] cursor-pointer`}></div>
                    </div> {/*Btn para trocar tema*/}
                    
                </div>

            </div> {/*Header*/}

            <div onClick={fecharMenu} className={`absolute duration-[0.2s] lgMin:hidden ${menuAtivado ? "bg-white-facebook/60 backdrop-blur-sm w-screen h-screen" : "bg-white-facebook/0 backdrop-blur-0"}`}></div> {/*Fundo do header para telas menores*/}

            <div className={`hidden lg:flex fixed h-screen w-[250px] max-w-full bg-white-facebook duration-[0.2s] ${menuAtivado ? "ml-0" : "ml-[-400px]"}`}>

                <div className="flex flex-col items-center justify-between gap-5 p-5 h-full">

                    <Image src={Logo} className="max-w-full" draggable="false" loading="eager" alt="Logo do projeto"/> {/*Logo*/}

                    <div className="flex flex-col items-start">

                        <a href="#quemSao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsPeople className="text-2xl"/>
                            <p className="text-2xl font-bold">Quem são</p>

                        </a> {/*Quem são*/}

                        <a href="#legislacao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsBook className="text-2xl" />  
                            <p className="text-2xl font-bold">Legislação</p>

                        </a> {/*Legislação*/}

                        <a href="#diversidade" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdDiversity1 className="text-2xl" />
                            <p className="text-2xl font-bold">Diversidade</p>

                        </a> {/*Diversidade*/}

                        <a href="#cultura" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <p className="text-2xl font-bold">Cultura</p>

                        </a> {/*Cultura*/}

                        <a href="#desafios" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdLightbulbOutline className="text-2xl" />
                            <p className="text-2xl font-bold">Desafios</p>

                        </a> {/*Desafios*/}

                        <a href="#acoes" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsMegaphone className="text-2xl" />
                            <p className="text-2xl font-bold">Ações</p>

                        </a> {/*Ações*/}

                        <a href="#educacao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdOutlineCastForEducation className="text-2xl" /> 
                            <p className="text-2xl font-bold">Educação</p>

                        </a> {/*Educação*/}

                        <a href="#parcerias" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <RiContactsLine className="text-2xl" />
                            <p className="text-2xl font-bold">Parcerias</p>

                        </a> {/*Parcerias*/}

                        <div onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <FaRegEye  className="text-2xl" />
                            <a href="#perspectivas" className="text-2xl font-bold">Perspectivas</a>

                        </div> {/*Perspectivas*/}

                    </div> {/*Btns de paginação*/}

                    <div onClick={ trocarTema } className={` w-16 p-1 rounded-full cursor-pointer ${dark? 'bg-gray-text' : 'bg-black-bg'}`}>
                        <div onClick={trocarTema} className={`${dark ? "ml-[64%] bg-black-bg" : "bg-white"} w-5 h-5 rounded-full duration-[0.2s] cursor-pointer`}></div>
                    </div> {/*Btn para trocar tema*/}

                </div> 
                
            </div> {/*Header para telas menores*/}

        </>
    );
};
