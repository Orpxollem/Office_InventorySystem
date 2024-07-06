import { Menu } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAddchart } from "react-icons/md";
import { RiDatabase2Fill } from "react-icons/ri";

export default function SideMenu() {
  return (
    <div className="side-menu">
        
        <Menu
        
        items={[
            {
                label: 'Dashboard',
                icon: <RxDashboard />,
                key: 'dashboard-1'
            },
            {
                label: 'Check Inventory',
                icon: <BsFillCartCheckFill />,
                key: 'dashboard-2'
            },
            {
                label: 'Employee Management',
                icon: <MdManageAccounts style={{fontSize: 17}}/>,
                key: 'dashboard-3'
            },
            {
                label: 'Reports',
                icon: <MdOutlineAddchart style={{fontSize: 15}}/>,
                key: 'dashboard-4'
            },
            {
                label: 'Database',
                icon: <RiDatabase2Fill />,
                key: 'dashboard-5'
            },
            {
                label: 'Settings',
                icon: <FiSettings />,
                key: 'dashboard-6'
            },
        ]}
        />

    </div>
  );
}