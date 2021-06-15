

export function Head({keys, head}) {

    const tableHead = head || {};
    return(
        <tr>
            {
                keys.map(key => <th key={key}>{tableHead[key] || key} </th>)
            }
            <th></th>
        </tr>
    )
}