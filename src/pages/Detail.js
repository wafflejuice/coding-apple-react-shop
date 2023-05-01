import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Detail(props) {
    let [discountBannerVisible, setDiscountBannerVisible] = useState(true);

    let [count, setCount] = useState(0);
    let [userInput, setUserInput] = useState('');

    let [tab, setTab] = useState(0);

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

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">button0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">button1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">button2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {
    let tabContents = [<div>content0</div>, <div>content1</div>, <div>content2</div>]
    return tabContents[tab]
}

export default Detail