import { useState } from "react"
import { AddCategory, GifGrid} from "./component";

export const GifExpertApp = (): JSX.Element => {
    
    const [ categories, setCategories ] = useState<string[]>([]);

    const handleAddCategory = (newCategory: string): void => {
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

    const handleDeleteCategory = (category: string): void => {
        setCategories(categories.filter((cat: string) => cat !== category));
    }

    const resetButton = () => {
        setCategories([]);
    }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  newCategory = { handleAddCategory }/>
            <button onClick={ resetButton }> Reset </button>
            { 
                categories.map((category: string) => (
                    <GifGrid key={ category } category = { category } deleteCategory = { handleDeleteCategory }/>
                ))
            }
        </>    

    )
}
