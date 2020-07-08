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

    renderComments(comments){
       
        if(comments!=null){
       
       const comm =    comments.map((comment) => 
            
       <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} {new Intl.DateTimeFormat('en-US',{year:numeric, month:'short', day:'2-digit'}).format(new Date (Date.parse {comment.date}))</p>
        </li>);
       
       return (
                <div>
                                  
              <ul className="list-unstyled">
                
                {comm}

               </ul>
               </div>);
          }
        
         
       
        else{
            return(
                <div></div>
            )
        }      
    }

    render(){
        if(this.props.dish!=null){
    return(
        <div className="container">
        <div className="row">
            
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}                
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(this.props.dish.comments)}
            </div>
           
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