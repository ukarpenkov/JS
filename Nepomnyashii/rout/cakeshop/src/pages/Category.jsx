import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import Preloader from '../components/Preloader'
import MealList from '../components/MealList'


function Category() {
    const { goBack } = useHistory()
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name])


    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>



}


export default Category
