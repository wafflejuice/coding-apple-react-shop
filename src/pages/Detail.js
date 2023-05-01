import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    let [discountBannerVisible, setDiscountBannerVisible] = useState(true);

    let [count, setCount] = useState(0);
    let [userInput, setUserInput] = useState('');

    useEffect(() => {
        setTimeout(() => { setDiscountBannerVisible(false) }, 2000);
    }, [])

    useEffect(() => {
        if (isNaN(userInput)) {
            alert('not integer');
        }
    }, [userInput])

    let { id } = useParams();
    let shoe = props.shoesList.find((shoes) => shoes.id == id)

    return (
        <div className="container">
            {
                discountBannerVisible ?
                    <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div> : null
            }

            <input onChange={(e) => {
                setUserInput(e.target.value)
            }}></input>

            <button onClick={() => { setCount(count + 1) }}>button</button>
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