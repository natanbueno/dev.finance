

export function Row ( {values}) {
    
    const keys = Object.keys(values);
    return (
        <tr key={values.id}>
            {
                keys.map(key => <td key={key}>{values[key]}</td>)
            }
        </tr>      
    )
}