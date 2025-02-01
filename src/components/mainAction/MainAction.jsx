import {CiCircleRemove} from "react-icons/ci";
import {FaCheck} from "react-icons/fa";
import {useState} from "react";

export default function MainAction({content, setContent}) {

    const handleKeyPress = (event) => {
        let c = 0
        let t = false
        if (event.key === 'Enter') {
            let inp2 = document.querySelector('.inp2')
            if (inp2.value !== ' ' && inp2.value !== '  ') {
                for (let i = 0; i < content.length; i++) {
                    if (content[i].name === inp2.value) {
                        alert('You can not write the same thing')
                        break
                    } else if (content.length - 1 === i) {
                        t = true
                        break
                    } else if (inp2.value !== ' ') {
                        c = 0
                        console.log(c, '4')
                    }
                }
                if (t) {
                    console.log(inp2.value)
                    for (let i = 0; i < inp2.value.length; i++) {
                        if (c === 2) {
                            console.log(c, '1')
                            break
                        } else if (inp2.value[i] === ' ') {
                            console.log(c, '2')
                            c++
                            console.log(c, '3')
                        } else if (inp2.value.length - 1 === i) {
                            setContent([...content, {
                                id: Math.random(),
                                name: document.querySelector('.inp2').value,
                                checked: false,
                                Icon: CiCircleRemove,
                                Check: FaCheck
                            },]);
                            break
                        } else if (inp2.value[i] !== ' ') {
                            c = 0
                            console.log(c, '4')
                        }
                    }
                }
            } else if (inp2.value === '') {
                alert('You must write smth')
            }
            document.querySelector('.inp2').value = ''
        }

    }

    function addBtn() {

        let inp3 = document.querySelector('.inp2')
        if (inp3.value !== ' ' && inp3.value !== '  ') {
            for (let i = 0; i < content.length; i++) {
                if (content[i].name === inp3.value) {
                    alert('You can not write the same thing')
                    break
                } else if (content.length - 1 === i) {
                    setContent([...content, {
                        id: Math.random(),
                        name: document.querySelector('.inp3').value,
                        checked: false,
                        Icon: CiCircleRemove,
                        Check: FaCheck
                    },]);
                    break

                }
            }

        } else if (inp3.value === '') {
            alert('You must write smth')
        }
        document.querySelector('.inp2').value = ''

    }

    const [sortT, setSortT] = useState(false)

    function SortMe() {
        setSortT(!sortT)

    }


    const [a_zT, setA_zT] = useState(false)

    function sortA_Z() {
        if (!a_zT) {
            content.sort(function (a, b) {
                if (a.name > b.name) {
                    return +1
                } else if (a.name < b.name) {
                    return -1
                }
            })
        } else {
            content.sort(function (b, a) {
                if (a.name > b.name) {
                    return +1
                } else if (a.name < b.name) {
                    return -1
                }
            })
        }

        setContent([...content])
        setA_zT(!a_zT)
    }

    const [lengthSort, setLengthSort] = useState(false)

    function sortLength() {
        for (let i = 0; i < content.length; i++) {
            for (let j = 0; j < content.length; j++) {
                if (!lengthSort) {
                    if (content[i].name.length > content[j].name.length) {
                        let r = content[i]
                        content[i] = content[j]
                        content[j] = r
                    }
                } else {
                    if (content[i].name.length < content[j].name.length) {
                        let r = content[i]
                        content[i] = content[j]
                        content[j] = r
                    }
                }
            }

        }
        setContent([...content])
        setLengthSort(!lengthSort)
    }

    const [doneSort, setDoneSort] = useState(false)

    function SortDone() {
        let newContent = []
        if (!doneSort) {
            for (let i = 0; i < content.length; i++) {
                if (content[i].checked === true) {
                    newContent.push(content[i])
                }
            }
            for (let i = 0; i < content.length; i++) {
                if (content[i].checked === false) {
                    newContent.push(content[i])
                }
            }
        } else {
            for (let i = 0; i < content.length; i++) {
                if (content[i].checked === false) {
                    newContent.push(content[i])
                }
            }
            for (let i = 0; i < content.length; i++) {
                if (content[i].checked === true) {
                    newContent.push(content[i])
                }
            }

        }

        setContent([...newContent])
        setDoneSort(!doneSort)
    }

    return (
        <div className='main_div'>
            <div>
                <button className='btnSort' onClick={() => {
                    SortMe()
                }}>
                    <div>
                        Sort
                    </div>
                </button>
                <div className={`sorting`} style={{display: sortT ? 'flex' : 'none'}}>
                    <button className='sortObject'
                            onClick={() => {
                                sortA_Z()
                            }}
                    >
                        <div>
                            A-Z
                        </div>
                    </button>
                    <button className='sortObject'
                            onClick={() => {
                                sortLength()
                            }}
                    >
                        <div>
                            Length
                        </div>
                    </button>
                    <button className='sortObject'
                            onClick={() => {
                                SortDone()
                            }}
                    >
                        <div>
                            Done
                        </div>
                    </button>
                </div>
            </div>
            <p className="p1">My To Do List</p>
            <div className="inpBtn">
                <input type="text" name="" id="" placeholder={'Title...'} className='inp2'
                       onKeyPress={handleKeyPress}/>
                <button onClick={addBtn}>Add</button>
            </div>
        </div>
    )
}