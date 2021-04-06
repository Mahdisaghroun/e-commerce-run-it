import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import TopBar from './TopBar';
import TopBarConnected from './TopBarConnected'
import { useMediaQuery } from 'react-responsive'
import { connect } from 'react-redux';
import { Connecting, checkConnected } from '../Redux/ActionCreators';

function NavClient({ isConnected, CheckingState }) {
      const [stateUser, setstateUser] = useState(false)
      useEffect(() => {
            const con = localStorage.getItem('Connected')

            checkConnected(con)
            setstateUser(con)
      }, [])
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
            <div>
                  { !stateUser && < TopBar ></TopBar>}
                  {  stateUser && <TopBarConnected></TopBarConnected>}
                  { !isTabletOrMobile && < NavBar ></NavBar>}
            </div >


      )
}
function mapStateToProps(state) {
      return {
            Data: state.Data,
            isConnected: state.isConnected
      }
}
function mapDispatchToProps(dispatch) {
      return {
            CheckingState: (data) => dispatch(checkConnected(data)),

      }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavClient)