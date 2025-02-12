import {TableReact} from "../../components/Table/TableReact.jsx";
import {useEffect, useState} from "react";
import CategoryService from "../../services/CategoryService.js";
import useLoader from "../../hooks/useLoader.js";
import {useNavigate} from "react-router";

export function CategoryIndex() {
    const [data, setData] = useState([])
    const {showLoader,hideLoader} = useLoader()
    const navigate = useNavigate()
    useEffect(() => {
        /*
        CategoryService.getAll()
            .then(res => {
              setData(res.data)
            })
            .catch(err => console.log(err));*/
        try{
            // show loader
            showLoader()
            async function fetchData() {
                const result = await CategoryService.getAll();
                setData(result.data)
                hideLoader()
            }
            fetchData()
        }catch (e) {
            console.log(e)
        }
    }, []);
    function handleEdit(id){
        navigate("/category/edit/"+id);
    }
    return (
        <>
            <TableReact data={data} editLine={handleEdit}></TableReact>
        </>
    )
}
