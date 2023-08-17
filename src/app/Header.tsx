'use client'
import React from 'react'
import { Box, Typography, Button, Divider, Menu, MenuItem } from '@mui/material';
import logo from './Assets/Images/logo.png';
import Image from 'next/image';
import flashSale from './Assets/Images/flashSale.png';
import Link from 'next/link';
import SideBar from './SideBar/SideBar';
// material UI icons
import * as MuiIcons from '@mui/icons-material';

//styles
import useStyles from './Header.Styles';

export default function Header() {
  const { classes } = useStyles();
  const Icons: any = MuiIcons;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className="flex flex-col">
          <Box className={classes.header}>
            <Box className={classes.topHeader}>
              <Link href="/Contact"><Button className={classes.btn}>Contact</Button> </Link>
              <Link href="/AboutUs"> <Button className={classes.btn}>About us</Button> </Link>
              <Button className={classes.btn}>Egypt (English) EGP <Icons.ArrowDropDown /></Button>
            </Box>
            <Link href='/' className={classes.logo}><Box >
              <Image src={logo}
                width={180}
                height={180}
                alt="Picture of pictura logo" />
            </Box> </Link>
            <Box className={classes.endHeader}>
              <Box className={classes.register}>
                <Link href="/Registeration"><Button className={classes.btnR}>sign up</Button></Link>
                <Link href="/LogIn"><Button className={classes.btnR}>log in</Button> </Link>
                <Icons.FavoriteBorder />
                <Icons.ShoppingCart />
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.bottomHeader}>
            <Button className={classes.btnB}>Home</Button>
            <Button className={classes.btnB} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>Shop</Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}> The Designer</MenuItem>
              <MenuItem onClick={handleClose}> <Link href='/PicturaDesigns'>PICTURA Designs</Link> </MenuItem>
            </Menu>
            <Button className={classes.btnB}>New Trends</Button>
            <Button className={classes.btnB}>Vote & Win</Button>
            <Button className={classes.btnB}> <Image src={flashSale}
              width={100}
              alt="Picture of flash sale logo" /></Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={classes.mobile}>
        <Box className={classes.mobileIcons}>
          <SideBar/>
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.Search></Icons.Search>
        </Box>
        <Box className={classes.mobileIcons}>
          <Image src={logo}
            width={80}
            height={80}
            alt="Picture of pictura logo" />
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.FavoriteBorder />
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.ShoppingCart />
        </Box>
      </Box>
    </React.Fragment>
  )
}