import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "./FireBase";
import { LoginUser, addUser } from "../redux/userReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { RESET_USER } from "../redux/userReducer/actionType";

const Signup = ({ onClose, onOpen }) => {

  const dispatch = useDispatch()
  const status = useSelector(state => state.user.status);
  const toast = useToast()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = result.user;
    let obj = {
      email,
      username: displayName,
      profilePic: photoURL,
      gauth: true
    }
    dispatch(LoginUser(obj));
  };


  const handleChange = (e) => {
    e.preventDefault();
    validref.current.style.display = "none"
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const { username, email, password } = user
    if (username === "" || username.length < 7) {
      toast({
        title: 'Enter Full Name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (email === "" || email.length < 12) {
      toast({
        title: 'Enter valid email',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }


    if (password !== "") {
      console.log(validref.current.children)
      validref.current.style.display = "flex"
      let temp = validref.current.children[1]
      temp.innerHTML = ""
      if(!password.match(new RegExp('^.{8,}$'))){
        temp.innerHTML+="<p>*8 characters</p>"
      }
      if(!password.match(new RegExp('^(?=.*[a-z]).+$'))){
        temp.innerHTML+="<p>*1 lowercase</p>"
      }
      if(!password.match(new RegExp('^(?=.*[A-Z]).+$'))){
        temp.innerHTML+="<p>*1 uppercase</p>"
      }
      if(!password.match(new RegExp('^(?=.*[0-9]).+$'))){
        temp.innerHTML+="<p>*1 digit</p>"
      }
      if(!password.match(new RegExp('^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$'))){
        temp.innerHTML+="<p>*1 symbol</p>"
      }
      toast({
        title: 'Enter valid password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }else if(password===""){
      toast({
        title: 'Password cannot be left empty',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }

    // dispatch(addUser(user))

  }

  useEffect(() => {
    if (status == '201') {
      toast({
        title: 'Login successfull',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
    }
    else if (status == "200") {
      toast({
        title: 'Signup successfull',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose();
      onOpen();
    }
    else if (status == "409") {
      toast({
        title: 'Email Already Exist',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    dispatch({ type: RESET_USER, payload: "" })
  }, [status])

  const validref = useRef(null)

  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" className="text-center h-[100px] font-bold">
          <Text className="font-bold text-[25px]">
            Signup
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px" className="items-center mt-10">
            <Box>
              <FormLabel htmlFor="username">Name:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                id="name"
                name="username"
                value={user.username}
                placeholder="Please enter username"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="email"
                id="emailid"
                name="email"
                value={user.email}
                placeholder="Please enter user email id"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="password"
                id="password"
                name="password"
                value={user.password}
                placeholder="Please enter user password"
                onChange={handleChange}
              />
            </Box>
            <div className="w-full hidden gap-5 px-5" ref={validref}>
              <p className='w-[44%] font-semibold'>Password must contain :</p>
              <div className="grid grid-cols-2 text-red-500 w-[55%] gap-1">
                
              </div>
            </div>
            <Button className="w-[77%] " colorScheme="red" size={"lg"} onClick={handleSubmit}>Submit</Button>
            <Box position='relative' className="mt-5">
              <Divider w='25vw' borderColor={'black'} />
              <AbsoluteCenter bg='white' px='6'>
                OR
              </AbsoluteCenter>
            </Box>
            <div className="mt-5 flex justify-center gap-2">
              <FcGoogle onClick={handleGoogleLogin} className="w-24 h-[35px] -ml-12 cursor-pointer" />
              <Center height="40px" className="pl-5">
                <Divider orientation="vertical" borderColor={"black"} />
              </Center>
              <Button className="ml-10" variant={"outline"} onClick={() => { onClose(); onOpen(); }} colorScheme={"blue"}>
                Login{" "}
              </Button>
            </div>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default Signup;