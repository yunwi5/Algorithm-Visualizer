import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import SideNav from './SideNav';
import Backdrop from '../../ui/Backdrop';
import classes from './Sidebar.module.scss';

/* Sidebar with backdrop */
export const sidebarDiv = document.getElementById('sidebar') as HTMLElement;

const Sidebar: React.FC = (props) => {
    const [showNav, setShowNav] = useState(false);

    const toggleSidebarHandler = () => {
        setShowNav((prev) => !prev);
    };

    return (
        <Fragment>
            <div className={classes['icon-wrapper']} onClick={toggleSidebarHandler}>
                <FontAwesomeIcon className={classes.icon} icon={faBars as IconProp} />
            </div>
            {showNav && (
                <Fragment>
                    <Backdrop onClose={toggleSidebarHandler} />
                    {ReactDOM.createPortal(
                        <SideNav onClose={toggleSidebarHandler} />,
                        sidebarDiv,
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default Sidebar;
