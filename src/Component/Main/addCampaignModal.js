import React, { memo, useState } from "react";
import ModalComponent from "../modalComponent";
import TextBox from "./../Controls/textBox";
import DateInput from "./../Controls/dateInput";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/Action/mainAction/mainAction";

function AddCampaignModal(props) {
  const campaignData = useSelector((state) => state.CampaignReducer?.users);
  const dispatch = useDispatch();
  const { openModal, toggle } = props;
  const [values, setValues] = useState({
    userName: "",
    startDate: "",
    endDate: "",
    budget:"",
  });

  const onValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onAddData = () => {
    let startDate = new Date(values.startDate)
    startDate = startDate.getMonth()+1 + "/" + startDate.getDay() + "/" + startDate.getFullYear()
    let endDate = new Date(values.endDate)
    endDate = endDate.getMonth()+1 + "/" + endDate.getDay() + "/" + endDate.getFullYear()
    let obj = [
      ...campaignData,
      {
        id: campaignData.length + 1,
        userId: campaignData.length + 1,
        name: values.userName,
        startDate: startDate,
        endDate: endDate,
        Budget: values.budget,
      },
    ];

    dispatch(addData(obj));
    console.log("for test",obj);
    setValues({
      userName: "",
      startDate: "",
      endDate: "",
      budget: "",
    })
    toggle()
  };

  return (
    <>
      <ModalComponent modal={openModal} toggle={toggle} title="Add Campaign">
        <div>
          <TextBox
            label="User Name"
            onChange={onValueChange}
            name="userName"
            value={values.userName}
          />
        </div>
        <div className="mt-3">
          <DateInput
            label="Start Date"
            required={true}
            onChange={onValueChange}
            name="startDate"
            value={values.startDate}
          />
        </div>
        <div className="mt-3">
          <DateInput
            label="End Date"
            required={true}
            onChange={onValueChange}
            name="endDate"
            value={values.endDate}
          />
        </div>
        <div className="mt-3">
          <TextBox
            type="number"
            label="Budget"
            onChange={onValueChange}
            name="budget"
            value={values.budget}
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={onAddData}>
          {" "}
          Add
        </button>
      </ModalComponent>
    </>
  );
}

export default memo(AddCampaignModal);
