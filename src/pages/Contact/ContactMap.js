import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

const ContactMap = () => {
    return (
        <div className="Map">
            <YMaps>
                <Map
                    defaultState={{ center: [40.372488, 49.954121], zoom: 13 }}
                    width="100%"
                    height="640px"
                    className="Map-container"
                    instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                />
            </YMaps>
        </div>
    )
}

export default ContactMap;