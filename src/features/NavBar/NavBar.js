import React, { useState } from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { FcReddit, FcSearch } from "react-icons/fc";

const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
      
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="">
          <FcReddit style={{fontSize: "2rem"}} /> {" "}
          <span style={{color: "#fd7e14"}} >Reddit</span>Client
        </Navbar.Brand>
        <Form className=" d-flex w-50 mx-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={e=> setSearch(e.target.value)}
          />
          <FcSearch style={{"font-size": "2rem"}}/>
        </Form>
      </Container>
    </Navbar>
   
  );
};

export default NavBar;
