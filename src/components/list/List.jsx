import {createElement, useState} from "react";
import {CiCircleRemove} from "react-icons/ci";
import {FaCheck} from "react-icons/fa";

export default function List({content, setContent}) {

    function colorPick(index, checked) {
        if (checked === true) {
            return '#888888'
        } else if (index % 2 === 1) {
            return '#eeeeee'
        } else if (index % 2 === 0) {
            return '#f9f9f9'
        }
    }

    function colorP(index, checked) {
        if (checked === true) {
            return 'white'
        } else if (index % 2 === 1) {
            return 'black'
        } else if (index % 2 === 0) {
            return 'black'
        }
    }

    function checkDiv(checked) {
        if (checked === true) {
            return 'flex'
        } else {
            return 'none'
        }
    }

    function div2(checked) {
        if (checked === true) {
            return 'white'
        } else {
            return 'none'
        }
    }

    function onMouseEnterHandle(index) {
        let icon2 = document.querySelectorAll('.icon2')
        let icon = document.querySelectorAll('.icon')
        icon[index].classList.add('icon3')
        icon2[index].classList.add('icon3')

    }

    function onMouseLeaveHandle(index) {
        let icon2 = document.querySelectorAll('.icon2')
        let icon = document.querySelectorAll('.icon')
        icon[index].classList.remove('icon3')
        icon2[index].classList.remove('icon3')

    }

    function change(checked, index) {
        content[index].checked = !content[index].checked;
        console.log(content)
        setContent([...content])
    }

    function removeMe(checked, index) {
        content.splice(index, 1)
        setContent([...content])
    }

    function edit(index) {
        let editInp = document.querySelectorAll('.editInp')
        let editP = document.querySelectorAll('.editP')
        for (let i = 0; i < editInp.length; i++) {
            editP[i].style.display = 'flex'
            editInp[i].style.display = 'none'
        }

        editP[index].style.display = 'none'
        editInp[index].style.display = 'flex'
        editInp[index].value = editP[index].innerHTML
    }


    const enterInp = (event, index) => {
        let c = 0
        let t = false
        console.log(event.key)
        if (event.key === 'Enter') {
            let editP2 = document.querySelectorAll('.editP')
            let editInp2 = document.querySelectorAll('.editInp')
            if (editInp2[index].value !== ' ' && editInp2[index].value !== '  ') {
                for (let i = 0; i < content.length; i++) {
                    if (content[i].name === editInp2[index].value) {
                        alert('You can not write the same thing')
                        break
                    } else if (content.length - 1 === i) {
                        t = true
                        break
                    } else if (editInp2[index].value !== ' ') {
                        c = 0
                        console.log(c, '4')
                    }
                }
                if (t) {
                    console.log(editInp2[index].value)
                    for (let i = 0; i < editInp2[index].value.length; i++) {
                        if (c === 2) {
                            break
                        } else if (editInp2[index].value[i] === ' ') {
                            c++
                        } else if (editInp2[index].value.length - 1 === i) {
                            editP2[index].innerHTML = editInp2[index].value
                            editP2[index].style.display = 'flex'
                            editInp2[index].style.display = 'none'
                            setContent([...content])
                            break
                        } else if (editInp2[index].value[i] !== ' ') {
                            c = 0
                        }
                    }
                }
            } else if (editInp2[index].value === '') {
                alert('You must write smth')
            }

        }
    }
    console.log(content)
    return (
        <ul className='ul'>
            {content.map(({id, name, checked, Icon, Check}, index) => {
                return (
                    <li key={id} className='main_li' style={{
                        backgroundColor: colorPick(index, checked),
                    }}>
                        <div className='checkDiv2' onDoubleClick={() => {
                            change(checked, index)
                        }}>
                            <div className='icons' style={{
                                display: checkDiv(checked),
                                color: div2(checked)
                            }}>
                                <Check className="check"/>
                            </div>
                            <p style={{
                                color: colorP(index, checked),
                            }}
                               onClick={() => {
                                   edit(index)
                               }} className='editP'>
                                {name}
                            </p>
                            <input type="text" name="" id="" className='editInp' onKeyPress={(event) => {
                                enterInp(event, index)
                            }}/>
                        </div>
                        <div style={{
                            color: colorP(index, checked),
                        }}
                             onClick={() => {
                                 removeMe(checked, index)
                             }
                             }
                             onMouseEnter={() => onMouseEnterHandle(index)}
                             onMouseLeave={() => onMouseLeaveHandle(index)}
                             className='icon2'>
                            <Icon className="icon"/>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}