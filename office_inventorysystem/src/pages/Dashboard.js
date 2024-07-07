import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space } from 'antd';


export default function Dashboard() {
    return (
        <div>
            <Header />
            <Space className='.Content'>
                <SideMenu />
                <Space>
                    <h1>Dashboard</h1>
                    <p>Dashboard content</p>
                </Space>
            </Space>
        </div>
    )
}

