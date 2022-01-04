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
          <div className="row audit">
            <div className="col-12">
              <form className="d-flex filter_form">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Filters by users"
                    value={FilterByUser}
                    name="FilterByUser"
                    onChange={HandleFormChange}
                  />
                  <button
                    className="btn btn-transparent"
                    type="button"
                    onClick={() => setFilterUsersPopup(true)}
                  >
                    <img src={FilterSvg} alt="filter" className="img-fluid" />
                  </button>
                </div>
              </form>

              <div className="table-responsive">
                <table id="folders" className="w-100 table">
                  <thead>
                    <tr>
                      <td>User Name</td>
                      <td>Entity ID</td>
                      <td>Action</td>
                      <td>Prev. Date </td>
                      <td>Pre Value</td>
                      <td>New Value</td>
                      <td>Updated Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    {!!AuditListData && AuditListData.length ? (
                      AuditListData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className="media">
                                <span>
                                  <img
                                    // src={`../../asset/img/${item.profileImage}`}
                                    src={StaticProfile}
                                    alt="profile"
                                    className="img-fluid"
                                  />
                                </span>
                                <div className="media-body">
                                  <h6>{item.username}</h6>
                                  <p>{item.userRole}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <small className="id">{item.entityId}</small>
                            </td>
                            <td>
                              <span className="text-theme">{item.action}</span>
                            </td>
                            <td>
                              {/* 29 Jun 2020 */}
                              {item.previousDate}
                              <br />
                              <small>21:37</small>
                            </td>
                            <td>xxxxxxx</td>
                            <td>xxxxxxx</td>
                            {/* <td>07 May 2020</td> */}
                            <td>{item.updatedDate}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>

              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={6}
                marginPagesDisplayed={2}
                disableInitialCallback={true}
                initialPage={1}
                pageRangeDisplayed={2}
                disabledClassName={"disable-page"}
                // onPageChange={HandlePageClick}
                containerClassName={"pagination-styles"}
                // subContainerClassName={`pages pagination`}
                activeClassName={"active"}
              />

              {!!FilterUsersPopup ? (
                <CommonPopup
                  ModelClassName={"modal_user"}
                  OnClose={HandleCloseFilterPopup}
                >
                  <form className="row mt-4">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={AuditFilterState.Name}
                        name="Name"
                        onChange={HandleFilterStateChange}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Organization Search"
                        value={AuditFilterState.Organization}
                        name="Organization"
                        onChange={HandleFilterStateChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        // type="date"
                        // data-toggle="datepicker"
                        className="form-control"
                        placeholder="Start Date"
                        type="text"
                        onFocus={(e) => {
                          e.currentTarget.type = "date";
                          e.currentTarget.focus();
                        }}
                        onBlur={(e) => {
                          e.currentTarget.type = "text";
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        value={AuditFilterState.StartDate}
                        name="StartDate"
                        onChange={HandleFilterStateChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        className="form-control"
                        placeholder="End Date"
                        // this is for set the type of input on focus of the field
                        type="text"
                        onFocus={(e) => {
                          e.currentTarget.type = "date";
                          e.currentTarget.focus();
                        }}
                        // this is for set the type of input on outside click of the field
                        onBlur={(e) => {
                          e.currentTarget.type = "text";
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        value={AuditFilterState.EndDate}
                        name="EndDate"
                        onChange={HandleFilterStateChange}
                      />
                    </div>
                    <div className="col-12 d-flex mt-2">
                      <button
                        type="button"
                        className="btn btn-submit"
                        onClick={HandleCloseFilterPopup}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-theme ms-3"
                        onClick={HandleFilterSearch}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </CommonPopup>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuditComponent;
