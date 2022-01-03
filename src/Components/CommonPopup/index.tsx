import React from "react";

const CommonPopup = (props: any) => {
  let {
    children = (<></>) as any,
    OnClose = () => {},
    ModelClassName = "" as any,
    Heading = "" as string,
  } = !!props ? props : {};

  return (
    <>
      <div className={"modal-backdrop fade show"}></div>
      <div
        className={"modal fade show " + ModelClassName}
        id="filter"
        aria-labelledby="exampleModalLabel"
        style={{ display: "block", paddingLeft: "0px" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title">{Heading}</h5>
              <button
                type="button"
                onClick={OnClose}
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body pt-0">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPopup;
