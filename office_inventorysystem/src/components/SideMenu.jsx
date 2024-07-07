import { useState } from 'react';
import { Menu, Button } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAddchart } from "react-icons/md";
import { RiDatabase2Fill } from "react-icons/ri";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`side-menu-container ${collapsed ? 'collapsed' : ''}`}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={(item)=>{
          navigate(item.key)
        }}
        defaultSelectedKeys={['dashboard-1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={[
          {
            label: 'Dashboard',
            icon: <RxDashboard />,
            key: '/dashboard'
          },
          {
            label: 'Check Inventory',
            icon: <BsFillCartCheckFill />,
            key: '/inventory'
          },
          {
            label: 'Employee Management',
            icon: <MdManageAccounts style={{fontSize: 17}} />,
            key: '/usermanagement/'
          },
          {
            label: 'Reports',
            icon: <MdOutlineAddchart style={{fontSize: 15}} />,
            key: '/reports'
          },
          {
            label: 'Database',
            icon: <RiDatabase2Fill />,
            key: '/database'
          },
          {
            label: 'Settings',
            icon: <FiSettings />,
            key: '/settings'
          },
        ]}
      />
    </div>
  );
}
