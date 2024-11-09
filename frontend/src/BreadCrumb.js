import React from 'react';
import './BreadCrumb.css';

const Breadcrumb = ({ list }) => {
    return (
        <nav className="breadcrumb">
            {list.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                    {index < list.length - 1 ? (
                        <a href={item.filename} className="breadcrumb-link">
                            {item.filename}
                        </a>
                    ) : (
                        <span className="breadcrumb-current">{item.filename}</span>
                    )}
                    {index < list.length - 1 && <span className="breadcrumb-separator"> / </span>}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
