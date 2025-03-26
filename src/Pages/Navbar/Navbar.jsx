import React, { useState } from 'react';
import { HomeOutlined, InfoCircleOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import Account from './Account';
import App from '../../App';

const { Header, Content, Sider } = Layout;


const NavbarComponents = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [breakpointBroken, setBreakpointBroken] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const onBreakpoint = (broken) => {
        setBreakpointBroken(broken);
        if (broken) {
            setCollapsed(true);
        }
    };


    const items2 = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
            href: '/',
        },
        {
            key: 'about',
            icon: <InfoCircleOutlined />,
            label: 'About',
            href: '/about',
        },
    ];
    return (
        <Layout className="min-h-screen">
            <Header
                className="flex items-center w-full p-4 fixed top-0 z-50"
                style={{
                    backgroundColor: 'black',
                    height: '64px',
                    padding: '0 24px',
                    lineHeight: '64px'
                }}
            >
                <div className='flex justify-between w-full items-center'>
                    <div className='flex items-center gap-4'>
                        <Button
                            type="text"
                            icon={<MenuOutlined style={{ fontSize: '20px', color: 'white' }} />}
                            onClick={toggleSidebar}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                        <div className='w-40'>
                            <img
                                src="Logo/smartcom.png"
                                alt="Logo"
                                style={{ height: '32px', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div>
                        <Account />
                    </div>
                </div>
            </Header>

            <Layout className="flex pt-16">
                <Sider
                    width={200}
                    collapsedWidth={80}
                    className="fixed h-full"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    trigger={null}
                    breakpoint="lg"
                    onBreakpoint={onBreakpoint}
                    style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 64px)',
                        position: 'fixed',
                        left: 0,
                        top: '64px',
                        bottom: 0,
                        transition: 'all 0.2s',
                        backgroundColor: '#000000'
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className="h-full border-r-0 bg-black"
                        items={items2.map(item => ({
                            ...item,
                            icon: React.cloneElement(item.icon, {
                                style: {
                                    fontSize: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px',
                                    color: 'white'
                                },
                            }),
                            // ใช้ a tag แทน Link
                            label: collapsed ? null : (
                                <a href={item.href} style={{ color: 'white' }}>
                                    {item.label}
                                </a>
                            ),
                        }))}
                        theme="dark"
                        style={{
                            backgroundColor: '#000000',
                            color: 'white'
                        }}
                    />
                </Sider>

                <Layout
                    className="transition-all duration-200 min-h-[calc(100vh-64px)]"
                    style={{
                        marginLeft: breakpointBroken ? '80px' : collapsed ? '80px' : '200px',
                        padding: '24px',
                        background: '#f0f2f5',
                        minHeight: 'calc(100vh - 64px)'
                    }}
                >
                    <Content
                        style={{
                            padding: '24px',
                            margin: 0,
                            minHeight: '100%',
                            background: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)'
                        }}
                    >
                        <App />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default NavbarComponents;
