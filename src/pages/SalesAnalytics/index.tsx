import React, { useEffect, useState } from "react";
import {Form} from 'react-bootstrap'
import SalesAnalyticsConfigData from "../../Config/SalesAnalyticsConfig.json"
import * as Feather from 'react-feather';
import ReactPaginate from "react-paginate";

interface SalesListItem {
  invoiceId: string;
  contractId: string;
  invoiceDate: string;
  licenseCount: string;
  freeCount: string;
  activatedCount: string;
  deactivatedCount: string;
  expiredCount: string;
  dispatchedCount: string;
  repairsCount: string;
} 
const SalesAnalytics = () => { 
  
  const HandlePageClick = (page) => {
    // your selected page on ( page.selected )
    // (...) your api call comes here
  }

const [SalesAnalyticsList, setSalesAnalyticsList] = useState([] as SalesListItem[]);

  useEffect(() => {
      // ... your initial api call inside here
  
    setSalesAnalyticsList([...SalesAnalyticsConfigData]); 
  }, []); 
    return ( 
      <>  
        <div className="page_header">
            <h1>Sales Analytics</h1>
        </div>
        <div className="custom-container">
        <div className="filter">
            <div className='row align-items-center justify-content-end'>
                <div className='col-md-10 col-lg-10 col-xl-7'>
                    <div className='row align-items-center justify-content-end'>
                        <div className='col-md-4 mb-3'> 
                            <Form.Group controlId="exampleForm.ControlInput1"> 
                              <Form.Control type="date" />
                            </Form.Group>
                        </div>
                        <div className='col-md-4 mb-3'> 
                          <Form.Group controlId="exampleForm.ControlInput1"> 
                            <Form.Control type="date" />
                          </Form.Group>
                        </div>
                        <div className='col-md-3 mb-3 text-xl-center'> 
                            <button className="btn btn-theme-primary me-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tabel-container table-responsive">
            <table className="com-table">
                <thead>
                <tr>
                    <td>Invoice ID</td>
                    <td>Contract ID</td>
                    <td>Date</td>
                    <td>Licenses</td>
                    <td>Free</td>
                    <td>Activated</td>
                    <td>Deactivated</td>
                    <td>Expired</td>
                    <td>Dispatched</td>
                    <td>Repairs</td>
                </tr>
                </thead>
                <tbody>
                {!!SalesAnalyticsList && SalesAnalyticsList.length ? (
                SalesAnalyticsList.map((item, index) => {
                 return (
                    <tr key={index}>
                        <td>{item.invoiceId}</td>
                        <td>{item.contractId}</td>
                        <td>{item.invoiceDate}</td>
                        <td>{item.licenseCount}</td>
                        <td>{item.freeCount}</td>
                        <td>{item.activatedCount}</td>
                        <td>{item.deactivatedCount}</td>
                        <td>{item.expiredCount}</td>
                        <td>{item.dispatchedCount}</td>
                        <td>{item.repairsCount}</td>
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
                forcePage={0}
                pageRangeDisplayed={2}
                disabledClassName={"disable-page"}
                onPageChange={HandlePageClick}
                containerClassName={"pagination-styles"}
                // subContainerClassName={`pages pagination`}
                activeClassName={"active"}
              />
        </div>
  </>
    )
  } 

export default SalesAnalytics