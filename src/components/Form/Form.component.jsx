import React, { PureComponent } from 'react';
import Form from 'components/Form/Form.render';

class FormComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
    this.start = this.start.bind(this);
    this.delete = this.delete.bind(this);
    this.setInputRef = this.setInputRef.bind(this);

    this.state = { value: '', names: props.names || [] };
  }

  onChange(event) {
    event.preventDefault();

    const { value } = event.target;

    if (value !== this.state.value) this.setState({ value });
  }

  setInputRef(ref) {
    this.input = ref;
  }

  add(event) {
    event.preventDefault();

    const names = this.state.names.slice();
    names.push(this.state.value);

    this.setState({ value: '', names });

    this.input.focus();
  }

  delete(event, nameToDelete) {
    event.preventDefault();

    const names = this.state.names.filter(name => name !== nameToDelete);

    this.setState({ names });
  }

  start(event) {
    event.preventDefault();

    this.props.start(this.state.names);
  }

  render() {
    return (
      <Form
        value={this.state.value}
        onChange={this.onChange}
        add={this.add}
        names={this.state.names}
        start={this.start}
        delete={this.delete}
        setInputRef={this.setInputRef}
      />
    );
  }
}

export default FormComponent;
