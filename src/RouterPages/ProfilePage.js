import React, { useState } from 'react'
import { Avatar } from 'antd';
import { Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Spin } from 'antd';
import Grid from '@material-ui/core/Grid';
import { Badge } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './ProfilePage.css'
export default function ProfilePage() {

      const { SubMenu } = Menu;
      const { Header, Content, Sider } = Layout;

      const { TabPane } = Tabs;
      const Pages = [
            "Informations générales",
            "Informations complémentaires",
            "Changer mot de passe",
            "Historique",

      ]
      const [PagesTitle, setPagesTitle] = useState(Pages[0])
      const generateProduct = (Pages) => {

            return (
                  <div
                        style={{

                              paddingTop: 100,


                        }}
                  >
                        <h1
                              style={{
                                    fontSize: 30
                              }}
                        > {Pages}</ h1 >



                        <Grid container
                              fluid
                              justify="center"
                              alignContent="center"
                              xs={12}
                              direction="column"
                              style={{
                                    textAlign: "center",
                                    paddingTop: '100'
                              }}


                        >
                              {PagesTitle === "Informations générales" &&
                                    <>
                                          < Grid
                                                justify="center"
                                                alignContent="center"
                                                xs={12}
                                                direction="column"

                                          >
                                                <Badge count={< EditOutlined style={{

                                                      top: '80%',
                                                      fontSize: 20,
                                                      backgroundColor: "white",
                                                      borderRadius: '50%',
                                                      marginRight: 5,
                                                      cursor: 'pointer',
                                                      padding: 3
                                                }} />}
                                                      placement="start"
                                                >
                                                      <a href="#" className="head-example" />
                                                      <Avatar size={100} src="https://i.pinimg.com/474x/71/5d/d8/715dd8b7ecd3830d7c034af524701a90.jpg" />
                                                </Badge>
                                                <h3

                                                >XXXXXXXXX</h3>
                                          </Grid>

                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"

                                                style={{
                                                      marginBottom: 20
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Nom d'utlisateur</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Mahdi SN</h4></Grid>
                                          </Grid>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginBottom: 20
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Adresse Email</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> mahdisaghroun6@gmail.com</h4></Grid>
                                          </Grid>

                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginBottom: 20
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Type de compte</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Client/Partenaire</h4></Grid>
                                          </Grid>
                                    </>
                              }
                              {PagesTitle === "Informations complémentaires" &&
                                    <>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginTop: 40,
                                                      marginBottom: 10
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Nom</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Mahdi</h4></Grid>
                                          </Grid>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginBottom: 10
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Prénom</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Saghroun </h4></Grid>
                                          </Grid>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{

                                                      marginBottom: 10
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Téléphone</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> 26594568</h4></Grid>
                                          </Grid>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginBottom: 10
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Ville</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Tunis </h4></Grid>
                                          </Grid>
                                          <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                      marginBottom: 10
                                                }}
                                                justify="space-between"

                                          >

                                                <Grid md={6} xs={12}> <h4> Adresse</h4></Grid>
                                                <Grid md={6} xs={12}> <h4> Tunis 35 XXXX </h4></Grid>
                                          </Grid></>}
                        </Grid>
                  </div >
            )
      }
      return (
            <div

            >



                  <Layout>
                        <Sider width={'max-content'}
                              style={{
                                    backgroundColor: "white",
                                    borderWidth: 0
                              }}

                        >
                              <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: 0 }}
                                    style={{

                                          paddingTop: 200,
                                          border: "none"


                                    }}
                              >
                                    <Menu.Item key="1" onClick={
                                          () => setPagesTitle(Pages[0])}>{Pages[0]} </Menu.Item>
                                    <Menu.Item key="2" onClick={
                                          () => setPagesTitle(Pages[1])
                                    }>{Pages[1]}</Menu.Item>
                                    <Menu.Item key="3" onClick={
                                          () => setPagesTitle(Pages[2])
                                    }>{Pages[2]}</Menu.Item>
                                    <Menu.Item key="4"
                                          onClick={
                                                () => setPagesTitle(Pages[3])
                                          }
                                    >{Pages[3]}
                                    </Menu.Item>





                              </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}
                              style={{

                                    backgroundColor: "white",
                                    color: "black"
                              }}
                        >

                              <Content

                                    style={{
                                          padding: 24,
                                          margin: 0,
                                          color: "black",
                                          backgroundColor: "white"
                                    }}
                              >
                                    {generateProduct(PagesTitle)}
                              </Content>
                        </Layout>
                  </Layout>

            </div >
      )
}
