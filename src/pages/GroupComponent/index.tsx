import { useEffect, useState } from "react";
import * as Feather from "react-feather";
import UserIconsSvg from "../../asset/img/users-icons.svg";
import CommonPopup from "../../Components/CommonPopup";
import GroupConfigData from "../../Config/GroupConfig.json";

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

// const ReactMultiSelectCheckboxes = require("react-multiselect-checkboxes");

let UserArray = [
  {
    id: 1,
    value: "9ce42304-b732-4791-9731-6f299b6df8c7",
    label: "User 1",
  },
  {
    id: 2,
    value: "90419f06-7d07-45c8-bcec-d675096fe27f",
    label: "User 2",
  },
  {
    id: 3,
    value: "a23521da-0a48-4ef6-baa2-d727704f65c2",
    label: "User 3",
  },
  {
    id: 4,
    value: "34b2b58a-0123-49e2-b2de-1eef0922139b",
    label: "User 4",
  },
  {
    id: 5,
    value: "0fceaec7-fb46-4aef-994b-863a97130168",
    label: "User 5",
  },
  {
    id: 6,
    value: "b68c6b76-bbe0-49a6-8a90-209b8d88d353",
    label: "User 6",
  },
];

let UserArrayLatest = [
  {
    groupSlug: 1,
    userSlug: "9ce42304-b732-4791-9731-6f299b6df8c7",
    userName: "User 1",
    userEmail: "User.1@gmail.com",
  },
  {
    groupSlug: 2,
    userSlug: "90419f06-7d07-45c8-bcec-d675096fe27f",
    userName: "User 2",
    userEmail: "User.2@gmail.com",
  },
  {
    groupSlug: 3,
    userSlug: "a23521da-0a48-4ef6-baa2-d727704f65c2",
    userName: "User 3",
    userEmail: "User.3@gmail.com",
  },
  {
    groupSlug: 4,
    userSlug: "34b2b58a-0123-49e2-b2de-1eef0922139b",
    userName: "User 4",
    userEmail: "User.4@gmail.com",
  },
  {
    groupSlug: 5,
    userSlug: "0fceaec7-fb46-4aef-994b-863a97130168",
    userName: "User 5",
    userEmail: "User.5@gmail.com",
  },
  {
    groupSlug: 6,
    userSlug: "b68c6b76-bbe0-49a6-8a90-209b8d88d353",
    userName: "User 6",
    userEmail: "User.6@gmail.com",
  },
];
// object structure for roles item
interface GroupListItem {
  groupName: string;
  settingsName: string;
  groupSlug: string;
  orgSlug: string;
  profileImage: string;
}
interface UserListItem {
  id: number;
  value: string;
  label: string;
}
interface UserListItemLatest {
  userSlug: string;
  userName: string;
  userEmail: string;
  groupSlug: string;
}

