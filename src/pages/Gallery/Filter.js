import React, {useState, useEffect} from "react";
import {filterData, filterMenu} from "../../data/data";
import {Container} from "react-bootstrap";
import LightGallery from "lightgallery/react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Filter = () => {

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState(filterData);

    useEffect(() => {
        const filtered = filterData.map((p) => ({
            ...p,
            filtered: p.category.includes(filter),
        }));
        setProjects(filtered);
    }, [filter]);

    const handleFilterKeyChange = (key) => setFilter(key);

    return (
        <div className="Gallery">
            <Container>
                <div className="filter">
                    <div className="filter-group">
                        {filterMenu.map((item) =>
                            <span
                                key={item.id}
                                className={`filter-button ${filter === item.name ? "active" : ""}`}
                                onClick={() => handleFilterKeyChange(item.name)}
                            >
                                {item.name}
                            </span>
                        )}
                    </div>
                </div>

                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="row filter-content"
                >
                    {projects && projects.map((item) =>
                        item.filtered &&
                        <div
                            key={item.id}
                            data-src={process.env.PUBLIC_URL + item.image}
                            className="Gallery-item single-content filter-grid col-sm-12 col-md-4"
                        >
                            <figure className="effect effect-layla">
                                <img className="effect-layla-img" src={process.env.PUBLIC_URL + item.image} alt={item.title}  />
                                <figcaption className="effect-caption effect-layla-caption">
                                    <h2 className="effect-layla-title">{item.title}</h2>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </LightGallery>
            </Container>
        </div>
    )
}

export default Filter;