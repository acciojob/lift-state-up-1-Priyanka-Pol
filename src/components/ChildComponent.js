import React from "react";
import ModalComponent from "./ModalComponent";

const ChildComponent = (props) => {
    const {showModal, setShowModal} = props;
    return (
    <div className="child">
        <h2>Child Component</h2>
        <button onClick={() => {
            setShowModal(!showModal);
        }}>Show Modal</button>
        {showModal && <ModalComponent />}
    </div>
    )
}

export default ChildComponent;