import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState (['first category'])
    const [category, setCategory] = useState ('')

    const onAddCategory = () => {


        setCategories( list => [...list, category])
        setCategory('')

    }

    const onSetCategory = (evt) => {

        setCategory(evt.target.value)

    }

    return(
<>

        <h1>gifExpert</h1>
        <input type="text" value={category} onChange = {(event) => onSetCategory(event)}/>
        <button onClick={() => onAddCategory()}> add category</button>
        <ol>
            { categories.map(

                (categories, key) => 
                {
                    return <li key =  { key }> {categories}</li>
                }

            )
}
</ol>
</>
    )
}

export default GifExpertApp