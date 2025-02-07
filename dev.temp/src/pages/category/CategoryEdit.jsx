import {useEffect, useState} from "react";
import CategoryService from "../../services/CategoryService.js";
import {useNavigate, useParams} from "react-router";
import useLoader from "../../hooks/useLoader.js";
import {CategoryForm} from "./CategoryForm.jsx";

export function CategoryEdit() {
    const initialValues = {
        name: "",
        description: "",
    }
    const {hideLoader,showLoader} = useLoader()
    const params = useParams()
    const [formData, setFormData] = useState(initialValues)

    useEffect(() => {
        try{
            // show loader
            showLoader()
            async function fetchData() {
                const result = await CategoryService.getById(params.id);
                setFormData(result.data)
                hideLoader()
            }
            fetchData()
        }catch (e) {
            console.log(e)
        }
    },[])
    const handleSubmit = (data) => {
       return  CategoryService.update(data)
    }
    return (
        <CategoryForm formData={formData} setFormData={setFormData} onSubmit={ handleSubmit} />
    )
}
