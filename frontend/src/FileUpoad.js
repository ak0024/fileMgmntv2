// UploadModal.js
import React, { useState } from 'react';
import './FileUpload.css';

const UploadModal = ({ onClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    const [fileName, setFileName] = useState('');

    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const files = e.dataTransfer.files;
            const file = e.dataTransfer.files[0];
            console.log(files); // Handle the dropped files here
            setFileName(file.name);
            e.dataTransfer.clearData();
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileName(file.name); // Save file name to state
        }
    };


    return (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <h2>Upload File</h2>
                <div className={`upload-area ${isDragging ? 'dragging' : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    <p>Drag & drop files here or click to upload</p>
                    {/* Add input for file selection */}
                    <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} id="file-upload" />
                    <label htmlFor="file-upload" className="file-upload-button">
                        Select Files
                    </label>
                    {fileName && <p className="file-name">Uploaded File: {fileName}</p>}
                </div>
            </div>
        </div>
    );
};

export default UploadModal;
