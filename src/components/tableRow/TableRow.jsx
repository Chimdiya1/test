import React from 'react'
import './tableRow.css'
import { v4 as uuidv4 } from 'uuid';
const TableRow = ({rowData}) => {
    return ( 
        <tr>
            {rowData && rowData.map((data)=><td key={uuidv4()} >{data}</td>)}
        </tr>
     );
}
 
export default TableRow;