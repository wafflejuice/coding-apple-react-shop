import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './../store/cartSlice'

function Cart() {
    let cart = useSelector((state) => { return state.cart })
    let dispatch = useDispatch()

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>product name</th>
                        <th>product count</th>
                        <th>change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.count}</td>
                                    <td>
                                        <button onClick={() => { dispatch(increase(e.id)) }}>+</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Cart