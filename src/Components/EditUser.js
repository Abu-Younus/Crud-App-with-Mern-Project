import React, {useState, useEffect} from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser } from "../Actions/user";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    marginTop: 90,
  },
  formMargin: {
    margin: "1% 0 0 35%",
    width: "35%",
  },
  text: {
    color: "#545454",
    textAlign: "center",
  },
});

const EditUser = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [saveData,setSaveData] = useState({firstName:'', lastName:'',userName:'',email:'',mobile:'',password:''})
  const {id} = useParams();
  const user = useSelector((state) => id ? state.users.find((u)=>u._id === id) : null)
  const history = useHistory();

  useEffect(() => {
    setSaveData(user);
  },[user])

  const editUserDetails = () => {
    dispatch(editUser(id,saveData));
    history.push('/')
  }

  return (
    <div className={classes.header}>
      <Typography className={classes.text} variant="h5">
        Edit User
      </Typography>
      <FormControl className={classes.formMargin}>
        <InputLabel>First Name</InputLabel>
        <Input name="firstName" value={saveData.firstName} onChange={(e) => setSaveData({...saveData, firstName:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <InputLabel>Last Name</InputLabel>
        <Input name="lastName" value={saveData.lastName} onChange={(e) => setSaveData({...saveData, lastName:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <InputLabel>User Name</InputLabel>
        <Input name="userName" value={saveData.userName} onChange={(e) => setSaveData({...saveData, userName:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <InputLabel>Email Address</InputLabel>
        <Input name="email" value={saveData.email} onChange={(e) => setSaveData({...saveData, email:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <InputLabel>Mobile Number</InputLabel>
        <Input name="mobile" value={saveData.mobile} onChange={(e) => setSaveData({...saveData, mobile:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <InputLabel>Password</InputLabel>
        <Input name="password" value={saveData.password} onChange={(e) => setSaveData({...saveData, password:e.target.value})} />
      </FormControl>

      <FormControl className={classes.formMargin}>
        <Button onClick={editUserDetails} variant="contained" color="primary">
          Update
        </Button>
      </FormControl>
    </div>
  );
};

export default EditUser;
