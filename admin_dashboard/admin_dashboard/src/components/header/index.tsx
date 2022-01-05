import { useState } from "react";
import { Navbar, Container, Image, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {
  InfoIcon,
  RefreshIcon,
  PieChartIcon,
  RestoreIcon,
  SettingsIcon,
} from "../../assets/exportIcons";
import CommonPopup from "../commonPopup";

const Header = () => {
  // state for handling buzzing loading popup
  const [BuzzingPopup, setBuzzingPopup] = useState(false as boolean);

  const onClickRestore = () => {
    // (...) your api call comes here to get logs data
    setBuzzingPopup(true);
    setTimeout(() => {
      setBuzzingPopup(!true);
    }, 3000);
  };

  return (
    <>
      <header className="header-container">
        <Container>
          <Navbar>
            <Navbar.Brand>
              <Link to="">
                <Image src={process.env.PUBLIC_URL + "/assets/logo/logo.png"} />
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link as={NavLink} to="#" data-title="Info">
                <InfoIcon />
              </Nav.Link>
              <Nav.Link as={NavLink} to="#" data-title="Refresh">
                <RefreshIcon />
              </Nav.Link>
              <Nav.Link as={NavLink} to="#" data-title="Chart">
                <PieChartIcon />
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="#"
                onClick={onClickRestore}
                data-title="Restore Backup"
              >
                <RestoreIcon />
              </Nav.Link>
              <Nav.Link
                className="ms-5"
                as={NavLink}
                to="#"
                data-title="Settings"
              >
                <SettingsIcon />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </header>

      {!!BuzzingPopup ? (
        <CommonPopup Close={false} ModelClassName="buzzing-popup-contianer">
          <h5 className="modal-title">Buzzing in progress</h5>
          <div className="progress-container mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.896"
              height="14.738"
              viewBox="0 0 12.896 14.738"
            >
              <path
                id="Icon_metro-files-empty"
                data-name="Icon metro-files-empty"
                d="M16.787,7.067a13.048,13.048,0,0,0-1.255-1.435A13.054,13.054,0,0,0,14.1,4.378a2.3,2.3,0,0,0-1.309-.607h-5.3A1.153,1.153,0,0,0,6.341,4.922V15.515a1.153,1.153,0,0,0,1.151,1.151h8.751a1.153,1.153,0,0,0,1.151-1.151V8.376a2.3,2.3,0,0,0-.607-1.309Zm-1.906-.784a12.563,12.563,0,0,1,1.045,1.171H13.71V5.239A12.554,12.554,0,0,1,14.881,6.284Zm1.592,9.231a.233.233,0,0,1-.23.23H7.492a.233.233,0,0,1-.23-.23V4.922a.233.233,0,0,1,.23-.23h5.3V7.915a.461.461,0,0,0,.461.461h3.224ZM12.255,2.535a2.3,2.3,0,0,0-1.309-.607H5.65A1.153,1.153,0,0,0,4.5,3.079V13.673A1.153,1.153,0,0,0,5.42,14.8V3.079a.233.233,0,0,1,.23-.23h7.008c-.139-.114-.274-.22-.4-.314Z"
                transform="translate(-4.499 -1.928)"
                fill="#fff"
              />
            </svg>
            <span>
              <b>120</b> Files
            </span>
          </div>
          <p className="text-center">Files successfully buzzed and backed up</p>
        </CommonPopup>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
