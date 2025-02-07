import {THead} from "./THead.jsx";
import {TBody} from "./TBody.jsx";

export function TableReact({data,editLine}) {
    return (
        <>
            {
                data.length > 0 &&
                <table className='table  m-5' border={1}>
                    <THead columns={Object.keys(data[0])}/>
                    <TBody editLine={editLine}  data={data} columns={Object.keys(data[0])}/>
                </table>
            }

        </>
    )
}
