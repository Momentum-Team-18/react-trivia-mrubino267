import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Quiz() {
    const [questions, setQuestions] = useState([])
    const catURL = 'https://opentdb.com/api.php?amount=10&category=9'

    useEffect(() => {
    axios.get(catURL).then((response) => setQuestions(response.data.results))}, [])

    console.log(questions)

    return (
    <>
        <p>Quiz component lives here</p>
        <div>
            {questions.map(question => (
                <ul key={question.id}>
                    <p>{question.question}</p>
                    <p>{question.difficulty}</p>
                </ul>
            ))}
        </div>
    </>
    )
}

export default Quiz