import React from "react";

const Expert = ({expert}) => {

    const {img,name, expertize} = expert;
    return (
        <div className="col-md-6 col-lg-4 col-12">
           <img src={img} alt="" />
           <h4>{name}</h4>
           <h5 className="text-danger">--{expertize}--</h5>
        </div>
    );
};

export default Expert;