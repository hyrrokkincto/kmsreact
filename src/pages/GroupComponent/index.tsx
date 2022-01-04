import { useEffect, useState } from "react";
import * as Feather from "react-feather";
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
    </>
  );
};

export default GroupComponent;
