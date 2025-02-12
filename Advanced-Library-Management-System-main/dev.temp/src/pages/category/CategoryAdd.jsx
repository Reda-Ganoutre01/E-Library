import {useState} from "react";
import CategoryService from "../../services/CategoryService.js";
import {CategoryForm} from "./CategoryForm.jsx";

export function CategoryAdd() {
    const initialValues = {
        name: "",
        description: "",
    }
    const [formData, setFormData] = useState(initialValues)

    const handleSubmit = (data) => {
        return  CategoryService.store(data)
    }
    return (
        <CategoryForm formData={formData} setFormData={setFormData} onSubmit={ handleSubmit}  />
    )
}
