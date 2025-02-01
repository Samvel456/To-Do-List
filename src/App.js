import './App.css';
import MainAction from "./components/mainAction/MainAction";
import List from "./components/list/List";
import {useState} from "react";
import {CiCircleRemove} from "react-icons/ci";
import {FaCheck} from "react-icons/fa";

function App() {

    const [content, setContent] = useState([
        {
            id: 1,
            name: 'Hit the gym',
            checked: false,
            Icon: CiCircleRemove,
            Check: FaCheck
        }, {
            id: 2,
            name: 'Pay bills',
            checked: true,
            Icon: CiCircleRemove,
            Check: FaCheck
        }, {
            id: 3,
            name: 'Meet George',
            checked: false,
            Icon: CiCircleRemove,
            Check: FaCheck
        }, {
            id: 4,
            name: 'Buy eggs',
            checked: false,
            Icon: CiCircleRemove,
            Check: FaCheck
        }, {
            id: 5,
            name: 'Read a book',
            checked: false,
            Icon: CiCircleRemove,
            Check: FaCheck
        }, {
            id: 6,
            name: 'Organize office',
            checked: false,
            Icon: CiCircleRemove,
            Check: FaCheck
        },
    ])
    return (
        <div className="App">
            <MainAction content={content} setContent={setContent}/>
            <List content={content} setContent={setContent}/>
        </div>
    );
}

export default App;
