import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space } from 'antd';


export default function Settings() {
    return (
        <div>
            <Header />
            <Space className='.Content'>
                <SideMenu />
                <Space>
                    <h1>Settings</h1>
                    <p>Inventory content</p>
                </Space>
            </Space>
        </div>
    )
}

