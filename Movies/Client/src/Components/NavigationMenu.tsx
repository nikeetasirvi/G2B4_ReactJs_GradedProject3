import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';

type Props = {
  activeKey: string,
  setSearchValue: (key: string) => void,
  setActiveKey: (key: string) => void
}

const NavigationMenu = ({ activeKey, setActiveKey, setSearchValue }: Props) => {

  const handleNavItemClick = (eventKey: string | null) => {
    setActiveKey(eventKey as string);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: '0 2% 0 2%' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="underline" activeKey={activeKey} onSelect={handleNavItemClick}>
          <Nav.Item>
            <Nav.Link eventKey="movies-in-theaters">Movies in theaters</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="movies-coming">Comming soon</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="top-rated-india">Top rated indian</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="top-rated-movies">Top rated movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="favourite">Favourites</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form className="d-flex" style={{ width: '19%', float: 'right', marginLeft: '27%' }}>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationMenu;