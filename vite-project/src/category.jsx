import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Quiz from './Quiz'


function Category() {
    const URL = 'https://opentdb.com/api_category.php'
    const [categories, setCategories] = useState([])
    // const catURL = `https://opentdb.com/api.php?amount=10&category=${category.id}`

    useEffect(() => {
    axios.get(URL).then((response) => setCategories(response.data.trivia_categories))}, [])

    console.log(categories[0])

    return (
    <>
        <p>Category lives here</p>
        <div>
            {categories.map(category => (
                <ul key={category.id}>
                    <a href={category.id}>{category.name}</a>
                </ul>
            ))}
        </div>
    </>
    )
}

export default Category