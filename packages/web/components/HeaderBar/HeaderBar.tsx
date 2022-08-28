import React, { useEffect } from 'react'
import styles from './HeaderBar.module.css'
import AppBar from '@mui/material/AppBar'
import { Container } from '@mui/system'
import { Button, Toolbar } from '@mui/material'
import Logo from './logo.png'
import Image from 'next/image'

const HeaderBar = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'white', mb: 2 }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={styles.childContainer}>
            <Image src={Logo} width="75px" height="75px" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HeaderBar
