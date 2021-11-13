import { faCar, faPlus, faSignOutAlt, faTasks, faThList, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { getAuth, signOut } from "firebase/auth";
import '../../../Login/Login/firebase.config';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { Tooltip, useMediaQuery } from '@mui/material';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';

// Custom Styles
const asideStyles = makeStyles({
  asideColors: {
    '& a': { color: 'white' }
  },

  asideActive: {
    backgroundColor: 'white !important',

    '& a': {
      color: 'black !important',
    }
  },

  hoverEffect: {
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',

    '& a': {
      color: 'white',
    },

    '&:hover': {
      backgroundColor: 'white',
      color: 'black',

      '& a': {
        color: 'black',
      }
    }
  }
})

const DashboardAside = () => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { asideActive, hoverEffect, asideColors } = asideStyles();
  const matchesMediaQuery = useMediaQuery('(min-width:960px)');

  const history = useHistory();
  // Checking Routes
  const params = useParams("/dashboard/:dynamic");
  // Admin
  const isMakeAdmin = params.dynamic === "makeAdmin";
  const isManageAllOrders = params.dynamic === "manageAllOrders";
  const isAddANewCar = params.dynamic === "addANewCar";
  const isManageCars = params.dynamic === "manageCars";

  // User
  const isMyOrders = params.dynamic === "myOrders";
  const isReview = params.dynamic === "review";
  const isPay = params.dynamic === "pay";

  // Admin and user route fix
  if (loggedInUser.isAdmin === 'true') {
    if (isMyOrders || isReview || isPay) {
      history.push("/dashboard/manageAllOrders");
    }
  } else {
    if (isMakeAdmin || isManageAllOrders || isAddANewCar || isManageCars) {
      history.push("/dashboard/myOrders");
    }
  }

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setLoggedInUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('displayName');
      localStorage.removeItem('email');
      localStorage.removeItem('photoURL');
      alert("Logged out successfully!");
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  const asideListFunction = (typeName, icon, mainName) => {
    return (
      <Link to={`/dashboard/${typeName}`}>
        <Box sx={{display: 'flex', alignItems: 'center', fontSize: '18px'}} id={typeName}>
          <Box sx={{p: 2}}>
            <FontAwesomeIcon icon={icon} />
          </Box>
          {
            matchesMediaQuery &&
            <Box>
              {mainName}
            </Box>
          }
        </Box>
      </Link>
    );
  }
  return (
    <Box sx={{minHeight: '100%', width: '100%'}} className={asideColors}>
      {
        loggedInUser.isAdmin === "true" ?
        <>
          <Tooltip title="Manage All Orders" placement="right" arrow>
            <Box className={`${hoverEffect} ${isManageAllOrders && asideActive}`}>
              {asideListFunction("manageAllOrders", faTasks, "Manage All Orders")}
            </Box>
          </Tooltip>
          <Tooltip title="Add A New Car" placement="right" arrow>
            <Box className={`${hoverEffect} ${isAddANewCar && asideActive}`}>
              {asideListFunction("addANewCar", faPlus, "Add A New Car")}
            </Box>
          </Tooltip>
          <Tooltip title="Manage Cars" placement="right" arrow>
            <Box className={`${hoverEffect} ${isManageCars && asideActive}`}>
              {asideListFunction("manageCars", faCar, "Manage Cars")}
            </Box>
          </Tooltip>
          <Tooltip title="Make Admin" placement="right" arrow>
            <Box className={`${hoverEffect} ${isMakeAdmin && asideActive}`}>
              {asideListFunction("makeAdmin", faUserShield, "Make Admin")}
            </Box>
          </Tooltip>
        </> :
        <>
          <Tooltip title="My Orders" placement="right" arrow>
            <Box className={`${hoverEffect} ${isMyOrders && asideActive}`}>
              {asideListFunction("myOrders", faThList, "My Orders")}
            </Box>
          </Tooltip>
          <Tooltip title="Review" placement="right" arrow>
            <Box className={`${hoverEffect} ${isReview && asideActive}`}>
              {asideListFunction("review", faTasks, "Review")}
            </Box>
          </Tooltip>
          <Tooltip title="Pay" placement="right" arrow>
            <Box className={`${hoverEffect} ${isPay && asideActive}`}>
              {asideListFunction("pay", faAmazonPay, "Pay")}
            </Box>
          </Tooltip>
        </>
      }
      <Tooltip title="Logout" placement="right" arrow>
        <Box className={hoverEffect} onClick={handleLogOut}>
          <Box sx={{display: 'flex', alignItems: 'center', fontSize: '18px'}}>
            <Box sx={{p: 2}}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Box>
            {
              matchesMediaQuery &&
              <Box>
                Logout
              </Box>
            }
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default DashboardAside;