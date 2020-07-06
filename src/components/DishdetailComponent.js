import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
   
    constructor(props){
        super(props);
       

    }
   
    renderDish(){
        
            return (
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt= {this.props.dish.name}/>
                    
                    <CardBody>
                        <CardTitle heading>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
               
    }

    renderComments({this.props.dish.comments}){
        return(
            <ul class="list-unstyled">


            </ul>
        );
    }

    render(){
        if(this.props.dish!=null){
    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                
            </div>

        </div>
    );
}
    else{
        return(
            <div></div>
        )
    }
}
}

export default Dishdetail;