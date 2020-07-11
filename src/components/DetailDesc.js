import React, {Component} from 'react';
;


class DetailDish extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const dish = this.props.selectedDish.map((i)=>{
                return(console.log(i));
        });
            
        return(
            <div ></div>

        );
    }
}

export default DetailDish;