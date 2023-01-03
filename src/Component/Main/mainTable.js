import React, { memo } from 'react'
import useTable from '../../Hooks/useTable'
import styles from "./../../styles/table.module.css"

function MainTable(props) {
    const {header, data} = props

    const {TblContainer, TblHead} = useTable(header)

    const isActive = (startDate, endDate) =>{
        const currentDate = new Date()
        if(new Date(startDate) < currentDate && currentDate < new Date(endDate)){
            return "Active"
        }else{
            return "Not Active"
        }
    }


  return (
    <>
        <TblContainer>
            <TblHead/>
            <tbody>
            {data?.map((ele,id)=>(
                new Date(ele.startDate) > new Date(ele.endDate)?null:
                <tr key={id}>
                    <td>campaign{ele.userId}</td>
                    <td>{ele.name===""?"Unknown User":ele.name}</td>
                    <td>{ele.startDate}</td>
                    <td>{ele.endDate}</td>
                    <td><span className={isActive()==="Active"?styles.Active:styles.InActive}></span>{isActive(ele.startDate, ele.endDate)}</td>
                    <td>{ele.Budget}</td>
                </tr>
            ))}
            </tbody>
        </TblContainer>
    </>
  )
}

export default memo(MainTable)
