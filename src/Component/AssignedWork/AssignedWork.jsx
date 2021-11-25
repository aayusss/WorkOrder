import React from "react";
import "../AssignedWork/AssignedWork.css";
import getWorkOrderList from "../service/getWorkOrderList.json";

const AssignedWork = (props) => {
  const AssignedWorkOrder = getWorkOrderList.job.map((getVal, i) => {
    return getVal;
  });

  return (
    <div className="work_assign">
      <div className="work_level_one">
        <div className="work_level_three">
          <div className="work_level_two" style={{ marginLeft: "0.5rem" }}>
            <p className="para_one para">
              {AssignedWorkOrder[0].workorders[0].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[0].jobname}</p>
          </div>
          <div className="work_level_two">
            <p className="para_one para">
              {AssignedWorkOrder[0].workorders[1].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[0].jobname}</p>
          </div>
          <div className="work_level_two">
            <p className="para_one para">
              {AssignedWorkOrder[0].workorders[2].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[0].jobname}</p>
          </div>
          <div className="work_level_two" style={{ marginLeft: "14rem" }}>
            <p className="para_one para">
              {AssignedWorkOrder[0].workorders[3].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[0].jobname}</p>
          </div>
        </div>
        <div className="work_level_three">
          <div className="work_level_two" style={{ marginLeft: "7.25rem" }}>
            <p className="para_one para">
              {AssignedWorkOrder[1].workorders[0].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[1].jobname}</p>
          </div>
          <div className="work_level_two" style={{ marginLeft: "7rem" }}>
            <p className="para_one para">
              {AssignedWorkOrder[1].workorders[1].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[1].jobname}</p>
          </div>
          <div className="work_level_two" style={{ marginLeft: "7rem" }}>
            <p className="para_one para">
              {AssignedWorkOrder[1].workorders[2].name}
            </p>
            <hr />
            <p className="para_two para">{AssignedWorkOrder[1].jobname}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedWork;
