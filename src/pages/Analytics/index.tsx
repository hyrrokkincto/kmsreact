import React, { useState, useEffect } from "react";
import moment from "moment";
import * as Feather from "react-feather";
import HeadingComponent from "../../Components/HeadingComponent";
import AnalyticsConfigData from "../../Config/NewAnalyticsConfig.json";
import RegOrgConfigData from "../../Config/NewRegOrgConfig.json";
import Select from "react-select";
import { postData } from "../../api";
import urls from "../../api/urls";
import CommonLoader from "../../Components/CommonLoader";
import ReactPaginate from "react-paginate";

const Analytics = () => {
  const [Loader, setLoader] = useState(false);
  const [OrgList, setOrgList] = useState([] as any);
  const [IsFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [FilterState, setFilterState] = useState({
    userId: "",
    deviceId: "",
    keyState: "",
    KeyExpiryDate: "",
  });

  useEffect(() => {
    const Temp: any = [{ value: "", label: "Select Organization" }];
    if (!!RegOrgConfigData.data.data && RegOrgConfigData.data.data.length) {
      RegOrgConfigData.data.data.map((result) => {
        Temp.push({ value: result.id, label: result.name });
      });
    }
    setOrgList([...Temp]);
  }, []);

  const handleDropdownClick = (event: any) => {
    if (!IsFilterDropdownOpen) return setIsFilterDropdownOpen(true);
    else return setIsFilterDropdownOpen(!true);
  };

  const CloseFilterDropdown = () => {
    setFilterState((prev) => ({
      ...prev,
      userId: "",
      deviceId: "",
      keyState: "",
    }));
    setIsFilterDropdownOpen(false);
  };

  const HandleFilter = () => {
    setLoader(true);
    postData(
      urls.FilterData,
      {},
      {
        orgId: "",
        userId: FilterState.userId,
        deviceId: FilterState.deviceId,
        keyState: FilterState.keyState,
      }
    ).then((result) => {
      CloseFilterDropdown();
      setLoader(!true);
    });

    setTimeout(() => setLoader(!true), 2000);
  };

  const HandleDropdownBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setTimeout(() => {
        !!IsFilterDropdownOpen && setIsFilterDropdownOpen(false);
      }, 500);
    }
  };

  const HandleOnChangeFilter = (event: any) => {
    event.stopPropagation();
    let { target } = event;
    setFilterState((prev) => ({ ...prev, [target.name]: target.value }));
  };
  return (
    <>
      <CommonLoader Load={Loader} />
      <HeadingComponent name="Analytics" />
      <div className="body-usable-container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 col-lg-6">
            {/* <Select
                            value={''}
                            // onChange={(e) => HandleManualChanges(e, 'SelectedTransactionType')}
                            name="SelectedTransactionType"
                            options={!!OrgList ? OrgList : []}
                            style={{ width: '25px' }}
                            classNamePrefix="select"
                            placeholder='Select Organization'
                        /> */}
            <input className="form-controls" placeholder="Enter Organization" />
            {/* <button className='com-button ms-3'>Go</button> */}
          </div>
          <div className="col-12 col-md-6 col-lg-6 FJCEAIC mt-4 mt-md-0 custom-filter-dropdown">
            <div
              className="com-select FJCSAIC custom-filter-dropdown"
              tabIndex={2}
              onBlur={(event) => HandleDropdownBlur(event)}
              onClick={(event) => handleDropdownClick(event)}
            >
              <span>Select Criteria</span>
              <div
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className={`dropdown-content${!!IsFilterDropdownOpen ? " d-block" : " d-none"
                  }`}
              >
                <input
                  className="dropdown-input"
                  onClick={(event) => event.preventDefault()}
                  onChange={(event) => HandleOnChangeFilter(event)}
                  value={FilterState.userId}
                  name="userId"
                  placeholder="User Name"
                />
                <input
                  className="dropdown-input"
                  onClick={(event) => event.preventDefault()}
                  onChange={(event) => HandleOnChangeFilter(event)}
                  value={FilterState.deviceId}
                  name="deviceId"
                  placeholder="Devices Name"
                />
                <input
                  className="dropdown-input"
                  onClick={(event) => event.preventDefault()}
                  onChange={(event) => HandleOnChangeFilter(event)}
                  value={FilterState.keyState}
                  name="keyState"
                  placeholder="Key States"
                />
                <input
                  className="dropdown-input"
                  onChange={(event) => HandleOnChangeFilter(event)}
                  value={FilterState.KeyExpiryDate}
                  name="KeyExpiryDate"
                  type="date"
                  placeholder="Key Enpiry Date"
                />
                <button className="com-button" onClick={() => HandleFilter()}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row dashboard-chart d-none">
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card-container orange">
              <div className="FJCB FDC">
                <div>Users</div>
                <h4>20</h4>
              </div>
              <div className="FJCCAIC">
                <Feather.Users />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card-container blue">
              <div className="FJCB FDC">
                <div>Devices</div>
                <h4>23</h4>
              </div>
              <div className="FJCCAIC">
                <Feather.Smartphone />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card-container black">
              <div className="FJCB FDC">
                <div>Keys</div>
                <h4>66</h4>
              </div>
              <div className="FJCCAIC">
                <Feather.Key />
              </div>
            </div>
          </div>
        </div>
        <div className="tabel-container">
          <table className="com-table">
            <thead>
              <tr>
                <td>Key ID</td>
                <td>Created At</td>
                <td>User</td>
                <td>Device</td>
                <td>Key Expires At</td>
                <td>Key State</td>
              </tr>
            </thead>
            <tbody>
              {!!AnalyticsConfigData.data.data &&
                AnalyticsConfigData.data.data.length ? (
                AnalyticsConfigData.data.data.map((result) => {
                  return (
                    <tr>
                      <td>{result.keyId}</td>
                      <td>{moment(result.createdAt).format("DD-MM-YYYY")}</td>
                      <td>{result.userId}</td>
                      <td>{result.deviceId}</td>
                      <td>
                        {moment(result.keyExpirationTime).format("DD-MM-YYYY")}
                      </td>
                      <td>
                        {!!result.keyState ? (
                          <span
                            className={
                              result.keyState === "Active" ? "text-sucess" : ""
                            }
                          >
                            Active
                          </span>
                        ) : (
                          <span className="text-danger">In Active</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
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
            containerClassName={"pagination"}
            // subContainerClassName={`pages pagination`}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default Analytics;
