import { useState } from "react";
import * as Feather from "react-feather";

interface RequestTypes {
  value: string,
  label: string
}

const ServiceRequest = () => {

  const [SelectedRequestType, setSelectedRequestType] = useState({ value: 'orgAccountClose', label: 'Close my Organization account' } as RequestTypes);
  const [RequestTypeList, setRequestTypeList] = useState([
    { value: 'accountClose', label: 'Close my account' },
    { value: 'orgAccountClose', label: 'Close my Organization account' },
    { value: 'swarmIssue', label: 'Report issues in the Swarm application' },
    { value: 'swarmHelp', label: 'Need help in using Swarm application' },
    { value: 'others', label: 'Other queries/complaints' },
  ] as RequestTypes[]);

  const [RequestTypeDropdown, setRequestTypeDropdown] = useState(false);
  const [Message, setMessage] = useState('');

  const handleSelectType = (props: RequestTypes) => {
    setSelectedRequestType(prev => ({ ...prev, ...props }))
  }

  const handleBlurDropdown = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setTimeout(() => {
        !!RequestTypeDropdown && setRequestTypeDropdown(false);
      }, 300);
    }
  };

  const resetStates = () => {
    setMessage('');
    setSelectedRequestType({ value: 'orgAccountClose', label: 'Close my Organization account' })
  }
  const handleSubmitRequest = () => {
    // your api code comes here
    resetStates()
  }

  return (
    <>
      <div className="page_header">
        <h1>Service Request</h1>
      </div>
      <div className="container">
        <div className="service-request-container">
          <div className="contianer">
            <div className="row">
              <div className="col-8">
                <div className="FAIC mb-4">
                  <div className="w-25">
                    <h4>Request Form</h4>
                  </div>
                  <div className="w-75">
                    <div className="request-form-select"
                      onBlur={(event) => handleBlurDropdown(event)}
                    >
                      <label>{SelectedRequestType.label}</label>
                      <button onClick={() => setRequestTypeDropdown(RequestTypeDropdown => !RequestTypeDropdown)}>
                        <Feather.ChevronDown />
                      </button>
                      {
                        !!RequestTypeDropdown ? <>
                          <div className="request-type-dropdown">
                            {RequestTypeList.map(type => <div onClick={(e) => handleSelectType(type)} className="type-item">{type.label}</div>)}
                          </div>
                        </> : <></>
                      }
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="w-25">
                    <h4>Message:</h4>
                  </div>
                  <div className="w-75">
                    <textarea className="req-form-textarea mb-3" value={Message} onChange={(eve) => setMessage(eve.target.value)} rows={8} placeholder="Message Here" />
                    <div className="FJCE">
                      <button className="btn btn-theme-primary me-3" onClick={() => handleSubmitRequest()}>Submit Request</button>
                      <button className="btn btn-theme-secondary" onClick={() => resetStates()}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img src={process.env.PUBLIC_URL + '/assets/img/reading-girl.png'} alt="reading-girl" className="reading-girl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRequest;
