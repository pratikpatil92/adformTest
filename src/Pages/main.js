import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Component/Card";
import Header from "../Component/Header";
import AddCampaignModal from "../Component/Main/addCampaignModal";
import FilterForm from "../Component/Main/filterForm";
import MainTable from "../Component/Main/mainTable";
import { mainAction } from "../Redux/Action/mainAction/mainAction";

const header = [
  "Name",
  "User Name",
  "Start Date",
  "End Date",
  "Active",
  "Budget",
];

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.CampaignReducer);
  const [dataFilter, setDataFilter] = useState(data?.users);
  const [openModal, setOpenModal] = useState(false)
  
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    dispatch(mainAction());
  }, []);

  useEffect(()=>{
    setDataFilter(data?.users)
  },[data])

  return (
    <>
      <Header title="HI, My name is Pratik. This is my assignment" />
      <Card>
        <button className="btn btn-primary float-end add-btn" onClick={()=>setOpenModal(true)}>Add New Campaign</button>
        <FilterForm setDataFilter={setDataFilter} dataFilter={dataFilter}/>
        <MainTable header={header} data={dataFilter} />
      </Card>
      <AddCampaignModal openModal={openModal} toggle={toggleModal}/>
    </>
  );
}

export default memo(Main)