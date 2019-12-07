import React from "react";
import "./style.css";

export const Modal = (props: any) => {
    const [show, setShow] = React.useState(true);

    // React.useEffect(() => {
        
    // }, [show]);

    const closeButon = (
        <div className="close-buton" onClick={() => { setShow(false) }}>X</div>
    );

    let modal = show ?
        (<div className="modal-wraper">
            <div className="modal-container">
                {closeButon}
                {props.children}
            </div>
        </div>) : null
    return modal;
}