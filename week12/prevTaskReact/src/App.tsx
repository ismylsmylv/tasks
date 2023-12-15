import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Employee } from "./class/employee";
import { Student } from "./class/student";
import { Position } from "./class/employee";
function App() {
  const [option, setoption] = useState("");
  const [addedName, setaddedName] = useState("");
  const [addedSurname, setaddedSurname] = useState("");
  const [addedAge, setaddedAge] = useState(0);
  const [addedGroupName, setaddedGroupName] = useState("");
  const [addedGPA, setaddedGPA] = useState(0);
  const [addedHobbies, setaddedHobbies] = useState<string[]>([]);
  const [addedSalary, setaddedSalary] = useState(0);
  const [addedSkills, setaddedSkills] = useState<string[]>([]);
  // const [addedPosition, setaddedPosition] = useState("");
  const [addedPosition, setaddedPosition] = useState(Position);
  const [datas, setdatas] = useState<string[]>([]);
  const [disabled, setdisabled] = useState(true);
  // useEffect(() => {
  //   if (addedName == "") {
  //     setdisabled(true);
  //   } else {
  //     setdisabled(false);
  //   }
  // }, []);

  return (
    <>
      <form action="">
        <input
          type="text"
          name=""
          id="nameInp"
          placeholder="name"
          onChange={(e) => {
            setaddedName(e.target.value);
            e.target.value.trim() == ""
              ? setdisabled(true)
              : setdisabled(false);
          }}
        />
        <input
          type="text"
          name=""
          id="surname"
          placeholder="surname"
          onChange={(e) => {
            setaddedSurname(e.target.value);
            e.target.value.trim() == ""
              ? setdisabled(true)
              : setdisabled(false);
          }}
        />
        <input
          type="number"
          name=""
          id="age"
          placeholder="age"
          onChange={(e) => {
            setaddedAge(+e.target.value);
            e.target.value.trim() == ""
              ? setdisabled(true)
              : setdisabled(false);
          }}
        />
        <select
          name=""
          id="selector"
          onChange={(e) => {
            setoption(e.target.value);
            console.log(option);
          }}
        >
          <option value="option">Select </option>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
        </select>
        <button
          type="submit"
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            if (option == "student") {
              const student = new Student(
                addedName,
                addedSurname,
                addedAge,
                addedGroupName,
                addedHobbies,
                addedGPA
              );

              console.log(student);
              setdatas((datas) => [...datas, student]);
              console.log(datas);
            } else {
              const employee = new Employee(
                addedName,
                addedSurname,
                addedAge,
                addedSalary,
                addedSkills,
                addedPosition
              );
              console.log(employee);
              setdatas((datas) => [...datas, employee]);
            }
          }}
        >
          Submit
        </button>
        {option == "student" && (
          <>
            <div className="studentOpt">
              <input
                type="text"
                name=""
                id="groupName"
                placeholder="groupName"
                onChange={(e) => {
                  setaddedGroupName(e.target.value);
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              />
              <input
                type="number"
                name=""
                id="GPA"
                placeholder="GPA"
                onChange={(e) => {
                  setaddedGPA(+e.target.value);
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              />
              <input
                type="text"
                name=""
                id="hobbies"
                placeholder="hobbies"
                onChange={(e) => {
                  const hobbyRaw = e.target.value;
                  setaddedHobbies(hobbyRaw.split(" "));
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              />
            </div>
          </>
        )}
        {option == "employee" && (
          <>
            <div className="employeeOpt">
              <input
                type="number"
                name=""
                id="salary"
                placeholder="salary"
                onChange={(e) => {
                  setaddedSalary(+e.target.value);
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              />
              <input
                type="text"
                name=""
                id="skills"
                placeholder="skills"
                onChange={(e) => {
                  const skillRaw = e.target.value;
                  setaddedSkills(skillRaw.split(" "));
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              />
              {/* <input
                type="text"
                name=""
                id="position"
                placeholder="position"
                onChange={(e) => {
                  setaddedPosition(e.target.value);
                }}
              /> */}
              <select
                name="position"
                id="position"
                onChange={(e) => {
                  setaddedPosition(e.target.value);
                  e.target.value.trim() == ""
                    ? setdisabled(true)
                    : setdisabled(false);
                }}
              >
                <option value="null">Select</option>
                <option value={Position.ceo}>{Position.ceo}</option>
                <option value={Position.it}>{Position.it}</option>
                <option value={Position.worker}>{Position.worker}</option>
                <option value={Position.hr}>{Position.hr}</option>
              </select>
            </div>
          </>
        )}
      </form>
      <ul className="list">
        {datas &&
          datas.map((elem) => {
            return <li key={uuidv4()}>{elem.getInfo()}</li>;
          })}

        {/* <li>text</li> */}
      </ul>
    </>
  );
}

export default App;
{
  /* <li key={uuidv4()}>
                  {elem._name} {elem._surname} {elem.age}
                </li> */
}
