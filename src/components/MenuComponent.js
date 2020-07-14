import React , {Component} from 'react'
import {Media} from 'reactstrap';

import DetailDish from './DetailDesc'

class Menu extends Component{

    constructor(props){
        super();

        this.state={
            selectedDish : null , 
            
            
        }
    }

    selectDish(i){
        this.setState(
            {
                selectedDish: i
               
            });
            console.log(i)
    }
 
    
    render(){
        const dishes = this.props.dishe1.map((i) =>{
                return(
                        <div className='container'>
                            <Media key={i.id}>
                            <Media tag="li"  onClick={()=>   this.selectDish(i)}>
                                
                                <Media left href="#">

                                    <Media className ='mediaImg'object src={i.image} alt={i.name} />

                                </Media>
                                <Media body>
                                <Media heading>
                                        {i.name}
                                </Media>
                                <p>{i.price}</p> 
                                    
                                </Media>
                            </Media>
                            </Media>
                        </div>
            );
        });
        return(
            <div className='container'>
                <Media list>
                       {dishes}
                </Media>
                <div className='row'>
                    <DetailDish selectedDish1 = {this.state.selectedDish} />
                </div>
                 
            </div>
           
        );
    }
}

export default Menu;