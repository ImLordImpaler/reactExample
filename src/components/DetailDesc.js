import React, {Component} from 'react';



class DetailDish extends Component {
    
    render(){
        const name = this.props.selectedDish1.comments.map((i) =>{
            return(
                    <div className='container'>
                        <p>{i.author}</p>
                    </div>
            );
        });

        return(
            <div> {name} </div>
        );
    }
}

export default DetailDish;