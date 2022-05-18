import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../firebase.init';

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => { });
  };
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav>
    {user?.uid ? (
                <Nav.Link eventKey={2} onClick={signOutUser} href="/login">
                  SIGN-OUT
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} href="/login">LOGIN</Nav.Link>
              )}
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;