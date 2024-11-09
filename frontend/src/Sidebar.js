import React, { useState } from 'react';
import './Sidebar.css';
import { useGlobalContext } from './GlobalContext';
import UploadModal from './FileUpoad';


// Sidebar data structure with nested submenus
const sidebarData = [
    {
        title: 'Sidebar Item1',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item2',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Menu',
        icon: 'fa-address-card',
        children: [
            {
                title: 'Level 2',
                icon: 'fa-address-card',
            },
            {
                title: 'Level 2',
                icon: 'fa-address-card',
                children: [
                    {
                        title: 'Level 3', icon: 'fa-address-card',
                        children: [
                            { title: 'Level 3', icon: 'fa-address-card' },
                            { title: 'Level 3', icon: 'fa-address-card' },
                            { title: 'Level 3', icon: 'fa-address-card' },
                        ],
                    },
                    { title: 'Level 3', icon: 'fa-address-card' },
                    { title: 'Level 3', icon: 'fa-address-card' },
                ],
            },
        ],
    },
    {
        title: 'Sidebar Item3',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item4',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
    {
        title: 'Sidebar Item5',
        icon: 'fa-address-card',
    },
];





function sideBarSubMenu(data, booli, isCollapsed, handleClick) {
    data.path = data.title + '/'

    return (
        <div className={`sb-item  ${data.children && data.children.length > 0 ? 'sb-menu' : ''}`} onClick={() => handleClick(data)}>
            <i className={`sb-icon fa fa-address-card ${booli && isCollapsed ? 'tooltip' : ''}`}>
                {booli && isCollapsed && <span class="tooltiptext">{data.title}</span>}
            </i>
            <span class="sb-text">{data.title}</span>
            {data.children && data.children.length > 0 && (
                <div className="sb-submenu">
                    {data.children.map((child) => (sideBarSubMenu(child, false, isCollapsed, handleClick)))}
                </div>

            )}
        </div>
    );

}


function Sidebar() {
    const { isCollapsed, setIsCollapsed, setNavPath } = useGlobalContext();

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };



    const handleClick = (data) => {
        console.log(data);
        if (data && data.children) { }
        else {
            setNavPath(data.title);
        }
    }

    const [showModal, setShowModal] = useState(false);

    const handleUploadClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (


        <div className={`sidebar ${isCollapsed ? 'sidebar-collapse' : ''}`}>
            <div class="sb-item-list">

                <div class="btn-toggle-sidebar sb-item" onClick={toggleSidebar}><i class="sb-icon fa fa-angle-double-left">

                </i><span class="sb-text"></span><i class="sb-icon fa fa-angle-double-right">
                    </i></div>
                <div class=" sb-item sb-create-new sb-menu">
                    <i class="sb-icon fa fa-plus">
                    </i><span class="sb-text">Create New</span>
                    <div className="sb-submenu">
                        <div className={`sb-item `}>
                            <i class="sb-icon fa fa-plus">
                            </i><span class="sb-text">Create Folder</span>
                        </div>
                        <div className={`sb-item `} onClick={handleUploadClick}>
                            <i class="sb-icon fa fa-plus">
                            </i><span class="sb-text">Upload File</span>
                        </div>
                    </div>



                </div>
                {sidebarData.map((data) => (
                    sideBarSubMenu(data, true, isCollapsed, handleClick)
                ))}



            </div>

            {showModal && <UploadModal onClose={handleCloseModal} />}

        </div>


    );
}

export default Sidebar;
