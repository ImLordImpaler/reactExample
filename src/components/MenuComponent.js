import React , {Component} from 'react'
import {Media} from 'reactstrap';

import DetailDish from './DetailDesc'

class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            selectedDish : null
            
        }
    }

     selectDish(i){
        this.setState({selectedDish: i});
    }
    //renderDish(i){
    //    if (i == null){
    //            return (
    //                <div></div>
    //            )
    //    }
    //    else {
    //        return(
    //        <Media>
    //            <Media left href="#">
    //                <Media object src={i.image} alt={i.name} />
    //            </Media>
    //            <Media body>
    //                <Media heading>
    //                    {i.name}
    //                </Media>
    //                    {i.description}
    //            </Media>
    //        </Media>);
    //    }
    //}
    
    render(){
        const dishes = this.props.dishes.map((i) =>{
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

                <DetailDish/>
                
            </div>
           
        );
    }
}

export default Menu;