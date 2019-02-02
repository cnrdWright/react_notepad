import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const epicTitle = this.props.selectedEpic.Title
    const epics = this.props.epics.map((prop, index) =>{

        return <DropdownItem 
          key={index} 
          value={prop.Id}
          onClick={() => this.props.clicked(prop)}>
            {prop.Title}
        </DropdownItem>
    })

    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand className="text-white" href="/">Note.Pad</NavbarBrand>
          <h1>{epicTitle}</h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-white" href="/components/">Some Button</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" target="_blank" href="https://Trineo.com/">Trineo</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                  <strong>Epics</strong>
                </DropdownToggle>
                <DropdownMenu right>
                  {epics}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
