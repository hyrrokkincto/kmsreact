import React, { useEffect, useState } from "react";
import * as Feather from "react-feather";
import { withRouter, NavLink } from "react-router-dom";
import { CommonMobileMenu } from "../../Config/MobileSliderConfig.json";

const Sidebar = (props: any) => {

  const [SidebarToogle, setSidebarToogle] = useState(false);

  const [CurrentOpenedIndex, setCurrentOpenedIndex] = useState(null);
  const CurrentOpenIndex = (id: any) => {
    if (!id) return;
    if (id === CurrentOpenedIndex) setCurrentOpenedIndex(null);
    else setCurrentOpenedIndex(id);
  };

  const GetIcon = (name: any) => {
    switch (name) {
      case "User": return <Feather.User className="me-2" />;
      case "Search": return <Feather.Search className="me-2" />;
      case "key": return <Feather.Key className="me-2" />;
      case "settings": return <Feather.Settings className="me-2" />;
      case "file-check": return <Feather.CheckSquare className="me-2" />;
      case "users": return <Feather.Users className="me-2" />;
      case "server": return <Feather.Server className="me-2" />;
      case "sliders": return <Feather.Sliders className="me-2" />;
      case "database": return <Feather.Database className="me-2" />;
      case "organization-user": return <OrgUser className="me-2" />;
      default: break;
    }
  };

  useEffect(() => {
    setSidebarToogle(false);
  }, [props]);

  let { url = "" } = props;

  return (
    <>
      <aside className={`sidebar-container${!!SidebarToogle ? " open" : ""}`}>
        <div className="sidebar-container-wrapper">
          <div
            className="sidebar-toogle"
            onClick={() => setSidebarToogle((i) => !i)}
          >
            <Feather.ChevronRight />
          </div>
          <div className="scrollable-menu">
            {!!CommonMobileMenu && CommonMobileMenu.length > 0 ? (
              CommonMobileMenu.map((menu, idx) => {
                let {
                  linkText = "",
                  hasChild = false,
                  hypherLink = "",
                  icon = "",
                  id,
                  child = [],
                } = menu;
                return (
                  <>
                    {!hasChild ? (
                      <NavLink
                        key={JSON.stringify(menu)}
                        className="menu-item"
                        exact
                        to={`${url}${hypherLink}`}
                      >
                        {GetIcon(menu.icon)}
                        {linkText}
                      </NavLink>
                    ) : (
                      <></>
                    )}
                    {!!hasChild ? (
                      <div key={JSON.stringify(menu)} className="menu-item-has-child">
                        <div
                          className={`menu-item ${window.location.href.includes(hypherLink)
                            ? "active"
                            : ""
                            }`}
                          onClick={() => CurrentOpenIndex(id)}
                        >
                          <div className="FJCB">
                            <div>
                              <Feather.Key className="me-2" />{" "}
                              <span>{linkText}</span>
                            </div>
                            <span>
                              {" "}
                              {!!CurrentOpenedIndex &&
                                CurrentOpenedIndex === id ? (
                                <Feather.ChevronUp />
                              ) : (
                                <Feather.ChevronDown />
                              )}{" "}
                            </span>
                          </div>
                        </div>
                        {!!CurrentOpenedIndex &&
                          CurrentOpenedIndex === id &&
                          !!child &&
                          child.length > 0 ? (
                          child.map((childItem) => {
                            let {
                              linkText = "",
                              hypherLink = "",
                              Icon = false,
                            } = childItem;
                            return (
                              <NavLink
                                key={JSON.stringify(childItem)}
                                className="menu-item sub-menu"
                                exact
                                to={`${url}${hypherLink}`}
                              >
                                {!!Icon ? GetIcon(Icon) : <></>}
                                {linkText}
                              </NavLink>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </aside>
      <div
        className="aside-overlay aside-trigger"
        onClick={() => setSidebarToogle(!true)}
      />
    </>
  );
};

export default withRouter(Sidebar);


const OrgUser = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26.453" height="16.915" viewBox="0 0 26.453 16.915">
  <path id="ic_person_24px" d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z" transform="translate(-4 -3.085)" fill="#fff" />
  <path id="ic_settings_24px" d="M14.136,9.593a4.768,4.768,0,0,0,0-1.355L15.6,7.1a.349.349,0,0,0,.083-.443L14.3,4.261a.348.348,0,0,0-.422-.152L12.152,4.8a5.052,5.052,0,0,0-1.169-.678L10.72,2.29A.337.337,0,0,0,10.382,2H7.616a.337.337,0,0,0-.339.29L7.014,4.123A5.313,5.313,0,0,0,5.845,4.8L4.123,4.109a.337.337,0,0,0-.422.152L2.319,6.654A.341.341,0,0,0,2.4,7.1L3.861,8.237a5.484,5.484,0,0,0-.048.678,5.484,5.484,0,0,0,.048.678L2.4,10.734a.349.349,0,0,0-.083.443L3.7,13.569a.348.348,0,0,0,.422.152l1.722-.691a5.052,5.052,0,0,0,1.169.678l.263,1.832a.337.337,0,0,0,.339.29h2.766a.337.337,0,0,0,.339-.29l.263-1.832a5.313,5.313,0,0,0,1.169-.678l1.722.691a.337.337,0,0,0,.422-.152l1.383-2.393a.349.349,0,0,0-.083-.443ZM9,11.335a2.42,2.42,0,1,1,2.42-2.42A2.423,2.423,0,0,1,9,11.335Z" transform="translate(10.729 -2)" fill="#fff" />
</svg>
