import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space } from 'antd';


export default function Reports() {
    return (
        <div>
            <Header />
            <Space className='Content'>
                <SideMenu />
                <Space>
                    <h1>Reports</h1>
                    <p>Reports content</p>
                </Space>
            </Space>
        </div>
    )
}

