import { useState } from "react";
import { Accordion, Dropdown, DropdownButton } from "react-bootstrap";
import * as Feather from "react-feather";
import CommonPopup from "../../Components/CommonPopup";
import EndPointData from '../../Config/EndPointConfig.json'

const EndPoints = () => {

  const [IsIndivudualPopup, setIsIndivudualPopup] = useState(false);
  const [SelectedData, setSelectedData] = useState({} as any);

  const [RiskTypeFilter, setRiskTypeFilter] = useState(false);

  const OnSelectData = (data: any) => {
    setSelectedData(data);
    setIsIndivudualPopup(true);
  }

  const OnClickClosePopup = () => {
    setSelectedData({});
    setIsIndivudualPopup(!true);
  }

  const CheckLength = ([...value]) => {
    if (!!value && value.length) return true;
    return false;
  };

  const GetColor = (type: string) => {
    switch (type) {
      case 'Critical': return '#f75258';
      case 'Medium': return '#888888';
      case 'Safe': return '#44b24b';
      case 'High': return '#f1880e';
      case 'Low': return '#79c932';
      case 'All': return 'transparent';
      default: return '#f75258'
    }
  };

  const OnClickFilterButton = () => {
    setRiskTypeFilter(true)
  }

  const GetStatusElement = (type: string) => {
    return <span className="status-element" style={{ backgroundColor: GetColor(type) }}>{type}</span>
  }

  return (
    <>
      <div className="page_header">
        <h1>End Points</h1>
      </div>
      <div className="container">
        <div className="end-point-container">
          <table className="end-point-table">
            <thead>
              <tr>
                <th className="text-start">Device Name</th>
                <th></th>
                <th>Risk Level</th>
                <th>
                  {/* <Feather.Filter onClick={OnClickFilterButton} /> */}
                  {/* {
                    !!RiskTypeFilter ? <>
                      <div className="request-type-dropdown">
                        {['All', 'Critical', 'High', 'Medium', 'Low', 'Safe'].map(type => <div onClick={(e) => handleSelectType(type)} className="type-item">
                          {type}
                        </div>)}
                      </div>
                    </> : <></>
                  } */}
                  <Dropdown>
                    <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                      <Feather.Filter className="filter-button" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="status-type-dropdown">
                        {['All', 'Critical', 'High', 'Medium', 'Low', 'Safe'].map(type => <div className="type-item">
                          {/* {type} */}
                          <Dropdown.Item href="#/action-1"><Feather.Circle className="me-2" width={'10px'} height={'10px'} fill={GetColor(type)} stroke={GetColor(type)} /> {type}</Dropdown.Item>
                        </div>)}
                      </div>
                      {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                EndPointData.data.map(data => {
                  return <tr onClick={() => OnSelectData(data)} >
                    <td>
                      <span className="text-uppercase">
                        <b>{data.deviceName}</b>
                      </span><br />
                      {data.user.email}
                    </td>
                    <td>
                      <b>{data.osType}</b><br />
                      Lenovo / Laptop
                    </td>
                    <td className="text-center">{GetStatusElement(data.deviceVulnerability.severity)}</td>
                    <td className="text-center"><a role={'button'}><Feather.Info /></a></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {
        !!IsIndivudualPopup ? <><div className={"modal-backdrop fade show"}></div>
          <div
            className={"modal fade show end-point-popup"}
            id="filter"
            aria-labelledby="exampleModalLabel"
            style={{ display: "block", paddingLeft: "0px" }}
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title"><b>End points - {SelectedData.deviceName} - Idle</b></h5>
                  <button
                    type="button"
                    onClick={OnClickClosePopup}
                    className="btn-close"
                  ></button>
                  <>
                    {/* <div>
                    <a role={'button'} className="me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.398" height="21.746" viewBox="0 0 24.398 21.746">
                        <g id="Group_100" data-name="Group 100" transform="translate(0 12.362)">
                          <g id="Group_99" data-name="Group 99" transform="translate(0)">
                            <path id="Path_6" data-name="Path 6" d="M40.526,307.2a.938.938,0,0,0-.938.938v5.63a.938.938,0,0,1-.938.938H19.881a.938.938,0,0,1-.938-.938v-5.63a.938.938,0,1,0-1.877,0v5.63a2.815,2.815,0,0,0,2.815,2.815H38.649a2.815,2.815,0,0,0,2.815-2.815v-5.63A.938.938,0,0,0,40.526,307.2Z" transform="translate(-17.066 -307.2)" fill="#343434" />
                          </g>
                        </g>
                        <g id="Group_102" data-name="Group 102" transform="translate(5.142 -10.053)">
                          <g id="Group_101" data-name="Group 101" transform="translate(2.522 10.053)">
                            <path id="Path_7" data-name="Path 7" d="M145.584,13.1a.758.758,0,0,0-1.052,0l-2.5,2.494V.758a.758.758,0,0,0-1.515,0V15.594L138.026,13.1a.758.758,0,0,0-1.071,1.071l3.788,3.788a.758.758,0,0,0,1.071,0h0l3.788-3.788A.757.757,0,0,0,145.584,13.1Z" transform="translate(-136.742)" fill="#343434" />
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a role={'button'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.081" height="22.984" viewBox="0 0 12.081 22.984">
                        <path id="Path_8" data-name="Path 8" d="M122,1.326h-1.777V0h-4.641V1.326H113.9a1.991,1.991,0,0,0-1.989,1.989V21a1.991,1.991,0,0,0,1.989,1.989H122A1.991,1.991,0,0,0,123.99,21V3.315A1.991,1.991,0,0,0,122,1.326ZM122.664,21a.664.664,0,0,1-.663.663h-8.1a.663.663,0,0,1-.663-.663V3.315a.664.664,0,0,1,.663-.663H122a.664.664,0,0,1,.663.663Zm-.723-.122h-7.984V17.964h7.984v2.909Zm0-3.626h-7.984V14.339h7.984v2.909Zm0-3.626h-7.984V10.713h7.984v2.909Zm0-3.618h-7.984V7.1h7.984V10h0Z" transform="translate(-111.908)" fill="#343434" />
                      </svg>
                    </a>
                  </div> */}
                  </>
                </div>
                <div className="modal-body">
                  <div className="popup-input my-3">
                    <div className="text-container">
                      <small>Windows Print Spooler Remote Code Execution Vulnerability </small><br />
                      <small>Windows Print Spooler Remote Code Execution Vulnerability </small>
                    </div>
                    {/* <input type={'text'} placeholder={'Windows Print Spooler Remote Code Execution Vulnerability'} /> */}
                    <span>
                      <button className="status-button">High</button>
                      <Dropdown>
                        <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                  </div>
                  <div className="row system-info-container">
                    <div className="col-6 mb-3">
                      <div className="info-item">
                        <p>DEVICE - <b>Laptop</b></p>
                        <p>NAME - <b>{SelectedData.deviceName}</b></p>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="info-item">
                        <p>OS - <b>{SelectedData.osType}</b></p>
                        <p>USER - <b>{SelectedData.user.email}</b></p>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="info-item">
                        <p><b>DEVICE RISK STATUS </b></p>
                        {/* <span className="risk-status">{SelectedData.deviceVulnerability.severity}</span> */}
                        {GetStatusElement(SelectedData.deviceVulnerability.severity)}
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="info-item">
                        <p><b>VULNERABILITIES</b></p>
                        <p>CVE-2021-34527</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-content mt-3">
                <div className="modal-body">
                  <Accordion defaultActiveKey={'0'}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><span style={{ fontSize: '12px' }} className="text-dark">VULNERABILITIES</span></Accordion.Header>
                      <Accordion.Body>
                        <div className="vulnerability-container">
                          {/* {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9 as number].map((item: any) => {
                              return <div className="mb-2">
                                <a href="/link" className="text-dark">CVE-2021-34527</a>
                              </div>
                            })
                          } */}
                          {
                            !!CheckLength([...SelectedData.deviceVulnerability.vulnerabilityInfo]) && [...SelectedData.deviceVulnerability.vulnerabilityInfo].map((item: any) => {
                              return <div className="mb-2">
                                <a href="/link" className="text-dark">{item.cve}</a>
                              </div>
                            })
                          }
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div></> : <></>
      }
    </>
  );
};

export default EndPoints;
