import Input from "../../components/form/Input.jsx";
import TextArea from "../../components/form/TextArea.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";

export function CategoryForm({formData,setFormData,onSubmit}) {

    const initialValues = {
        name: "",
        description: "",
    }
    const [formError, setFormError] = useState(initialValues)
    const handleChange = function (e,input) { // name
        setFormData({ ...formData,[input] : e.target.value })
    }
    const navigator = useNavigate()
    const handleSubmit = function (e) {
        e.preventDefault()
        onSubmit(formData)
            .then(data => {
                navigator('/category')
            })
            .catch(err => {
                setFormError({...err.response.data.message})
            })
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="form-horizontal" style={{width:'50%'}}>
                    <Input
                        label="name"
                        name="name"
                        onChange={(event) => handleChange (event, "name")}
                        value={formData.name}
                        error={formError.name}
                    />
                    <TextArea
                        name="description"
                        onChange={(event) => handleChange (event, "description")}
                        label="description"
                        value={formData.description}
                        error={formError.description}
                    />
                    <button className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}
