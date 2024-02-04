import React from "react";
import ProgressLine from "./ProgressLine";
import { visualParts } from "../../data/data";

const Progress = () => {

    return (
        <div className="Progressbar">
            <ProgressLine visualParts={visualParts} />
        </div>
    )
}

export default Progress;