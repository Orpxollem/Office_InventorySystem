import React, {useState} from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space, Button, Divider} from 'antd';
import { MdOutlineAccountBalance } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";
import './Settings.css';


const ChangePassword = () => {
    return(
        <div className='ChangePasscontainer'>
            <form name="change_pass">
                <div>
                    <label>Change Password</label>
                    <input type="text" name="oldPass" placeholder='Old Password' required/>
                    <input type="text" name="newPass" placeholder='New Password' required/>
                    <input type="text" name="confirmPass" placeholder='Repeat New Password' required/>
                </div>
                <div className="settings-button">
                    <button type="submit" className="changePass-button">Save Changes</button>
                </div>
            </form>
        </div>
    )
};

const Account = () => {
    return(
        <div>

            <h1>Account Overview</h1>

            <div className="account-container">
                    <FaChalkboardUser style={{fontSize: 100}}/>
                    <h3>Contact Details</h3>
                    <form className="account-form">
                        
                        <div className="form-group">
                            <div className="input-field">
                                <label>Name</label>
                                <input type="text" disabled/>
                                <text className='input-placeholder'>Main Staff 1</text>
                            </div>
                            <div className="input-field">
                                <label>Staff ID</label>
                                <input type="text" disabled/>
                                <text className='input-placeholder'>MainStaff1</text>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-field">
                                <label>Position</label>
                                <input type="text" disabled/>
                                <text className='input-placeholder'>Manager</text>
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" disabled/>
                                <text className='input-placeholder'>mainstaff1@mail.org</text>
                            </div>
                        </div>
                    </form>
                </div>
                
        </div>
        
    )
};



export default function Settings() {

    const [content, setContent] = useState('');

    return (
        <div>
            <Header />
            <Space className='Content'>
                <SideMenu />

                <Space direction='vertical' style={{marginLeft: 30}}>
                    <h3>GENERAL</h3>
                        <Space style={{marginTop: -30}}>
                            <Button icon={<MdOutlineAccountBalance style={{ fontSize: '18px'}} />} onClick={() => setContent('Account')}>
                                <h4>Account</h4> 
                            </Button>
                        </Space>
                    <h3>OTHER</h3>
                    <Space style={{marginTop: -30}}>
                        <Button icon={<TbPasswordUser style={{ fontSize: '18px'}} />} onClick={() => setContent('ChangePassword')}>
                            <h4>Change Password</h4>
                        </Button>
                    </Space>
                </Space>

                <Divider type="vertical" style={{ height: '100vh', marginLeft: 20, marginRight: 10, backgroundColor: '#AFB0B6'}} />

                <Space>
                    {content === 'Account' && <Account />}
                    {content === 'ChangePassword' && <ChangePassword />}
                </Space>

            </Space>
        </div>
    )
}