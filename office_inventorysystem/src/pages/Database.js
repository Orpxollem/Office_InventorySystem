import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './Database.css';
import { Space, Button, Divider} from 'antd';
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlineAddchart } from "react-icons/md";


const AddToInventory = () => {
    return(
        <div className='DatabaseFormContainer'>
            <form name='additem'>
                <div>
                    <label>Add Item To Inventory</label>
                    <input type="text" name="equipmentID" placeholder='Equipment ID' required/>
                    <input type="text" name="equipmentName" placeholder='Equipment Name' required/>
                    <input type="text" name="type" placeholder='Type' required/>
                    <input type="text" name="condition" placeholder='Condition' required/>
                    <input type="text" name="location" placeholder='Location' required/>
                    <input type="text" name="assignment" placeholder='Assignment' required/>
                    <input type="text" name="purchasedate" placeholder='Purchase Date (YYYY-MM-DD)' required/>
                </div>
                <div className='form-button'>
                    <button type="submit" className='add-button'>Add Item</button>
                </div>
            </form>
        </div>
    )
}

const RemoveItem = () => {
    return(
        <div className='DatabaseFormContainer'>
            <form name='removeitem'>
                <div>
                    <label>Remove Item From Inventory</label>
                    <input type="text" name="equipmentID" placeholder='Equipment ID' required/>
                    <input type="text" name="equipmentName" placeholder='Equipment Name' required/>
                </div>
                <div className='form-button'>
                    <button type="submit" className='remove-button'>Remove Item</button>
                </div>
            </form>
        </div>
    )
}

const UpdateItem = () => {
    return(
        <div className='DatabaseFormContainer'>
        <form name='updateitem'>
            <div>
                <h2>Update Inventory Item</h2>
                <label>ID For Item Update</label>
                <input type="text" name="equipmentID" placeholder='Equipment ID' required/>
                <label>Update Details</label>
                <input type="text" name="condition" placeholder='Condition' required/>
                <input type="text" name="location" placeholder='Location' required/>
                <input type="text" name="Assignment" placeholder='Assignment' required/>
            </div>
            <div className='form-button'>
                <button type="submit" className='update-button'>Update Item</button>
            </div>
        </form>
    </div>
    )
}

const AddRecord = () => {
    return(
        <div className='DatabaseFormContainer'>
            <form name='addrecord'>
                <div>
                    <label>Add Report</label>
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
        </div>
    )
}

const UpdateRecord = () => {
    return(
        <div className='DatabaseFormContainer'>
        <form name='updaterecord'>
            <div>
                <h2>Update Report Item</h2>
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
    </div>
    )
}

export default function Database() {

    const [content, setContent] = useState('')
    return (
        <div>
            <Header />
            <Space className='Content'>
                <SideMenu />
                
                <Space direction='vertical' style={{marginLeft: 30}}>
                    <h3>INVENTORY</h3>
                        <Space style={{marginTop: -30}} direction='vertical'>
                            <Button className='custom-btn' icon={<BsFillCartCheckFill style={{ fontSize: '18px'}} />} onClick={() => setContent('AddItem')}>
                                <h4>Add Item</h4> 
                            </Button>
                            <Button className='custom-btn' icon={<BsFillCartCheckFill style={{ fontSize: '18px'}} />} onClick={() => setContent('RemoveItem')}>
                                <h4>Remove Item</h4> 
                            </Button>
                            <Button className='custom-btn' icon={<BsFillCartCheckFill style={{ fontSize: '18px'}} />} onClick={() => setContent('UpdateItem')}>
                                <h4>Update Item</h4> 
                            </Button>
                        </Space>
                    <h3>REPORTS</h3>
                    <Space style={{marginTop: -30}} direction='vertical'>
                        <Button className='custom-btn' icon={<MdOutlineAddchart style={{ fontSize: '18px'}} />} onClick={() => setContent('AddRecord')}>
                            <h4>Add Record</h4>
                        </Button>
                        <Button className='custom-btn' icon={<MdOutlineAddchart style={{ fontSize: '18px'}} />} onClick={() => setContent('UpdateRecord')}>
                            <h4>Update Record</h4>
                        </Button>
                    </Space>
                </Space>

                <Divider type="vertical" style={{ height: '100vh', marginLeft: 20, marginRight: 10, backgroundColor: '#AFB0B6'}} />

                <Space>
                    {content === 'AddItem' && <AddToInventory />}
                    {content === 'RemoveItem' && <RemoveItem />}
                    {content === 'UpdateItem' && <UpdateItem />}
                    {content === 'AddRecord' && <AddRecord />}
                    {content === 'UpdateRecord' && <UpdateRecord />}
                </Space>
            </Space>
        </div>
    )
}

