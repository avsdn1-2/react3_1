import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Request extends PureComponent {
  state = {
    error: null,
    isLoading: false,
    data: null,
  };

  componentDidMount() {
    axios.get("https://60bb880442e1d00017620c95.mockapi.io/Posts/")
        .then((res) => {
          let { status, data } = res;
          let error = status === 200 ? null : `Something went wrong. Error code: ${status}`;
          console.log(data);
          setTimeout(() => {
            this.setState({
              error,
              data,
              isLoading: false,
            });
          }, 1000);
        })
        .catch((error) => {
          this.setState({
            error: "Something went wrong",
            data: null,
            isLoading: false,
          });
        });

    this.setState({
      isLoading: true,
    });
  }

  render() {
    let { isLoading, data, error } = this.state;

    return (
        <div className="example">
          {isLoading ? (
              <div>Loading...</div>
          ) : (
              <div>
                {error !== null ? (
                    <div>Error! {error}</div>
                ) : (
                    <div>{data && data.map((el) => (
                        <div key={el.id}>{el.title}</div>
                    ))}</div>
                )}
              </div>
          )}
        </div>
    );
  }
}

export default Request;

Request.propTypes = {};

Request.defaultProps = {};