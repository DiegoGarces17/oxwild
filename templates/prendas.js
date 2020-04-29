import React from "react"
import { graphql } from 'gatsby' 
import ilustracion from "../src/imgs/primer-camisa.jpg"
import equisd from "../src/imgs/x.png"
export default (props) => {
    const pageData = props.data.prendasJson
    
    return(
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto flex">
                    <img className="h-32 w-32 flex-shrink-0" src={equisd} alt="primera prenda"></img>  
                    <h1 className="capitalize text-6xl font-bold">{pageData.title}</h1>
                </div>
            </header>
            <div className="container">
                <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                        <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                            Store
                        </a>
                        <div class="flex items-center" id="store-nav-content">
                            <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                                <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                            </a>

                            <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                                <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
                <ul className="prendas-list">
                    {
                pageData.items.map((item, index)=>(
                    <li className="bg-white shadow items-center" key={index}>
                        <div class="w-10/12 overflow-x-hidden mx-auto p-4 mb-4">
                            <a  href="#">
                                <img className="hover:grow hover:shadow-lg max-w-md mx-auto" src={ilustracion}></img>
                                                            
                                <div className="pt-3 flex items-center justify-between">
                                    <p className="">{item.nombreprenda}</p>
                                    <p className="">Tallas: {item.tallas}</p>    
                                    <p class="pt-1 text-gray-900">${item.precio }</p>
                                    <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg> 
                                </div>
                                

                            </a>
                        </div>
                    </li>                     
                ))
                    }
                </ul>
            </div>
        </div>
    )
}

export const query =  graphql`
    query($slug: String){
        prendasJson(slug: {eq: $slug}) {
            title
            description
            items{
                nombreprenda
                tallas
                precio
            }
        }
    }
`