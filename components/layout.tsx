import { FireTwoTone, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Row } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RouteLink } from "../constants/common";
const { Sider, Content } = Layout;
export const TheLayout: React.FC<any> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false); // 메뉴 접고 펴기 효과
    const [selectedMenu, setSelectedMenu] = useState<string>("/"); // 메뉴 selected 효과
    const router = useRouter(); // next router 객체

    useEffect(() => {
        setSelectedMenu(router.pathname);
    }, [router.pathname]);

    /**
     * 루트 URL 로 돌아가기
     */
    const goRoot = () => {
        window.location.href = "/";
    };

    /**
     * 메뉴 접기/펴기
     */
    const _onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={_onCollapse}
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    left: 0,
                }}
            >
                {/* logo */}
                <div
                    onClick={goRoot}
                    style={{
                        cursor: "pointer",
                        background: "rgba(255,255,255,0.3)",
                        margin: 16,
                    }}
                >
                    <Row
                        align="middle"
                        style={{ height: "100%" }}
                        justify="center"
                    >
                        <FireTwoTone
                            style={{ fontSize: 28, margin: "12px 0" }}
                        />
                    </Row>
                </div>

                {/* Menu */}
                <Menu theme="dark" mode="inline" selectedKeys={[selectedMenu]}>
                    <Menu.Item
                        icon={<UserOutlined />}
                        key={RouteLink.MANAGE.PEOPLE}
                    >
                        <Link href={RouteLink.MANAGE.PEOPLE}>회원관리</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
};
