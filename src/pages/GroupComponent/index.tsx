import { useEffect, useState } from "react";
import UserIconsSvg from "../../asset/img/users-icons.svg";
import CommonPopup from "../../Components/CommonPopup";
import GroupConfigData from "../../Config/GroupConfig.json";

// object structure for roles item
interface GroupListItem {
  groupName: string;
  settingsName: string;
  groupSlug: string;
  orgSlug: string;
  profileImage: string;
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
  const [SelectedGroupItem, setSelectedGroupItem] = useState({});

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
                                className="action"
                                data-bs-toggle="modal"
                                data-bs-target="#new_user"
                              >
                                <svg className="action_icon">
                                  <use
                                    xlinkHref={UserIconsSvg + "#new-user"}
                                  ></use>
                                </svg>
                              </span>
                              <span
                                className="action"
                                data-bs-toggle="modal"
                                data-bs-target="#new_user"
                              >
                                <svg className="action_icon">
                                  <use
                                    xlinkHref={UserIconsSvg + "#group"}
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
