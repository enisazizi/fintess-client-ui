import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import  data  from "../data";
import { Form, Button } from "react-bootstrap";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const Login = ({ history }) => {
  const [client, setClient] = useRecoilState(data.atoms.Client);
  const [formData, setFormData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log(client)
    if (!client.auth) return;
    history.push("/activity");
  }, [client]);
  const handleForm = async (e) => {
    e.preventDefault();
  
    const response = await data.api.auth.client({username,password});
    if (!response) return;
    setClient({ auth: true, data: response });
    await data.api.activity.checkIn()
  };
  return (
    <div style={{marginTop:'10rem'}}>

      <h3 className="text-center" style={{fontWeight:'500',color:'#fff',textTransform:'uppercase',letterSpacing:'1px'}}>track your progress</h3>
      <Form onSubmit={handleForm}>
        <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'#FFFAFA'}} ></Form.Label>
                <Form.Control type="text" placeholder="Username"  name="username"  onChange={(e) => setUsername(e.target.value)}/>
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password"   name="password"  onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check style={{color:'#FFFAFA'}} type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Login
            </Button>
            </Form>
    </div>
  );
};

export default Login;
