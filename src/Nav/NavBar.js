import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import './navBar.css'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
export default function NavBar() {


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
      const variants = {
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" },
      }
      const [isOpen, setIsOpen] = useState(false)
      return (
            <Grid container className={`nav ${show && "nav_white"}`}>


                  <Link to="/product"><span className="span">Produit</span></Link>
                  <span className="span">Meilleurs ventes</span>
                  <Link to="/shoptoken"> <span className="span">Pack jetons </span></Link>
                  <Link to="/howdoesitwork"><span className="span">Comment ca marche ?</span> </Link>
                  <Grid >

                  </Grid>
            </ Grid >
      )
}
