import React, { useState } from 'react';
const Question =(props)=>{
console.log()
const [response,setResponse]=useState('')
    // const [change,setChange] =useState(false)

    const {value,question,correct_answer,incorrect_answers,show}=props.quest
// console.log(incorrect_answers.length)

    // console.log([correct_answer,incorrect_answers])
    if(incorrect_answers.length <4){
    const randomize=(a,b)=>{
            let rans =Math.ceil(Math.random()*4)

        a.splice(rans,0,b)
    }
    randomize(incorrect_answers,correct_answer)}

const handleResponse=(i,a,reply,btn)=>{

    setResponse([reply,btn])
    props.solutions(i,a,reply)
}

let correct = props.show ? correct_answer:''
// let select =
console.log(show,correct)
const decsion = response === correct_answer? 'Correct':'Wrong'
const objective=incorrect_answers.map((obj,i) =><button disabled={props.show}
className={`${correct ===obj?"right":i=== response[1] ? "selected-note" : "" }`}
onClick={()=>handleResponse(props.value,correct_answer,obj,i)} key={i}
>{obj}</button>)
    return(
       <div className='main'>
        <h4>{question}</h4>

        <div className='box'> <div className='objs' >{objective}{props.show?correct_answer:''}</div> </div>
       </div>)

}

export default Question