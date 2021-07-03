import React, { useState, useEffect } from 'react';
import './TopBarConnected.css'
import { useHistory } from "react-router-dom";
import { Input, Button, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, ShopOutlined, UsergroupAddOutlined, ExportOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { Grid } from '@material-ui/core';
import { slide as MenuAnimation } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { Menu as Menu1 } from '@material-ui/icons';

export default function TopBarConnected() {
      const [show, setshow] = useState(false)
      const transitionNavBar = () => {
            if (window.scrollY > 80) {
                  setshow(true)

            } else setshow(false)


      }
      useEffect(() => {

            window.addEventListener("scroll", transitionNavBar);
            return () => window.removeEventListener("scroll", transitionNavBar)
      }, [])
      const [showBurger, setshowBurger] = useState(false)
      const isDesktopOrLaptop = useMediaQuery({
            query: '(min-device-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isTabletOrMobileDevice = useMediaQuery({
            query: '(max-device-width: 1224px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
      const history = useHistory();

      const { Search } = Input;



      const [loading, setloading] = useState(false)
      const [text, settext] = useState("Se connecter")
      const menu = (

            <Menu >
                  <Menu.Item >
                        <a target="_blank" rel="noopener noreferrer" href="/profile"

                        >
                              <UserOutlined />
                              Voir mon profile
                        </a>
                  </Menu.Item>

                  <Menu.Item >
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">

                              <ShoppingOutlined />
                              Acheter jetons
                        </a>
                  </Menu.Item>
                  <Menu.Item danger onClick={() => {
                        localStorage.clear()
                        window.location.replace('/')
                  }
                  }>
                        <ExportOutlined />
                        Déconnexion</Menu.Item>
            </Menu >
      );

      return (
            <div>
                  < Grid container className={`con ${show && isTabletOrMobile && "con_white"}`} justify="space-between" xs={12} >
                        <Grid item xs={isTabletOrMobile ? 6 : 3}
                              style={{
                                    paddingTop: "6px"
                              }}
                        >
                              <span
                                    style={{
                                          fontSize: 20,
                                          fontWeight: 700,
                                          letterSpacing: 10,
                                          color: "#FC9904",

                                    }}
                              >E-COMMERCE</span>
                        </Grid>
                        {isDesktopOrLaptop && <Grid item xs={3}>




                              <Search placeholder="Rechercher produit ..." size="large"


                                    enterButton
                                    bordered={false}
                                    className="searchInput"

                              />


                        </Grid>}
                        <Grid item
                              xs={6}
                              justify="flex-end"
                              style={{
                                    textAlign: "center",
                                    paddingTop: !isDesktopOrLaptop ? 6 : 0,
                                    textAlign: "end"
                              }}
                        >

                              {isDesktopOrLaptop &&
                                    <Button type="primary" size={"large"} color="black" className="btn9"
                                          onClick={
                                                () => history.push('reqpartenaire')
                                          }
                                          icon={<UsergroupAddOutlined


                                                style={{
                                                      color: "#111"
                                                }}
                                          />}

                                    > Devenir partenaire</Button>}

                              {isDesktopOrLaptop && <Button type="primary" size={"large"} className="btn9"
                                    icon={<ShopOutlined style={{
                                          color: "#111"
                                    }} />}
                                    onClick={
                                          () => history.push('reqpointdv')
                                    }
                              >Devenir point de vente

                              </Button>}


                              <img src="poker-piece.png"
                                    style={{
                                          width: 15,
                                          height: 15,
                                          margin: 5,
                                          verticalAlign: "text-top",
                                    }}
                              >


                              </img>
                              <span
                                    style={{

                                          color: "#FC9904",
                                          marginRight: 10,

                                    }}
                              >2580</span>



                              <Dropdown overlay={menu} trigger={['click']}>

                                    <Avatar size={30} src="https://i.pinimg.com/474x/71/5d/d8/715dd8b7ecd3830d7c034af524701a90.jpg" onClick={e => e.preventDefault()}
                                          style={{
                                                cursor: "pointer",

                                                verticalAlign: "middle",
                                          }}
                                    ></Avatar>
                              </Dropdown>




                              {isTabletOrMobile &&
                                    < Menu1
                                          style={{
                                                color: "#FC9904",

                                                cursor: "pointer",
                                                verticalAlign: "middle",
                                                fontSize: 30,
                                                marginRight: 20,
                                                marginLeft: 20

                                          }}
                                          onClick={
                                                () => {
                                                      setshowBurger(true)
                                                }
                                          }
                                    ></Menu1>
                              }

                        </Grid>

                  </Grid >
                  {showBurger &&
                        <MenuAnimation right isOpen={showBurger}

                              outerContainerId={"outer-container"}
                              pageWrapId={"page-wrap"}
                              onClose={
                                    () => {
                                          setshowBurger(false)
                                    }
                              }
                        >
                              <div id="page-wrap"
                                    style={{
                                          backgroundColor: "white",
                                          display: "flex",
                                          flexDirection: "column",

                                          border: "none",
                                          marginTop: 50,
                                          height: "100%",
                                          width: "100%",
                                          transition: "all 3s"
                                    }}
                              >
                                    <div
                                          style={{
                                                textAlign: "end"

                                          }}
                                    >
                                          <CloseOutlined
                                                style={{
                                                      color: "#FC9904",

                                                      cursor: "pointer",
                                                      verticalAlign: "middle",
                                                      fontSize: 30,
                                                      marginRight: 20,
                                                      marginLeft: 20

                                                }}
                                                onClick={
                                                      () => {
                                                            setshowBurger(false)
                                                      }
                                                }
                                          />
                                    </div>
                                    <a href="/" className="linkDrop">Produit</a>
                                    <a href="/about" className="linkDrop"> Meilleurs ventes</a>
                                    <a href="/contact" className="linkDrop">    Pack jetons</a>
                                    <a href="" className="linkDrop"> Comment ca marche ?</a>
                                    <Button type="primary" size={"large"} color="black" className="btn9"
                                          onClick={
                                                () => history.push('reqpartenaire')
                                          }
                                          icon={<UsergroupAddOutlined


                                                style={{
                                                      color: "#111"
                                                }}
                                          />}

                                    > Devenir partenaire</Button>
                                    <Button type="primary" size={"large"} className="btn9"
                                          icon={<ShopOutlined style={{
                                                color: "#111"
                                          }} />}
                                          onClick={
                                                () => history.push('reqpointdv')
                                          }
                                    >Devenir point de vente

                                    </Button>

                              </div>

                        </MenuAnimation>
                  }
            </div>
      )
}
