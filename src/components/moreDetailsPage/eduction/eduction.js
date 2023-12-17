import React from "react";
import detailsDat from "../../../detailsDat.";

export default function Eduction() {
    return (
        <div className="col-8">
            <h4>&lt;h2&gt;</h4>
            {detailsDat.eduction.map(element => {
                return (
                    <div className="row col-12">
                        <h6 className="col-11 offset-1">&lt;h2&gt;
                        {element.title.toUpperCase()}
                        &lt;/h2&gt;
                        </h6>
                       <p className="col-11 offset-1">&lt;p&gt;{element.description} &lt;/p&gt;</p>
                    </div>
                )
            })}
            <h2>&lt;/h2&gt;</h2>
        </div>

    )
}