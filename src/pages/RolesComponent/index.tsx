import React, { useEffect, useState } from "react";
import CommonPopup from "../../Components/CommonPopup";
import RolesConfigData from "../../Config/RolesConfig.json";
import StaticProfile from "../../asset/img/roles.svg";
import UserIconsSvg from "../../asset/img/users-icons.svg";
import DeleteIconSvg from "../../asset/img/delete-role.svg";
import PaginateIcon from "../../asset/img/pagination.svg";

// object structure for roles item
interface RolesListItem {
  id: string;
  name: string;
  role_for: string;
  organization: {
    id: string;
    name: string;
  };
}

const RolesComponent = () => {
  // create role name
  const [NewRoleName, setNewRoleName] = useState("" as any);

  // data for roles table
  const [RolesListData, setRolesListData] = useState([] as RolesListItem[]);

  // this is for create popup handling
  const [CreateRolePopup, setCreateRolePopup] = useState(false);

  // this is for create popup handling
  const [EditRolePopup, setEditRolePopup] = useState(false);

  // this is for delete popup handling
  const [DeleteRolePopup, setDeleteRolePopup] = useState(false);

  // this is for storing seleted data
  const [SelectedRoleItem, setSelectedRoleItem] = useState({});

  const [PermissonData, setPermissonData] = useState([] as any);

  // this is for show role settings popup
  const [SettingsPopup, setSettingsPopup] = useState(false);

  useEffect(() => {
    // ... your initial api call inside here
    setRolesListData([...RolesConfigData]);
  }, []);

  // for name set value to state
  const HandleFormChange = ({ target = {} }: any) => {
    let { name = "" as string, value = "" as string } = !!target ? target : {};

    switch (name) {
      case "NewRoleName":
        return setNewRoleName(value);
      default:
        return;
    }
  };

  // handling close create popup ( we need to clear the state values)
  const HandleCloseCreatePopup = () => {
    setCreateRolePopup(!true);
  };

  // handling close create popup ( we need to clear the state values)
  const HandleCloseEditPopup = () => {
    setEditRolePopup(!true);
  };

  // while on click of submit you can post data using api call
  const HandleCreateRole = () => {
    // ... ( your api code here )
    setCreateRolePopup(!true);
  };

  // while on click of submit you can post data using api call
  const HandleEditRole = () => {
    // ... ( your api code here )
    setEditRolePopup(!true);
  };

  const OnClickDelete = (item: any) => {
    setSelectedRoleItem(item);
    setDeleteRolePopup(true);
  };

  // handling close delete popup ( we need to clear the state values)
  const HandleCloseDeletePopup = () => {
    setSelectedRoleItem({});
    setDeleteRolePopup(!true);
  };

  // while on click of delete you can post data using api call
  const HandleDeleteRole = () => {
    // ... ( your api code here )
    setDeleteRolePopup(!true);
  };

  const OnClickSettings = (item: any) => {
    // get permissons list api call comes here
    let PermissonList = [
      {
        id: "string",
        resource: "Audit",
        action: "Read",
        description: "Read audit logs",
      },
      {
        id: "string",
        resource: "Audit",
        action: "Delete",
        description: "Read audit logs",
      },
      {
        id: "string",
        resource: "Audit",
        action: "Create",
        description: "Read audit logs",
      },
    ];
    setPermissonData(PermissonList as any);
    setSelectedRoleItem(item);
    setSettingsPopup(true);
  };

  // handling close delete popup ( we need to clear the state values)
  const HandleCloseSettingsPopup = () => {
    setSelectedRoleItem({});
    setSettingsPopup(!true);
  };

  return (
    <>
      <div className="page_header">
        <h1>Roles</h1>
      </div>
      <div className="container">
        <section className="administrator">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Administrator </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Roles
              </li>
            </ol>
          </nav>
          <div className="row roles">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <form className="d-flex search_form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for Roles"
                    aria-label="Search"
                    value={NewRoleName}
                    name="NewRoleName"
                    onChange={HandleFormChange}
                  />
                </form>
                <div>
                  <button
                    type="button"
                    className="btn-add"
                    data-bs-toggle="modal"
                    data-bs-target="#new_role"
                    onClick={() => setCreateRolePopup(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 57 57"
                      id="add"
                    >
                      <g id="Group_212" transform="translate(-1812 -423)">
                        <g id="Group_95" transform="translate(75 94)">
                          <g
                            id="Ellipse_41"
                            transform="translate(1737 329)"
                            fill="#f3f3f3"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle
                              cx="28.5"
                              cy="28.5"
                              r="28.5"
                              stroke="none"
                            ></circle>
                            <circle
                              cx="28.5"
                              cy="28.5"
                              r="27.5"
                              fill="none"
                            ></circle>
                          </g>
                          <g
                            id="Group_94"
                            transform="translate(1752.967 344.966)"
                          >
                            <rect
                              id="Rectangle_258"
                              width="25.067"
                              height="3.76"
                              rx="1.88"
                              transform="translate(0 10.653)"
                              fill="currentColor"
                            ></rect>
                            <rect
                              id="Rectangle_259"
                              width="25.067"
                              height="3.76"
                              rx="1.88"
                              transform="translate(14.413 0) rotate(90)"
                              fill="currentColor"
                            ></rect>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="col-12 my-4">
                <div className="row">
                  {!!RolesListData && RolesListData.length ? (
                    RolesListData.map((item, index) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-6" key={index}>
                          <div className="card">
                            <div className="media">
                              <img
                                // src={process.env.PUBLIC_URL + "/asset/img/roles.svg"}
                                src={StaticProfile}
                                className="img-fluid"
                                alt="roles"
                              />
                              <div className="media-body">
                                <h5>{item.name}</h5>
                                <p>
                                  <span>Users:1</span>{" "}
                                  <span> ID: {item.name}</span>
                                </p>
                              </div>
                              <span
                                className="action"
                                onClick={() => setEditRolePopup(true)}
                              >
                                <svg className="action_icon" width="15">
                                  <use xlinkHref={UserIconsSvg + "#edit"}></use>
                                </svg>
                              </span>
                              <span
                                className="action"
                                onClick={() => OnClickSettings(item)}
                                data-bs-toggle="modal"
                              >
                                <svg className="action_icon">
                                  <use
                                    xlinkHref={UserIconsSvg + "#settings"}
                                  ></use>
                                </svg>
                              </span>
                              <span
                                className="action"
                                data-bs-toggle="modal"
                                onClick={() => OnClickDelete(item)}
                              >
                                <svg className="action_icon" width="12">
                                  <use
                                    xlinkHref={UserIconsSvg + "#delete"}
                                  ></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="col-12 d-flex">
                <div
                  className="btn-group pagination"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-left">
                    <svg className="pagination_icon">
                      <use xlinkHref={PaginateIcon + "#left"}></use>
                    </svg>
                  </button>
                  <button type="button" className="btn btn-right">
                    <svg className="pagination_icon">
                      <use xlinkHref={PaginateIcon + "#right"}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!!CreateRolePopup ? (
          <CommonPopup
            ModelClassName={"modal_user"}
            Heading="Create Role"
            OnClose={HandleCloseCreatePopup}
          >
            <form className="row mt-4">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={NewRoleName}
                  name="NewRoleName"
                  onChange={HandleFormChange}
                />
              </div>
              <div className="col-12">
                <select placeholder="Organization Search">
                  <option hidden defaultChecked>
                    Organization Search
                  </option>
                  <option value={"1"}>Organization One</option>
                  <option value={"2"}>Organization Two</option>
                </select>
              </div>
              <div className="col-12 d-flex mt-2">
                <button
                  type="button"
                  className="btn btn-submit"
                  onClick={HandleCloseCreatePopup}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-theme ms-3"
                  onClick={HandleCreateRole}
                >
                  Submit
                </button>
              </div>
            </form>
          </CommonPopup>
        ) : (
          <></>
        )}
        {!!EditRolePopup ? (
          <CommonPopup
            ModelClassName={"modal_user"}
            Heading="Edit Role"
            OnClose={HandleCloseEditPopup}
          >
            <form className="row mt-4">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={NewRoleName}
                  name="NewRoleName"
                  onChange={HandleFormChange}
                />
              </div>
              <div className="col-12">
                <select placeholder="Organization Search">
                  <option hidden defaultChecked>
                    Organization Search
                  </option>
                  <option value={"1"}>Organization One</option>
                  <option value={"2"}>Organization Two</option>
                </select>
              </div>
              <div className="col-12 d-flex mt-2">
                <button
                  type="button"
                  className="btn btn-submit"
                  onClick={HandleCloseEditPopup}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-theme ms-3"
                  onClick={HandleEditRole}
                >
                  Update
                </button>
              </div>
            </form>
          </CommonPopup>
        ) : (
          <></>
        )}
        {!!DeleteRolePopup ? (
          <CommonPopup
            ModelClassName={"modal_user"}
            Heading="Confirm"
            OnClose={HandleCloseDeletePopup}
          >
            <form className="row mt-4">
              <div className="col-2 col-md-2">
                <img src={DeleteIconSvg} alt="delete" className="img-fluid" />
              </div>
              <div className="col-10 col-md-10">
                <p>Do you want to delete this role?</p>
              </div>
              <div className="col-12 d-flex mt-2">
                <button
                  type="button"
                  className="btn btn-submit"
                  onClick={HandleCloseDeletePopup}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-theme ms-3"
                  onClick={HandleDeleteRole}
                >
                  Delete
                </button>
              </div>
            </form>
          </CommonPopup>
        ) : (
          <></>
        )}
        {!!SettingsPopup ? (
          <CommonPopup
            Heading="Permissions - Biller"
            ModelClassName={" modal_permissions"}
            OnClose={HandleCloseSettingsPopup}
          >
            <div className="col-12">
              <div className="table-responsive">
                <table id="permissions" className="w-100 table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Resource</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!PermissonData && PermissonData.length ? (
                      PermissonData.map((per: any) => {
                        return (
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                ></label>
                              </div>
                            </td>
                            <td>
                              {per.resource} <br /> {per.description}
                            </td>
                            <td>{per.action}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </CommonPopup>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default RolesComponent;
