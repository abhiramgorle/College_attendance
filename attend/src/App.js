import "flowbite/dist/flowbite.css";
import "flowbite/dist/flowbite.js";
import LoginT from "./Components/LogIn/login";
import LoginS from "./Components/LogIn/LoginStud";
import SignUp from "./Components/SignUp/signup";
import TeachStu from "./Components/TeachStu/TeachStu";
import Slogin from "./Components/Slogin/Slogin";
import Tlogin from "./Components/Tlogin/Tlogin";
import Seeattend from "./Components/Slogin/seeattend";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TakeAttend from "./Components/TakeAttend/TakeAttend";
import CreateAttend from "./Components/CreateAttend/CreateAttend";
import UpdateStud from "./Components/UpdateStud/UpdateStud";
import SelectStud from "./Components/UpdateStud/SelectStud";
import MarkAttend from "./Components/MarkAttend/MarkAttend";
import EditStud from "./Components/EditModal/EditModal";
import TeacherEdit from "./Components/Tlogin/TeacherEdit";
import Forgotpass from "./Components/Tlogin/ResetPassword/Forgotpass";
import Resetpass from "./Components/Tlogin/ResetPassword/Resetpass";
import Changepass from "./Components/Tlogin/ResetPassword/Changepass";
import CheckSub from "./Components/StudentSection/CheckSub";
import CheckAttend from "./Components/StudentSection/CheckAttend";
import Job from "./Components/JobPortal/JobPortal";
import Grades from "./Components/GradePortal/GradePortal";
// For Graphical Visualization of attendance

function App() {
  const [Subject, setSubject] = useState("");
  const [Branch, setBranch] = useState("");
  const [SelectedDate, setSelectedDate] = useState(new Date());
  console.log(SelectedDate);
  // Array for the update Student
  const [Upstud, setUpstud] = useState({});

  const handleChange = (e) => {
    setSubject(e.target.value);
  };
  const handleChangeBranch = (e) => {
    setBranch(e.target.value);
  };

  // Authorized Student
  const [AuthorizedStud, setAuthorizedStud] = useState({});

  // Link containing the gmail verification
  const [link, SetLink] = useState("");
  // State Containing the logged user's details
  const [userData, setUserData] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/loginteach" element={<LoginT />}></Route>
          <Route exact path="/loginstud" element={<LoginS />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/" element={<TeachStu />}></Route>
          <Route
            exact
            path="/grades"
            element={
              <Grades
                AuthorizedStud={AuthorizedStud}
                setAuthorizedStud={setAuthorizedStud}
              />
            }
          ></Route>
          <Route exact path="/job" element={<Job />}></Route>
          <Route
            exact
            path="/tlogin"
            element={<Tlogin userData={userData} setUserData={setUserData} />}
          ></Route>
          <Route exact path="/seeattend" element={<Seeattend />}></Route>
          <Route
            exact
            path="/slogin"
            element={
              <Slogin
                AuthorizedStud={AuthorizedStud}
                setAuthorizedStud={setAuthorizedStud}
              />
            }
          ></Route>
          <Route
            exact
            path="/checksubs"
            element={
              <CheckSub
                AuthorizedStud={AuthorizedStud}
                setAuthorizedStud={setAuthorizedStud}
              />
            }
          ></Route>
          <Route exact path="/seeattend" element={<Seeattend />}></Route>
          <Route
            exact
            path="/checkattend"
            element={
              <CheckAttend
                Branch={Branch}
                AuthorizedStud={AuthorizedStud}
                setAuthorizedStud={setAuthorizedStud}
              />
            }
          ></Route>
          <Route
            exact
            path="/forgotpassword"
            element={
              <Forgotpass
                userData={userData}
                setUserData={setUserData}
                link={link}
                SetLink={SetLink}
              />
            }
          ></Route>
          <Route
            exact
            path="/resetpassword"
            element={
              <Resetpass
                userData={userData}
                setUserData={setUserData}
                link={link}
              />
            }
          ></Route>
          <Route
            exact
            path="/editstud"
            element={
              <EditStud
                Upstud={Upstud}
                setUpstud={setUpstud}
                Subject={Subject}
              />
            }
          ></Route>
          <Route
            exact
            path="/takeattend"
            element={
              <TakeAttend
                Subject={Subject}
                Branch={Branch}
                handleChangeBranch={handleChangeBranch}
                handleChange={handleChange}
                SelectedDate={SelectedDate}
                setSelectedDate={setSelectedDate}
              />
            }
          ></Route>
          <Route exact path="/createattend" element={<CreateAttend />}></Route>
          <Route
            exact
            path="/updatestud"
            element={
              <UpdateStud
                Subject={Subject}
                Branch={Branch}
                Upstud={Upstud}
                setUpstud={setUpstud}
              />
            }
          ></Route>
          <Route
            exact
            path="/selectstud"
            element={
              <SelectStud
                Subject={Subject}
                Branch={Branch}
                handleChangeBranch={handleChangeBranch}
                handleChange={handleChange}
              />
            }
          ></Route>
          <Route
            exact
            path="/makeattend"
            element={
              <MarkAttend
                Subject={Subject}
                handleChange={handleChange}
                Branch={Branch}
                SelectedDate={SelectedDate}
              />
            }
          ></Route>
          <Route
            exact
            path="/editteacher"
            element={
              <TeacherEdit userData={userData} setUserData={setUserData} />
            }
          ></Route>
          <Route
            exact
            path="/resetpassword/changepass"
            element={
              <Changepass userData={userData} setUserData={setUserData} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
