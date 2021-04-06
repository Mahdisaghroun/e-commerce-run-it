import React, { useState, useEffect } from 'react'
import './TopBar.css'
import { useMediaQuery } from 'react-responsive'
import { Input, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { slide as MenuAnimation } from 'react-burger-menu'
import { UserOutlined, ShopOutlined, UsergroupAddOutlined, ExportOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { Menu as Menu1 } from '@material-ui/icons';
import { connect } from 'react-redux';

import { CONNECTING } from '../Redux/Actions';
import { Connecting, checkConnected } from '../Redux/ActionCreators';

import { Link } from 'react-router-dom'
function TopBar({ SetConnected }) {
      const history = useHistory();
      const { Search } = Input;
      const [loading, setloading] = useState(false)
      const [text, settext] = useState("Se connecter")
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
      return (
            <Grid container className={`con ${show && "con_white"}`} justify="space-between" xs={12}

            >
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

                        justify="flex-end"
                        className={`${isDesktopOrLaptop && "login"}`}

                  >
                        {isDesktopOrLaptop && <form>
                              <Input size="large" placeholder="Nom utlisateur"

                                    style={{
                                          width: 200,

                                    }}
                                    className="input"
                              />
                              <Input size="large" placeholder="Mot de passe"
                                    style={{
                                          width: 200
                                    }}
                                    type="password"
                                    className="input"
                              />
                              <Button type="primary"
                                    size="large"
                                    className="btn9"
                                    loading={loading}
                                    onClick={
                                          () => {

                                                setloading(true)
                                                settext("Connexion")
                                                SetConnected()
                                          }
                                    }

                              >{text} </Button>

                              <a href="#"
                                    className="linkTopBarNot"
                              >Mot de passe oublié ?</a>
                              <a href="/register"
                                    className="linkTopBarNot"
                              > Créer un compte</a>



                        </form>}
                        {isTabletOrMobile &&
                              < Menu1
                                    style={{
                                          color: "#FC9904",

                                          cursor: "pointer",

                                          fontSize: 30,
                                          marginRight: 20,
                                          marginLeft: 20,
                                          marginTop: 6

                                    }}
                                    onClick={
                                          () => {
                                                setshowBurger(true)
                                          }
                                    }
                              ></Menu1>
                        }
                  </Grid>
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

                                    > Se connecter</Button>
                                    <Button type="primary" size={"large"} className="btn9"
                                          icon={<ShopOutlined style={{
                                                color: "#111"
                                          }} />}
                                          onClick={
                                                () => history.push('reqpointdv')
                                          }
                                    >S'inscrire

                        </Button>

                              </div>

                        </MenuAnimation>
                  }
            </Grid >
      )
}

function mapDispatchToProps(dispatch) {
      return {
            SetConnected: () => dispatch(Connecting(true)),

      }
}
export default connect(null, mapDispatchToProps)(TopBar)
