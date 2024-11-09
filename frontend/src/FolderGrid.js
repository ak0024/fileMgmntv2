import React from "react";

import './FolderGrid.css'
import { useGlobalContext } from "./GlobalContext";

// Sample dummy data
let data = [
    {
        children: [
            {
                extension: "txt",
                fileid: 3,
                filename: "test2",
                parentfile: 1,
                path: "/testFolder",
                type: "File",
                uniquefilename: "test2",
            },
            {
                children: [
                    {
                        extension: "docx",
                        fileid: 6,
                        filename: "document1",
                        parentfile: 4,
                        path: "/testFolder/subFolder1",
                        type: "File",
                        uniquefilename: "document1",
                    },
                    {
                        children: [
                            {
                                extension: "pdf",
                                fileid: 8,
                                filename: "report",
                                parentfile: 7,
                                path: "/testFolder/subFolder1/subSubFolder1",
                                type: "File",
                                uniquefilename: "report",
                            }
                        ],
                        extension: null,
                        fileid: 7,
                        filename: "subSubFolder1",
                        parentfile: 4,
                        path: "/testFolder/subFolder1",
                        type: "Folder",
                        uniquefilename: "subSubFolder1",
                    }
                ],
                extension: null,
                fileid: 4,
                filename: "subFolder1",
                parentfile: 1,
                path: "/testFolder",
                type: "Folder",
                uniquefilename: "subFolder1",
            }
        ],
        extension: null,
        fileid: 1,
        filename: "testFolder",
        parentfile: 0,
        path: "/",
        type: "Folder",
        uniquefilename: "testFolder",
    },
    {
        extension: "txt",
        fileid: 2,
        filename: "testTxt",
        parentfile: 0,
        path: "/",
        type: "File",
        uniquefilename: "testTxt",
    },
    {
        children: [
            {
                extension: "jpg",
                fileid: 5,
                filename: "image1",
                parentfile: 9,
                path: "/images",
                type: "File",
                uniquefilename: "image1",
            },
            {
                children: [
                    {
                        extension: "png",
                        fileid: 10,
                        filename: "icon",
                        parentfile: 9,
                        path: "/images/icons",
                        type: "File",
                        uniquefilename: "icon",
                    }
                ],
                extension: null,
                fileid: 9,
                filename: "icons",
                parentfile: 0,
                path: "/images",
                type: "Folder",
                uniquefilename: "icons",
            }
        ],
        extension: null,
        fileid: 9,
        filename: "images",
        parentfile: 0,
        path: "/",
        type: "Folder",
        uniquefilename: "images",
    }
]
;



function Drive({ handleFolder }) {

    function handleFolders(item) {
        data = item.children
        handleFolder(item)
    }

    return (
        <div className="drive">
            {data.map((item) => (
                <div key={item.fileid} className="drive-item">
                    {item.type === "Folder" ? (
                        <div className="folder" onClick={() => handleFolders(item)}>
                            <i className="fa fa-folder" aria-hidden="true"></i>
                            {/* Folder Icon */}
                            <p>{item.filename}</p>
                        </div>
                    ) : (
                        <File item={item} />
                    )}
                </div>
            ))}
        </div>
    );
};



// Folder Component
// const Folder = ({ item, handleFolder }) => (

//     // {/* Render folder's children files if any */ }
//     //     {/* <div className="folder-contents">
//     //         {item.children?.map((child) => (
//     //             <File key={child.fileid} item={child} />
//     //         ))}
//     //     </div> */}

// );

// File Component
const File = ({ item }) => {
    function downloadFile(item) {
        const fileContent = "This is a dummy file for download.";
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const fileUrl = URL.createObjectURL(blob);

        // Create a link element, set download attributes, and click it
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = item.filename; // Set the desired file name and extension
        link.click();

        // Clean up by revoking the object URL
        URL.revokeObjectURL(fileUrl);
    }
    return (
        <div className="file" onClick={() => downloadFile(item)}>
            <i className="fa fa-file" aria-hidden="true"></i> {/* File Icon */}
            <p>{item.filename}.{item.extension}</p>
        </div>
    );
}

export default Drive;
