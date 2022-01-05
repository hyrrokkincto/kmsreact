import {
  Accordion,
  Col,
  Container,
  Dropdown,
  Image,
  Row,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Header from "../../components/header";
import * as Feather from "react-feather";
import { useEffect, useState } from "react";
import ActivityLogsData from "../../configs/activityLogsConfig.json";

// object structure for activiy log item
interface ActivityLogItem {
  date: string;
  time: string;
  activityType: string;
  noOfFiles: string;
  Errors: string;
}

const Home = () => {
  // state for stroing the log data
  const [ActivityLogsList, setActivityLogsList] = useState(
    [] as ActivityLogItem[]
  );

  useEffect(() => {
    //  (...) your api call comes here to get and store log data
    setActivityLogsList([...ActivityLogsData]);
  }, []);

  return (
    <>
      <Header />
      <section className="dashbaord-container">
        <Container>
          <Row>
            <Col md={3} className="FJCCAIC">
              <Image
                className="pc-image"
                src={process.env.PUBLIC_URL + "/assets/img/pc.svg"}
              />
            </Col>
            <Col md={9} className="dashboard-title-card">
              <h3>YOUR DATA IN PC ARE PROTECTED AND BACKED UP</h3>
              <p>
                Your files are buzzed safely against Hackers and malwares and
                stored in the backup.
              </p>
            </Col>
            <Col sm={6} md={3}>
              <div className="card-container">
                <Dropdown className="options-dropdown">
                  <Dropdown.Toggle to={"#"} as={NavLink}>
                    <Feather.MoreHorizontal />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right">
                    <ul>
                      <li>
                        <Link to={`/`}>
                          <i className="fas fa-envelope" /> Open
                        </Link>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
                <Image src={process.env.PUBLIC_URL + "/assets/img/buzz.svg"} />
                <p>Files</p>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="card-container">
                <Dropdown className="options-dropdown">
                  <Dropdown.Toggle to={"#"} as={NavLink}>
                    <Feather.MoreHorizontal />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right">
                    <ul>
                      <li>
                        <Link to={`/`}>
                          <i className="fas fa-envelope" /> Open
                        </Link>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
                <Image
                  src={process.env.PUBLIC_URL + "/assets/img/un-buzz.svg"}
                />
                <p>Files</p>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="card-container">
                <Dropdown className="options-dropdown">
                  <Dropdown.Toggle to={"#"} as={NavLink}>
                    <Feather.MoreHorizontal />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right">
                    <ul>
                      <li>
                        <Link to={`/`}>
                          <i className="fas fa-envelope" /> Open
                        </Link>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
                <Image
                  src={process.env.PUBLIC_URL + "/assets/img/selected-buzz.svg"}
                />
                <p>Files</p>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="card-container">
                <Dropdown className="options-dropdown">
                  <Dropdown.Toggle to={"#"} as={NavLink}>
                    <Feather.MoreHorizontal />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right">
                    <ul>
                      <li>
                        <Link to={`/`}>
                          <i className="fas fa-envelope" /> Open
                        </Link>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
                <Image
                  src={process.env.PUBLIC_URL + "/assets/img/selected-fold.svg"}
                />
                <p>Files</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {!!ActivityLogsList && ActivityLogsList.length ? (
                <Accordion className="dashboard-accordion" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Activity Logs</Accordion.Header>
                    <Accordion.Body>
                      <table className="dashboard-table-container">
                        <thead>
                          <tr>
                            <th>Date & Time</th>
                            <th>Operation Type</th>
                            <th>Number of files</th>
                            <th>Errors</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ActivityLogsList.map((log, index) => {
                            return (
                              <tr key={index + JSON.stringify(log.date)}>
                                <td>
                                  {log.date} / {log.time}
                                </td>
                                <td>{log.activityType}</td>
                                <td>
                                  <label className="no-of-files">
                                    <b>{log.noOfFiles}</b> <sup>Files</sup>
                                  </label>
                                </td>
                                <td>{log.Errors}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
