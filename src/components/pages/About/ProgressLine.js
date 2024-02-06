import React, { useEffect, useState } from "react";
import {CountUp} from "use-count-up";

const ProgressLine = ({ visualParts }) => {

    const [widths, setWidths] = useState(
        visualParts.map(() => {
            return 0;
        })
    );

    useEffect(() => {
        requestAnimationFrame(() => {
            setWidths(
                visualParts.map((item) => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);

    return (
        <>
            {visualParts.map((item, index) => {
                return (
                    <div className="Progressbar-item" key={index}>
                        <div className="Progressbar-header d-flex justify-content-between">
                            <h4 className="Progressbar-title">{item.label}</h4>
                            <div className="Progressbar-count" data-percentage={item.percentage}>
                                <CountUp
                                    isCounting
                                    start={0}
                                    end={widths[index]}
                                    duration={2}
                                    easing="linear"
                                />%
                            </div>
                        </div>
                        <div className="Progressbar-full">
                                <span className="Progressbar-fill"
                                      style={{ width: widths[index] + "%" }}>
                                </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProgressLine;
