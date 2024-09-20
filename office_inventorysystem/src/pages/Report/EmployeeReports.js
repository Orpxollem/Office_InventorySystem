import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import EmployeeSideMenu from '../../components/EmployeeSideMenu';
import { Space, Table, Input, Button, Modal, Dropdown, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { CiExport } from 'react-icons/ci';
import { FaFilePdf } from 'react-icons/fa6';
import { BsFiletypeXlsx } from 'react-icons/bs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { GrDocumentUpdate } from 'react-icons/gr';
import { LuClipboardEdit } from "react-icons/lu";
import { MdOutlinePostAdd } from 'react-icons/md';

import './Reports.css';


export default function EmployeeReports() {
    const [reports, setReports] = useState([]);
    const [filterReports, setFilterReports] = useState([]);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [isAddVisible, setIsAddVisible] = useState(false);

    useEffect(() => {
        fetchReport();
    }, []);

    const fetchReport = () => {
        axios.get('http://localhost:5000/reports')
        .then(response => {
            setReports(response.data);
            setFilterReports(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the reports!', error);
        });
    };

    const handleSearchReport = (e) => {
        const searchReportItem = e.target.value.toUpperCase();
        const filter = reports.filter(item =>
            Object.values(item).some(val =>
                String(val).toUpperCase().includes(searchReportItem)
            )
        );
        setFilterReports(filter);
    };

    const showUpdateModal = () => setIsUpdateVisible(true);
    const showAddModal = () => setIsAddVisible(true);

    const handleCancel = () => {
        setIsUpdateVisible(false);
        setIsAddVisible(false);
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        html2canvas(document.querySelector(".reports-table")).then(canvas => {
            const imgData = canvas.toDataURL("image/png");

            doc.addImage(imgData, 'PNG', 10, 10, 190, 310);
            doc.save('Reports.pdf');
        });
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filterReports);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Reports");
        XLSX.writeFile(workbook, 'Reports.xlsx');
    };

    const handleAdd = (event) => {
        event.preventDefault();
        handleCancel();
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        handleCancel();
    };

    const exportMenu = (
        <Menu>
            <Menu.Item key="1" icon={<FaFilePdf style={{fontSize: '18px'}}/>} onClick={exportToPDF}>
                Export to PDF
            </Menu.Item>
            <Menu.Item key="2" icon={<BsFiletypeXlsx style={{fontSize: '18px'}}/>} onClick={exportToExcel}>
                Export to Excel
            </Menu.Item>
        </Menu>
    );

    const addUpdateMenu = (
        <Menu>
            <Menu.Item key="1" icon={<MdOutlinePostAdd style={{fontSize: '18px'}}/>} onClick={showAddModal}>
                Add Record
            </Menu.Item>
            <Menu.Item key="2" icon={<GrDocumentUpdate style={{fontSize: '18px'}}/>} onClick={showUpdateModal}>
                Update Record
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Header />
            <Space className='Content'>
            <EmployeeSideMenu />
                <Space direction="vertical" style={{ width: '100%', marginLeft: '40px', marginTop: '-20px' }}>
                    <h1 className='pageTitle'>Office Inventory Reports</h1>
                    <Space style={{ marginBottom: 16, justifyContent: 'space-between', width: '100%' }}>
                        <Input
                            placeholder="Search Report"
                            onChange={handleSearchReport}
                            style={{ width: 200 }}
                            prefix={<SearchOutlined />}
                        />
                        <Space>
                            <Dropdown overlay={exportMenu} trigger={['click']}>
                                <Button icon={<CiExport />} type="primary">
                                    Export
                                </Button>
                            </Dropdown>
                            <Dropdown overlay={addUpdateMenu} trigger={['click']}>
                                <Button icon={<LuClipboardEdit />} type="primary">
                                    Edit
                                </Button>
                            </Dropdown>
                        </Space>
                    </Space>
                    <DisplayReports report_items={filterReports} />

                    <AddReport 
                        visible={isAddVisible} 
                        onCancel={handleCancel} 
                        onSubmit={handleAdd} 
                    />

                    <UpdateReport 
                        visible={isUpdateVisible} 
                        onCancel={handleCancel} 
                        onSubmit={handleUpdate} 
                    />
                </Space>
            </Space>
        </div>
    );
}

const DisplayReports = ({ report_items }) => {
    const columns = [
        { title: '#', dataIndex: 'id', key: 'id', render: (text, record, index) => index + 1 },
        { title: 'Assignment ID', dataIndex: 'assignment_id', key: 'assignment_id' },
        { title: 'Employee ID', dataIndex: 'employee_id', key: 'employee_id' },
        { title: 'Equipment ID', dataIndex: 'equipment_id', key: 'equipment_id' },
        { title: 'Assignment Date', dataIndex: 'assignment_date', key: 'assignment_date' },
        { title: 'Return Date', dataIndex: 'return_date', key: 'return_date' }
    ];

    const dataSource = report_items.map((item, index) => ({
        ...item,
        key: index,
    }));

    return (
        <Table
            className='reports-table'
            columns={columns}
            dataSource={dataSource}
            bordered
            title={() => <div className="table-header">Inventory Reports</div>}
            pagination={{ pageSize: 10, position: ['bottomCenter'] }}
        />
    );
};

const AddReport = ({ visible, onCancel, onSubmit }) => (
    <Modal title={'Add Report'} visible={visible} onCancel={onCancel} footer={null}>
        <form name='addrecord' onSubmit={onSubmit}>
            <div>
                <input type="text" name="assignmentID" placeholder='Assignment ID' required/>
                <input type="text" name="employeeID" placeholder='Employee ID' required/>
                <input type="text" name="equipmentID" placeholder='Equipment ID' required/>
                <input type="text" name="assignmentDate" placeholder='Assignment Date (YYYY-MM-DD)' required/>
                <input type="text" name="date" placeholder='Return Date (YYYY-MM-DD)' required/>
            </div>
            <div className='form-button'>
                <button type="submit" className='add-button'>Add Record</button>
            </div>
        </form>
    </Modal>
);

const UpdateReport = ({ visible, onCancel, onSubmit }) => (
    <Modal title={'Update Report'} visible={visible} onCancel={onCancel} footer={null}>
        <form name='updaterecord' onSubmit={onSubmit}>
            <div>
                <label>Assignment ID For Record Update</label>
                <input type="text" name="assignmentID" placeholder='Assignment ID' required/>
                <label>Update Details</label>
                <input type="text" name="employeeID" placeholder='Employee ID' required/>
                <input type="text" name="equipmentID" placeholder='Equipment ID' required/>
                <input type="text" name="assignmentDate" placeholder='Assignment Date (YYYY-MM-DD)' required/>
                <input type="text" name="returnDate" placeholder='Return Date (YYYY-MM-DD)' required/>
            </div>
            <div className='form-button'>
                <button type="submit" className='update-button'>Update Item</button>
            </div>
        </form>
    </Modal>
);
