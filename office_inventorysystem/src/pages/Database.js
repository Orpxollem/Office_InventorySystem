import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Space } from 'antd';


export default function Database() {
    return (
        <div>
            <Header />
            <Space className='Content'>
                <SideMenu />
                <Space>
                    <h1>Database</h1>
                    <p>Database content</p>
                </Space>
            </Space>
        </div>
    )
}

