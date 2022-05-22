import React from "react";
import "./component.css";
import ReactDOM from "react-dom";
import style from "styled-components";

const Modal = ({ visible, toggle, children, height, width }) =>
  visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <ModalContent height={height} width={width}>
            {/* modal header  */}
            <div>
              <span onClick={toggle} className="close">
                &times;
              </span>
              <div>{children}</div>
            </div>
            {/* modal body */}
            
            {/* modal footer */}
          </ModalContent>
        </div>,
        document.body
      )
    : null;

const ModalContent = style.div`
    background-color: white;
    width: 100%; 
    max-width: ${(props)=> (props.width ? props.width : "840px")}; 
    height: ${(props) => (props.height ? props.height : "50%")}; 
    margin: auto; /* Auto margin according to the element width */
    padding: 10px;
    border-radius: 5px; /* Optional. Rounds container corners */
`

export default Modal;
