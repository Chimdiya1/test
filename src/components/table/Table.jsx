import React from 'react'
import './table.css'
import { useLocation } from "react-router-dom";
import TableRow from '../tableRow/TableRow';
import { v4 as uuidv4 } from 'uuid';

const Table = ({ data }) => {
    // function useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }
    // let query = useQuery();
    // console.log(query.get("orderByField"))
    let columnToSort = encodeURIComponent(useLocation().search.split("?orderByField=").pop().toLocaleLowerCase())
    let dataWithoutHeading = data.slice(1)
    let dataHeading = data[0]
    let dataHeadingAsQuery = dataHeading.map((heading) =>{
        return encodeURIComponent(heading.toLowerCase())
    })    
    let searchIndex = dataHeadingAsQuery.indexOf(columnToSort) === -1 ? 0 : dataHeadingAsQuery.indexOf(columnToSort)

    let sortedArray = dataWithoutHeading.sort(function(a, b) {
        if (searchIndex === 1 || searchIndex === 2) {
            return  a[searchIndex].localeCompare(b[searchIndex])
        }
        return  a[searchIndex] -b[searchIndex] ;
    });
    console.log(sortedArray)
    return (
        <table>
            <thead>
                <tr>
                    {data && dataHeading.map((data) => {
                        return <th key={uuidv4()} >{data}</th>
                    })}
                </tr>                
            </thead>

            <tbody>
                {sortedArray && sortedArray.map((data) => {
                    return <TableRow key={uuidv4()} rowData={data}/>
                })}
            </tbody>
        </table>
    );
}

export default Table;