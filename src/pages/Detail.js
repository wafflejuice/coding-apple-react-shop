import { useParams } from "react-router-dom";

function Detail(props) {
    let { id } = useParams();
    let shoe = props.shoesList.find((shoes) => shoes.id == id)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`${process.env.PUBLIC_URL}/img/shoes${id}.jpg`} width='100%'></img>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <button className="btn btn-danger">order</button>
                </div>
            </div>
        </div>
    );
}

export default Detail