import React, { useEffect } from "react";
import {
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUserById } from "../Actions/user";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    width: "80%",
    margin: "2% 0 0 10%",
  },
  tableHead: {
    background: "#000000",
  },
  tableCellHead: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  button: {
    marginRight: "1%",
  },
  tableCellBody: {
    fontSize: 15,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  text: {
    marginTop: 90,
    color: "#FF0000",
    textAlign: "center",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: 15,
  },
});

const Home = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users);
  const {id} = useParams();
  const history = useHistory();
  console.log(users);

  useEffect(() => {
    dispatch(getUsers())
  },[getUsers()])

  const deleteUserDetails = () => {
    dispatch(deleteUserById(id));
    history.push('/')
  }

  return (
    <div>
      <Typography className={classes.text} variant="h5">
        User List
      </Typography>
      <Table className={classes.header}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCellHead}>ID</TableCell>
            <TableCell className={classes.tableCellHead}>First Name</TableCell>
            <TableCell className={classes.tableCellHead}>Last Name</TableCell>
            <TableCell className={classes.tableCellHead}>User Name</TableCell>
            <TableCell className={classes.tableCellHead}>
              Email Address
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              Mobile Number
            </TableCell>
            <TableCell className={classes.tableCellHead}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((user) => {
              return(
                <TableRow>
            <TableCell className={classes.tableCellBody}>{user._id}</TableCell>
            <TableCell className={classes.tableCellBody}>{user.firstName}</TableCell>
            <TableCell className={classes.tableCellBody}>{user.lastName}</TableCell>
            <TableCell className={classes.tableCellBody}>{user.userName}</TableCell>
            <TableCell className={classes.tableCellBody}>
              {user.email}
            </TableCell>
            <TableCell className={classes.tableCellBody}>{user.mobile}</TableCell>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              <NavLink className={classes.navLink} to={`/edit/${user._id}`}>
                Edit
              </NavLink>
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={deleteUserDetails}
            >
              Delete
            </Button>
          </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
