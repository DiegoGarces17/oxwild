const path = require('path');

exports.createPages = async ({graphql, actions}) =>{
    const result = await graphql(`
    {
        allPrendasJson {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
  
    result.data.allPrendasJson.edges.forEach(element=>{     
        const {node} = element;
        actions.createPage(
            {
                path: node.slug,
                component: path.resolve('./templates/prendas.js'),
                context: {
                    slug: node.slug
                }
            }
        )
        
    })

}
