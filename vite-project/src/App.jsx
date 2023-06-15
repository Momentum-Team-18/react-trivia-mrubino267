import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from './Category';
import Quiz from './Quiz';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

return (
    <div>
    {selectedCategory ? <Quiz categoryID={selectedCategory} categories={Categories} setSelectedCategory={setSelectedCategory} /> : <Categories setSelectedCategory={setSelectedCategory} />}
    </div>
);
}

export default App;