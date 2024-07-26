import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space } from 'antd';


export default function Inventory() {
    return (
        <div>
            <Header />
            <Space className='Content'>
                <SideMenu />
                <Space>
                    <h1>Inventory</h1>
                    <p>Inventory content</p>
                </Space>
            </Space>
        </div>
    )
}

