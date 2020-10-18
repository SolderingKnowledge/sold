// import React, {useState, useEffect} from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import list from "../list.json";//json data
import {Row, Col} from "react-bootstrap";
import Details from "./Details"
import axios from "axios";
import { getItems } from "../actions/itemsAction";
import Alert from "./Alert";
import Spinner from "./Spinner";

// class List extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             list: [],
//         }
//     }
//     componentWillMount(){
//         const fetchList = async () => {
//             const res = await axios.get("/api/list");
//             this.setState({list: res.data});
//         }
//         fetchList();
//     }
//     render(){
//         console.log(this.state.list);
//         const listJsxed = list.map( (item, idx) => {
//             return(
//                 <Col sm={12} md={6} lg={4} xl={3} key={idx}>
//                     <Details item={item} />
//                 </Col>
//             )
//         });
//         return (
//             <Row>
//                 {listJsxed}
//             </Row>
//         )
//     }
// }

// export default List

// Functional component
// const Items = () => {
//     const [list, setList] = useState([]);

//     useEffect(() => {
//         const fetchList = async ()=> {
//             const {data} = await axios.get("/api/items");
//             console.log("myRes", data);
//             setList(data);
//         }
//         fetchList();
//     }, []);// you put [here] dependencies to handel side affects

//     const listJsxed = list.map( (item, idx) => {
//         return(
//             <Col sm={12} md={6} lg={4} xl={3} key={idx}>
//                 <Details item={item} />
//             </Col>
//         )
//     });
//     return (
//         <Row>
//             {listJsxed}
//         </Row>
//     )
// }

// export default Items

const Items = (props) => {

    // dispatch
    const dispatch = useDispatch();

    // Getting from state
    const itemsState = useSelector( state => state.itemsState );
    const { loading, error, items } = itemsState;

    useEffect(() => {// looks like it is componentDidMount();
        dispatch(getItems());
    }, [dispatch]);// you put [here] dependencies to handel side affects

    // making sure do map only when items is available;
    let listJsxed = [];
    if(items){
        listJsxed = items.map( (item, idx) => {
            return(
                <Col sm={12} md={6} lg={4} xl={3} key={idx}>
                    <Details item={item} />
                </Col>
            )
        });
    }
    return (
        <Row>
            {   loading ? <Spinner /> : error ? <Alert variant="danger">{error}</Alert> : listJsxed }
        </Row>
    )
}

export default Items
