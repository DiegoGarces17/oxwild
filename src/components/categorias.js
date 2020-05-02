import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


export default (props) =>{
    const data = useStaticQuery(graphql`
    {
        allPrendasJson{
            edges{
                 node{
                     slug
                    title
                     description
                  }
             }
        }

    }
    `);


    return(
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Oxwild</span>
                </div>
                
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    {
                        data.allPrendasJson.edges.map((element,index)=>{
                            const{ node } = element;
                            return(
                                <a href={node.slug} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                {node.title}
                                </a>
                            )

                        })
                    }
                    </div>
                </div>
            </nav>
       );

}
