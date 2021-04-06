import React, { useState } from 'react'
import { Tabs } from 'antd';


import { ShoppingCartOutlined } from '@ant-design/icons';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../SvgExport/CardProduct';
import './ProductPage.css';
import { Layout, Menu, Breadcrumb, Spin } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const { TabPane } = Tabs;
const Topic = [
      " Superette",
      " Maison & Bureau",
      "Santé & Beauté",
      "  Téléphone & Tablette",
      " Mode",
      " Informatique",
      "  Électroniques",
      " Jeux vidéos & Consoles",
      " Articles de sport",
      "   Auto & Moto",
      "  Jardin & Plein air",
      " Autres catégories"
]
const generateProduct = (topic) => {

      return (
            <div

            >
                  <h1
                        style={{
                              fontSize: 30
                        }}
                  > {topic}</ h1 >



                  <Grid container
                        fluid
                        justify="center"
                        alignContent="center"
                        xs={12}
                        style={{
                              padding: 20
                        }}
                  >
                        <Grid xs={12} md={4}
                              alignItems="center"
                        >
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                  </Grid>
            </div>
      )




}
export default function ProductsPage() {
      const [topicTitle, settopicTitle] = useState("Superette")
      return (

            <div
                  style={{
                        paddingTop: 100
                  }}
            >
                  <Layout
                        style={{

                              backgroundColor: "white",

                        }}
                  >

                        <Layout
                              style={{

                                    backgroundColor: "white",

                              }}
                        >
                              <Sider width={200}
                                    style={{
                                          position: "fixed",

                                    }}
                              >
                                    <Menu
                                          mode="inline"
                                          defaultSelectedKeys={['1']}
                                          defaultOpenKeys={['sub1']}
                                          style={{ height: '100%', borderRight: 0 }}
                                    >
                                          <Menu.Item key="1" onClick={
                                                () => settopicTitle("Superette")}> Superette</Menu.Item>
                                          <Menu.Item key="2" onClick={
                                                () => settopicTitle("Maison & Bureau")
                                          }>Maison & Bureau</Menu.Item>
                                          <Menu.Item key="3" onClick={
                                                () => settopicTitle(Topic[2])
                                          }>{Topic[2]}</Menu.Item>
                                          <Menu.Item key="4"
                                                onClick={
                                                      () => settopicTitle(Topic[3])
                                                }
                                          >{Topic[3]}</Menu.Item>


                                          <Menu.Item key="5"
                                                onClick={
                                                      () => settopicTitle(Topic[4])
                                                }
                                          >{Topic[4]}</Menu.Item>
                                          <Menu.Item key="6"
                                                onClick={
                                                      () => settopicTitle(Topic[5])
                                                }
                                          >{Topic[5]}</Menu.Item>
                                          <Menu.Item key="7"
                                                onClick={
                                                      () => settopicTitle(Topic[6])
                                                }
                                          >{Topic[6]}</Menu.Item>
                                          <Menu.Item key="8"
                                                onClick={
                                                      () => settopicTitle(Topic[7])
                                                }
                                          >{Topic[7]}</Menu.Item>


                                          <Menu.Item key="9"
                                                onClick={
                                                      () => settopicTitle(Topic[8])
                                                }
                                          >{Topic[8]}</Menu.Item>
                                          <Menu.Item key="10"
                                                onClick={
                                                      () => settopicTitle(Topic[9])
                                                }
                                          >{Topic[9]}</Menu.Item>
                                          <Menu.Item key="11"
                                                onClick={
                                                      () => settopicTitle(Topic[10])
                                                }
                                          >{Topic[10]}</Menu.Item>
                                          <Menu.Item key="12"
                                                onClick={
                                                      () => settopicTitle(Topic[11])
                                                }
                                          >{Topic[11]}</Menu.Item>


                                    </Menu>
                              </Sider>
                              <Layout style={{ padding: '0 24px 24px' }}
                                    style={{
                                          marginLeft: 200,
                                          backgroundColor: "white",
                                          color: "black"
                                    }}
                              >
                                    <Breadcrumb style={{ margin: '16px' }}

                                    >
                                          <Breadcrumb.Item style={{

                                                color: "black",

                                          }}>Accueil</Breadcrumb.Item>
                                          <Breadcrumb.Item style={{

                                                color: "black",

                                          }}>Produits</Breadcrumb.Item>
                                          <Breadcrumb.Item style={{

                                                color: "black",

                                          }}>{topicTitle}</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Content

                                          style={{
                                                padding: 24,
                                                margin: 0,
                                                color: "black",
                                                backgroundColor: "white"
                                          }}
                                    >
                                          {generateProduct(topicTitle)}
                                    </Content>
                              </Layout>
                        </Layout>
                  </Layout >
            </div >

      )
}
