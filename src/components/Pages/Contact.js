import React from 'react';
import '../../App.css';
import axios from 'axios';
import classNames from 'classnames';
// import './ContactUs.css';
class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    errors: '',
    noerrors: '',
  };
  // resetForm = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //     errors: '',
  //   });
  // };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    this.setState({ errors: '' });

    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.name === 'email' && this.state.email.length > 3) {
      if (!re.test(this.state.email)) {
        console.log('hey');
        this.setState({ errors: 'please enter a valid email', noerrors: '' });
      } else {
        this.setState({ noerrors: 'yes', errors: '' });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.message);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email)) {
      console.log('hey');
      this.setState({ errors: 'please enter a valid email' });
      return;
    }
    axios({
      method: 'POST',
      url: 'https://jomobackcontact.herokuapp.com/access',
      data: {
        message: this.state.message,
        email: this.state.email,
      },
    }).then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        alert('Message Sent!');
        this.setState({
          name: '',
          email: '',
          phone: '',
          message: '',
          errors: '',
          noerrors: '',
        });
      } else if (response.data.status === 'fail') {
        alert('Oops, something went wrong. Try again');
      }
    });
  };
  render() {
    const { errors, email, phone, name, message, noerrors } = this.state;
    return (
      <div
        className="container contact-form contact1"
        style={{ boxShadow: 'lightgrey 2px 2px 16px' }}
      >
        <form onSubmit={this.onSubmit.bind(this)}>
          <h3 className="des4" style={{ color: 'orange' }}>
            Drop a Message
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control "
                  placeholder="Your Name *"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>

              <div className="form-group">
                <input
                  className={classNames(
                    'form-control',
                    {
                      'is-invalid': errors,
                    },
                    { 'is-valid': noerrors }
                  )}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.onChange}
                  value={email}
                />
                {errors && (
                  <div style={{ height: '2rem', color: 'red' }}>
                    <h6>{errors}</h6>
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="phone"
                  type="text"
                  placeholder="Contact No."
                  onChange={this.onChange}
                  value={phone}

                  // value=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="message"
                  type="text"
                  placeholder="Your Message..."
                  onChange={this.onChange}
                  value={message}
                  required
                  style={{ width: '100%', height: '150px' }}
                />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                name="btnSubmit"
                className="btnContact"

                // value="Send"
              >
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
