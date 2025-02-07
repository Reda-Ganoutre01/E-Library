export function THead({columns}) {

    return (
        <thead>
            <tr>
                {columns.map((column) => <th key={column}>{column}</th>)}
                <td>Actions</td>
            </tr>
        </thead>
    )
}