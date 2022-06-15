import React, { useState } from "react";
import axios from "../api/axios";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const REPORTS_URL = "v1/reports";

const Reports = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [tableData, setTableData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const handleDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateTo = (e) => {
    setDateTo(e.target.value);
  };

  const handleSubmitReport = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REPORTS_URL,
        JSON.stringify({
          clientName: "Moj zubar",
          dateFrom,
          dateTo,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTableData(response.data);
      setIsVisible(true);
      setDateFrom("");
      setDateTo("");
    } catch (error) {
      console.log(error);
    }
  };

  let totalAmount = 0;

  if (tableData?.length === 1) {
    totalAmount = tableData[0].amount;
  } else if (tableData.length > 1) {
    totalAmount = tableData
      .map((data) => data.amount)
      .reduce((prev, next) => prev + next, 0);
  }

  return (
    <div className="mt-4">
      <div className="row align-items-center">
        <h1 className="col-md-9">Report search</h1>
        <div className="col-md-3 text-end">
          <Button type="button" classType="danger" className="mt-3">
            Final Report
          </Button>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmitReport} className="row form-report">
        <div className="col-md-3">
          <label htmlFor="client">Client</label>
          <select className="form-select mb-4 mt-2" id="client" disabled>
            <option defaultValue="Moj zubar">Moj zubar</option>
          </select>
        </div>
        <div className="col-md-3">
          <Input
            name="dateFrom"
            id="dateFromInput"
            type="date"
            label="From *"
            value={dateFrom}
            onChange={handleDateFrom}
            required={true}
          />
        </div>
        <div className="col-md-3">
          <Input
            name="dateTo"
            id="dateToInput"
            type="date"
            label="To *"
            value={dateTo}
            required={true}
            onChange={handleDateTo}
          />
        </div>
        <div className="col-md-3 btn-submit">
          <Button type="submit" classType="success">
            Submit
          </Button>
        </div>
      </form>

      {isVisible && (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Direct</th>
              <th scope="col">Paid</th>
              <th scope="col">Bill date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, i) => {
              const sumData = data.amount;
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.nameClientFrom}</td>
                  <td>{data.nameClientTo}</td>
                  <td>{data.direct}</td>
                  <td>{data.paid}</td>
                  <td>
                    {data.dateBill} {sumData}
                  </td>
                  <td className="danger">{data.amount}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5" className="text-end">
                <Button type="button" classType="warning">
                  To PDF
                </Button>
              </td>
              <td>Total Amount</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reports;
