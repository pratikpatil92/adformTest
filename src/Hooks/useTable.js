import React from 'react'

export default function useTable(header) {

    const TblContainer = props => (
        <table className="table table-hover">
            {props.children}
        </table>
    )

    const TblHead = () =>{
        return (<thead>
            <tr>
                {header?.map((data, index)=>(
                    <th key={index}>
                        {data}
                    </th>

                ))}
            </tr>
        </thead>)
        
    }

  return {
    TblContainer,
    TblHead,
  }
}
