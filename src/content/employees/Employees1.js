import { Link } from "react-router-dom";
import "../../ui/css/style.css";
import pic1 from "../../ui/images/contacts/pic1.jpg";
import pic2 from "../../ui/images/contacts/pic2.jpg";
import pic3 from "../../ui/images/contacts/pic2.jpg";
function Employees() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Employees</h4>
                    <div>
                      <Link
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="offcanvas"
                        to="/"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        + Add Employee
                      </Link>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        + Invite Employee
                      </button>
                    </div>
                  </div>
                  <table id="empoloyees-tblwrapper" className="table">
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Email Address</th>
                        <th>Contact Number</th>
                        <th>Gender</th>
                        <th>Location</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>1002</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic1}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Liam Antony</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic2}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Noah Oliver</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic3}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Elijah James</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic1}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>James Antony</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic3}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>William Sokli</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic1}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>William Sokli</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic2}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Benjamin Chaa</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic2}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>William Sokli</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic3}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Ricky Antony</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic1}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>William Sokli</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic2}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>Ricky Antony</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>1001</span>
                        </td>
                        <td>
                          <div className="products">
                            <img
                              src={pic3}
                              className="avatar avatar-md"
                              alt=""
                            />
                            <div>
                              <h6>William Sokli</h6>
                              <span>Web Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Computer Science</span>
                        </td>
                        <td>
                          <span className="text-primary">abc@gmail.com</span>
                        </td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Employees;
