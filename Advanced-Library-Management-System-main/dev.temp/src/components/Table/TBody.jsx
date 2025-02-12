import {useRef, useState} from "react";

export function TBody({data, columns,editLine}) {
    let [dataState, setDataState] = useState(data)

    let handleEdit = function (row) {
        editLine(row)
    }
    let handleDelete = function (id) {

        let newDataState = dataState.filter((row) => {
            return row.id !== id
        })
        setDataState(newDataState)
    }
    return (
        <tbody>
        {dataState.map(line => {
            return <tr key={"person-" + line["id"]}>
                {columns.map((column) => {

                    return (
                        <td key={column}>{line[column]}</td>
                    )
                })}
                <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(line["id"])}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(line["id"])}>Delete</button>
                </td>
            </tr>
        })}
        </tbody>
    )
}
