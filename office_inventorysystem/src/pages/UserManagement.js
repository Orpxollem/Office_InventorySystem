import React, { useState } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space, Button, Modal } from 'antd';
import './UserManagement.css';

export default function UserManagement() {
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [isRemoveVisible, setIsRemoveVisible] = useState(false);
    const [isAddVisible, setIsAddVisible] = useState(false);

    const showUpdateModal = () => setIsUpdateVisible(true);
    const showRemoveModal = () => setIsRemoveVisible(true);
    const showAddModal = () => setIsAddVisible(true);

    const handleCancel = () => {
        setIsUpdateVisible(false);
        setIsRemoveVisible(false);
        setIsAddVisible(false);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('Update User:', Object.fromEntries(data.entries()));
        handleCancel();
    };

    const handleRemove = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('Remove User:', Object.fromEntries(data.entries()));
        handleCancel();
    };

    const handleAdd = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('Add User:', Object.fromEntries(data.entries()));
        handleCancel();
    };

    return (
        <div>
            <Header />
            <Space className='.Content'>
                <SideMenu />
                <Space direction="vertical" style={{ width: '100%' }}>
                    <h1>User Management</h1>
                    <Button onClick={showUpdateModal}>Update User</Button>
                    <Button onClick={showRemoveModal}>Remove User</Button>
                    <Button onClick={showAddModal}>Add User</Button>
                    <UpdateUser
                        visible={isUpdateVisible}
                        onCancel={handleCancel}
                        onSubmit={handleUpdate}
                        title="Edit Admin Info"
                    />
                    <AddUser
                        visible={isRemoveVisible}
                        onCancel={handleCancel}
                        onSubmit={handleRemove}
                        title="Add User"
                    />
                    <RemoveUser
                        visible={isAddVisible}
                        onCancel={handleCancel}
                        onSubmit={handleAdd}
                        title="Remove User"
                    />
                </Space>
            </Space>
        </div>
    );
}

const AddUser = ({ visible, onCancel, onSubmit, title }) => {
    return (
        <Modal title={title} visible={visible} onCancel={onCancel} footer={null}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" name="employeeName" required />
                </div>
                <div>
                    <label>Employee ID:</label>
                    <input type="text" name="employeeID" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" required />
                </div>
                <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="submit-button">Add User</button>
                </div>
            </form>
        </Modal>
    );
};

const UpdateUser = ({ visible, onCancel, onSubmit, title }) => {
    return (
        <Modal title={title} visible={visible} onCancel={onCancel} footer={null}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" name="employeeName" required />
                </div>
                <div>
                    <label>Employee ID:</label>
                    <input type="text" name="employeeID" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" required />
                </div>
                <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="submit-button">Update User</button>
                </div>
            </form>
        </Modal>
    );
};

const RemoveUser = ({ visible, onCancel, onSubmit, title }) => {
    return (
        <Modal title={title} visible={visible} onCancel={onCancel} footer={null}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" name="employeeName" required />
                </div>
                <div>
                    <label>Employee ID:</label>
                    <input type="text" name="employeeID" required />
                </div>
                <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="submit-button">Remove User</button>
                </div>
            </form>
        </Modal>
    );
};
