import React from 'react';
import Rx from 'rxjs';

export default class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.ref.value = this.props.value || '';

    Rx.Observable.fromEvent(this.ref, 'keyup')
      .map((e) => e.target.value)
      .debounceTime(500)
      .subscribe((value) => {
        this.props.onSearch(value);
      });
  }

  render() {
    return (
      <input
        type="test"
        className="form-control"
        ref={ref => this.ref = ref}
        placeholder={this.props.placeholder} />
    )
  }
}

SearchInput.propsTypes = {
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onSearch: React.PropTypes.func
};
