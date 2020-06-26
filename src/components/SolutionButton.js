import React from "react";
import Button from 'react-bootstrap/Button';

class SolutionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.setToggle = this.setToggle.bind(this);
  }

  setToggle() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { toggle } = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.setToggle}>
          {(toggle) ? "Ocultar solución" : "Mostrar Solución"}
        </Button>
        {
          toggle && this.props.sol()
        }
      </>
    );
  }
}

export default SolutionButton;