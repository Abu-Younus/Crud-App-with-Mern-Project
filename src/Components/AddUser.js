import React, { useState } from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {saveUser} from '../Actions/user'
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

const AddUser = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const [saveData,setSaveData] = useState({firstName:'', lastName:'',userName:'',email:'',mobile:'',password:''})

  const addUserDetails = () => {
    dispatch(saveUser(saveData));
    history.push('/')
  }

  return (
    <div className={classes.header}>
      <Typography className={classes.text} variant="h5">
        Add User
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
        <Button onClick={addUserDetails} variant="contained" color="primary">
          Save
        </Button>
      </FormControl>
    </div>
  );
};

export default AddUser;
