import React, { useEffect, useState } from "react";
import FilterSvg from "../../asset/img/filter.svg";
import CommonPopup from "../../Components/CommonPopup";
import AuditConfigData from "../../Config/AuditConfig.json";
import StaticProfile from "../../asset/img/1.png";
import ReactPaginate from "react-paginate";

// object structure for popup form state fields
interface AuditFilterStateObject {
  Name: string;
  Organization: string;
  StartDate: string;
  EndDate: string;
}

// object structure for popup form state fields
interface AuditListItem {
  username: string;
  userRole: string;
  entityId: string;
  action: string;
  previousDate: string;
  previousValue: string;
  newValue: string;
  updatedDate: string;
  auditSlug: string;
  profileImage: string;
}

const AuditComponent = () => {
  // filter by user state
  const [FilterByUser, setFilterByUser] = useState("" as any);

  // this is for popup handling
  const [FilterUsersPopup, setFilterUsersPopup] = useState(false);

  // popup form state fields
  const [AuditFilterState, setAuditFilterState] = useState({
    Name: "",
    Organization: "",
    StartDate: "",
    EndDate: "",
  } as AuditFilterStateObject);

  // data for audit table
  const [AuditListData, setAuditListData] = useState([] as AuditListItem[]);

  // for user name set value to state
  const HandleFormChange = ({ target = {} }: any) => {
    let { name = "" as string, value = "" as string } = !!target ? target : {};

    switch (name) {
      case "FilterByUser":
        return setFilterByUser(value);
      default:
        return;
    }
  };

  useEffect(() => {
    // ... your initial api call inside here

    setAuditListData([...AuditConfigData]);
  }, []);

  // for set value to state filter fields
  const HandleFilterStateChange = ({ target = {} }: any) => {
    let { name = "" as string, value = "" as string } = !!target ? target : {};
    setAuditFilterState((i) => ({ ...i, [name]: value }));
  };

  // handling close filter ( we need to clear the state values)
  const HandleCloseFilterPopup = () => {
    setFilterUsersPopup(!true);
    setAuditFilterState((i) => ({
      ...i,
      Name: "",
      Organization: "",
      StartDate: "",
      EndDate: "",
    }));
  };

  // while on click of search you can search using api call
  const HandleFilterSearch = () => {
    // ... ( your api code here )
    setFilterUsersPopup(!true);
  };

  return (
    <>
      <div className="page_header">
        <h1>Audit</h1>
      </div>
      <div className="container">
        <section className="administrator">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/admin/audit">Administrator </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Audit
              </li>
            </ol>
          </nav>
        </section>
      </div>
    </>
  );
};

export default AuditComponent;
