import React, {useState, useEffect} from 'react'
// import list from "../list.json";//json data
import {Row, Col} from "react-bootstrap";
import Details from "./Details"
import axios from "axios";

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
const List = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const fetchList = async ()=> {
            const {data} = await axios.get("/api/list");
            console.log("myRes", data);
            setList(data);
        }
        fetchList();
    }, []);// you put [here] dependencies to handel side affects

    const listJsxed = list.map( (item, idx) => {
        return(
            <Col sm={12} md={6} lg={4} xl={3} key={idx}>
                <Details item={item} />
            </Col>
        )
    });
    return (
        <Row>
            {listJsxed}
        </Row>
    )
}

export default List
