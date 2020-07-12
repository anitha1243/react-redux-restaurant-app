import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {

    console.log('Dishdetail Compo render is invoked');
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );

}

function RenderComments({ comments }) {

    if (comments != null) {

        const comm = comments.map((comment) =>

            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </li>);

        return (
            <div>

                <ul className="list-unstyled">

                    {comm}

                </ul>
            </div>);
    }



    else {
        return (
            <div></div>
        )
    }
}

const DishDetail  = (props) =>  {


    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                    <div className="row">

                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments={props.comments} />
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



export default DishDetail;