import React, { useState } from "react";
import AssignedWork from "../AssignedWork/AssignedWork";
import "../Dashboard/Dashboard.css";
import "../WorkAssigned/WorkAssigned.css";
import PopUp from "../PopUp/PopUp";
import "../PopUp/PopUp.css";
import getEmployeeList from "../service/getEmployeeList.json";
import getWorkOrderList from "../service/getWorkOrderList.json";
import postWorkOrderList from "../service/postWorkOrderList.json";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState();

  const AssignedWorkOrder = getWorkOrderList.job.map((value) => value);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  const newData = getEmployeeList.Employess.map((val) => {
    return val;
  });
  const handlePostData = postWorkOrderList.job.map((value) => {
    return value;
  });
  console.log(handlePostData);
  const handleData = () => {
    setList(
      <div className="pop_up2">
        <div className="work_level_three">
          <div className="work_level_two" style={{ marginLeft: "0.5rem" }}>
            <p className="para_one ">{handlePostData[0].workorders[2].name}</p>
            <hr />
            <p className="para_two">{handlePostData[0].jobname}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container_box">
      <div className="div_btn ">
        <button className="btn_primary" onClick={() => handlePostData}>
          Save
        </button>
      </div>
      <div className="main_class">
        <table className="table_head head">
          <tr className="table_row header">
            <th></th>
            <th>20-Apr-20</th>
            <th>21-Apr-20</th>
            <th>22-Apr-20</th>
            <th>23-Apr-20</th>
            <th>24-Apr-20</th>
            <th>25-Apr-20</th>
          </tr>
          <tr className="table_row table_cell1">
            <td style={{ fontSize: "16px" }}>{newData[0].Name}</td>
            <td onClick={togglePopUp}>
              {list}
              {
                <div className="pop_up1">
                  {isOpen && (
                    <PopUp
                      content={
                        <div className="pop_up2">
                          <div
                            className="work_level_three"
                            onClick={handleData}
                          >
                            <div
                              className="work_level_two"
                              style={{ marginLeft: "0.5rem" }}
                            >
                              <p className="para_one ">
                                {AssignedWorkOrder[0].workorders[0].name}
                              </p>
                              <hr />
                              <p className="para_two">
                                {AssignedWorkOrder[0].jobname}
                              </p>
                            </div>
                          </div>
                          <div
                            className="work_level_three"
                            onClick={handleData}
                          >
                            <div
                              className="work_level_two"
                              style={{ marginLeft: "0.5rem" }}
                            >
                              <p className="para_one ">
                                {handlePostData[0].workorders[2].name}
                              </p>
                              <hr />
                              <p className="para_two">
                                {handlePostData[0].jobname}
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  )}
                </div>
              }
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table_row table_cell2">
            <td style={{ fontSize: "16px" }}>{newData[1].Name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table_row table_cell3">
            <td style={{ fontSize: "16px" }}>{newData[2].Name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table_row table_cell4">
            <td style={{ fontSize: "16px" }}>Dave</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table_row table_cell5">
            <td style={{ fontSize: "16px" }}>Eve</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table_row" style={{ borderBottom: "solid" }}>
            <td style={{ borderBottom: "hidden" }}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <AssignedWork />
    </div>
  );
};

export default Dashboard;
