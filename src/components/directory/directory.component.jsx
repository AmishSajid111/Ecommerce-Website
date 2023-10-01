import React, { Component } from "react";
 import {MenuItem} from'../../components/menu-items/menu-items.components'
 import '../directory/directory.styles.scss'

export class Directory extends Component
{
    constructor()
    {
        super();
        this.state=
        {
           
             sections : [
                {
                  title: 'hats',
           
                  imageUrl: 'https://i.ibb.co/HzPcCf6/racim-amr-OZ-HVu-VXGOY-unsplash.jpg',
                  
                  id: 1,
                  linkUrl: 'search/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/2t99HYB/amanda-vick-oh-Wf6-Yuz-OQk-unsplash.jpg',
                  
                  id: 2,
                  linkUrl: 'search/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/GnNRbD8/diego-jaramillo-W4sw-Ga-KFHVQ-unsplash.jpg',
                 
                  id: 3,
                  linkUrl: 'search/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/340BD2s/suhyeon-choi-G9-XMLUAj-ETM-unsplash.jpg',
                 
                  size: 'large',
                  id: 4,
                  linkUrl: 'search/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/SwzL3Jv/rodrigo-summer-Jm5-Ca-KIvcw-unsplash.jpg',
           
                  size: 'large',
                  id: 5,
                  linkUrl: 'search/mens'
                }
              ]
        }
    }

    render(){
        return(
        <div className="directory-menu">
           {this.state.sections.map(section=>(
                <MenuItem title={section.title} key={section.id} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
            )
            )
        }
        </div>
        )
    }
    
}