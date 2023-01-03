import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DateInput from "../Controls/dateInput";
import TextBox from "../Controls/textBox";

export default function FilterForm(props) {
  const data = useSelector((state) => state.CampaignReducer);

  const { setDataFilter, dataFilter } = props;
  const [startDateChange, setStartDateChange] = useState();
  const [endDateChange, setEndDateChange] = useState();
  const [dateDisabled, setDateDisabled] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (startDateChange === "") {
      setDateDisabled(true);
    }
  }, [startDateChange]);

  const onStartDateChange = (e) => {
    e.preventDefault();
    setStartDateChange(e.target.value);
    setDateDisabled(false);
  };

  const onEndDateChange = (e) => {
    e.preventDefault();
    setEndDateChange(e.target.value);
  };

  const onSumbit = (e) => {
    e.preventDefault();
    let data = [];
    if (searchValue && searchValue !== "") {
      data = dataFilter?.filter((ele) => {
        return ele.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else {
      data = dataFilter?.filter((ele) => {
        return (
          new Date(ele.startDate) > new Date(startDateChange) &&
          new Date(ele.endDate) < new Date(endDateChange)
        );
      });
    }
    if (!data?.length || !data) {
      toast.error("No data Found");
    } else {
      setDataFilter(data);
    }
  };

  const onReset = (e) => {
    document.getElementById("form").reset();
  };

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <div className="mb-5">
      <form id="form">
        <div className="row">
          <div className="col-3 form-group">
            <DateInput label="Start Date" onChange={onStartDateChange} />
          </div>
          <div className=" col-3 form-group">
            <DateInput
              label="End Date"
              onChange={onEndDateChange}
              disabled={dateDisabled}
            />
          </div>
          <div className="col-3 form-group">
            <TextBox label="Search" onChange={onSearchChange} />
          </div>
          <div className="col-3 form-group submit-btn">
            <button className="btn btn-primary" onClick={onSumbit}>
              Submit
            </button>{" "}
            <button className="btn btn-primary" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