const GroupComponent = () => {
  // data for group list
  const [GroupList, setGroupList] = useState([] as GroupListItem[]);

  // the state for stroing new group name
  const [NewGroupName, setNewGroupName] = useState("" as string);

  // the state for stroing new create popup group
  const [CreateGroupPopup, setCreateGroupPopup] = useState(false);

  // the state for stroing edit popup group
  const [EditGroupPopup, setEditGroupPopup] = useState(false);

  // this is for storing seleted data
  const [SelectedGroupItem, setSelectedGroupItem] = useState(
    {} as GroupListItem
  );

  // add user popup handling
  const [AddUserPopup, setAddUserPopup] = useState(false);

  // add search user popup handling
  const [SearchUserPopup, setSearchUserPopup] = useState(false);

  const [SelectedUserList, setSelectedUserList] = useState(
    [] as UserListItem[]
  );

  useEffect(() => {
    // ... your initial api call inside here
    setGroupList([...GroupConfigData]);
  }, []);

  // for name set value to state
  const HandleFormChange = ({ target = {} }: any) => {
    let { name = "" as string, value = "" as string } = !!target ? target : {};
    switch (name) {
      case "NewGroupName":
        return setNewGroupName(value);
      default:
        return;
    }
  };

  // handling close create popup ( we need to clear the state values)
  const HandleCloseCreatePopup = () => {
    setCreateGroupPopup(!true);
    !!NewGroupName && setNewGroupName("");
  };

  // handling close edit popup ( we need to clear the state values)
  const HandleCloseEditPopup = () => {
    setEditGroupPopup(!true);
    !!NewGroupName && setNewGroupName("");
  };

  //   handle create group popup
  const HandleCreateGropup = () => {
    //   your create api call here
    HandleCloseCreatePopup();
  };

  //   handle edit group popup
  const HandleEditGropup = () => {
    //   your edit api call here
    HandleCloseEditPopup();
  };

  //   onclick edit group
  const OnClickEditGroup = (group: any) => {
    setSelectedGroupItem(group);
    setEditGroupPopup(true);
  };

  const OnClickAddUser = (group: any) => {
    setSelectedGroupItem(group);
    setAddUserPopup(true);
  };

  const OnClickSearchUser = (group: any) => {
    setSelectedGroupItem(group);
    setSearchUserPopup(true);
  };

  // handling popup close when outside click
  const HandleDropdownBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setTimeout(() => {
        !!AddUserPopup && setAddUserPopup(false);
        !!SearchUserPopup && setSearchUserPopup(false);
      }, 500);
    }
  };

  const OnChangeUserSelection = (value) => {
    setSelectedUserList(value);
  };

  return (
    <>
      <div className="page_header">
        <h1>Groups</h1>
      </div>
      <div className="container">
        <section className="administrator">
          <div className="row organizations">
            <div className="col-12">
              <div className="text-end">
                <button
                  type="button"
                  className="btn-add"
                  data-bs-toggle="modal"
                  data-bs-target="#new_role"
                  onClick={() => setCreateGroupPopup(true)}
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
                          stroke-width="2"
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
              <div className="col-12 my-4">
                <div className="row">
                  {!!GroupList && GroupList.length ? (
                    GroupList.map((group) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className="card">
                            <span
                              className="action"
                              onClick={() => OnClickEditGroup(group)}
                            >
                              <svg className="action_icon" width="15">
                                <use xlinkHref={UserIconsSvg + "#edit"}></use>
                              </svg>
                            </span>
                            <div className="body">
                              <img
                                src={group.profileImage}
                                alt="profile"
                                className="profile_picture img-fluid mb-3"
                              />
                              <h5>{group.groupName}</h5>
                              <p>{group.settingsName}</p>
                            </div>
                            <div className="footer">
                              <span
                                className="action add-user-parent"
                                tabIndex={1}
                                onClick={() => OnClickAddUser(group)}
                                onBlur={(event) => HandleDropdownBlur(event)}
                              >
                                <svg className="action_icon">
                                  <use
                                    xlinkHref={UserIconsSvg + "#new-user"}
                                  ></use>
                                </svg>
                                {!!AddUserPopup &&
                                SelectedGroupItem.groupName ===
                                  group.groupName ? (
                                  <div
                                    className="add-user-container"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                    }}
                                  >
                                    <div className="w-100 p-4">
                                      <input
                                        type={"text"}
                                        className="search-text-input"
                                        onClick={(event) =>
                                          event.preventDefault()
                                        }
                                      />
                                    </div>
                                    <div className="user-list-contianer">
                                      <div className="user-item">
                                        <span>User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div>
                                      <div className="user-item">
                                        <span>User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div>
                                      <div className="user-item">
                                        <span>User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-theme ms-auto"
                                    >
                                      Ok
                                    </button>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </span>
                              <span
                                className="action search-user-parent"
                                tabIndex={1}
                                onClick={() => OnClickSearchUser(group)}
                                onBlur={(event) => HandleDropdownBlur(event)}
                              >
                                <svg className="action_icon">
                                  <use
                                    xlinkHref={UserIconsSvg + "#group"}
                                  ></use>
                                </svg>
                                {!!SearchUserPopup &&
                                SelectedGroupItem.groupName ===
                                  group.groupName ? (
                                  <div
                                    className="search-user-container"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                    }}
                                  >
                                    <div className="w-100 p-4">
                                      {/* <input
                                        type={"text"}
                                        className="search-text-input"
                                        onClick={(event) =>
                                          event.preventDefault()
                                        }
                                      /> */}
                                      <ReactMultiSelectCheckboxes
                                        options={UserArray}
                                        onChange={OnChangeUserSelection}
                                      />
                                    </div>
                                    <div className="user-list-contianer">
                                      {!!SelectedUserList &&
                                      SelectedUserList.length ? (
                                        SelectedUserList.map((user) => {
                                          return (
                                            <div
                                              key={user.value}
                                              className="user-item"
                                            >
                                              <span>{user.label}</span>
                                              <span>
                                                <Feather.XCircle className="close-svg" />
                                              </span>
                                            </div>
                                          );
                                        })
                                      ) : (
                                        <></>
                                      )}
                                      {/* <div className="user-item">
                                        <span>Selected User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div>
                                      <div className="user-item">
                                        <span>Selected User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div>
                                      <div className="user-item">
                                        <span>Selected User 1</span>
                                        <span>
                                          <Feather.XCircle className="close-svg" />
                                        </span>
                                      </div> */}
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-theme ms-auto ok-button"
                                    >
                                      Ok
                                    </button>
                                  </div>
                                ) : (
                                  <></>
                                )}
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
            </div>
          </div>
        </section>
        {!!CreateGroupPopup ? (
          <CommonPopup
            ModelClassName={"modal_user"}
            Heading="Create Group Name"
            OnClose={HandleCloseCreatePopup}
          >
            <form className="row mt-4">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Group Name"
                  value={NewGroupName}
                  name="NewGroupName"
                  onChange={HandleFormChange}
                />
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
                  onClick={HandleCreateGropup}
                >
                  Submit
                </button>
              </div>
            </form>
          </CommonPopup>
        ) : (
          <></>
        )}

        {!!EditGroupPopup ? (
          <CommonPopup
            ModelClassName={"modal_user"}
            Heading="Edit Group Name"
            OnClose={HandleCloseEditPopup}
          >
            <form className="row mt-4">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Group Name"
                  value={NewGroupName}
                  name="NewGroupName"
                  onChange={HandleFormChange}
                />
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
                  onClick={HandleEditGropup}
                >
                  Update
                </button>
              </div>
            </form>
          </CommonPopup>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GroupComponent;
