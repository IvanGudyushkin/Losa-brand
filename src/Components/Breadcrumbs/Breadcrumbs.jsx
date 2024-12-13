import React from 'react';
import { Link } from 'react-router-dom'; // предполагается использование react-router-dom для навигации
import cl from './Breadcrums.module.css'
const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <nav aria-label="breadcrumb" className={cl.block}>
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                    <span
                        key={crumb.path}
                        className={cl.item}
                        aria-current={isLast ? 'page' : undefined}
                    >
                            {!isLast ? (
                                <React.Fragment key={crumb.path}>
                                    <Link className={cl.link} to={crumb.path}>{crumb.title}</Link>
                                    <span className={cl.separator}> / </span> {/* Пример разделителя */}
                                </React.Fragment>
                            ) : (
                                <span className={cl.last} key={crumb.path}>{crumb.title}</span>
                            )}
                        </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;