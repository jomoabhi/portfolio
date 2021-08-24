import React from 'react';
import emailjs from 'emailjs-com';
import '../../App.css';
// import './ContactUs.css';
import { Alert } from 'react-bootstrap';
class Contact extends React.Component {
  state = {
    result: '',
    error: '',
  };
  close1 = () => {
    this.setState({ result: '', error: '' });
    window.location = '/Contact';
  };
  sendEmail = (e) => {
    e.preventDefault();
    const { result, error } = this.state;
    emailjs
      .sendForm(
        'service_316bsla',
        'template_2q68fmc',
        e.target,
        'user_Ylbdt4NAGflpRhbWFgA61'
      )
      .then(
        (result) => {
          // document.querySelector('.alert').alert();
          // alert('message Send Successfully!');
          this.setState({ result: 'yes' });
        },
        (error) => {
          this.setState({ error: 'yes' });
          console.log(error.text);
        }
      );
  };
  render() {
    const { result, error } = this.state;
    return (
      <div
        class="container contact-form contact1"
        style={{ boxShadow: 'lightgrey 2px 2px 16px' }}
      >
        {result && (
          <p
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            style={{
              top: '0',
              height: 'fit-content',
              width: 'fit-content',
              zIndex: '15',
              margin: 'auto',
              fontSize: 'small',
            }}
          >
            Messeage send Successfully!
            {/* <button onClick={this.close1}>click</button> */}
            <button type="button" class="close" onClick={this.close1}>
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        )}
        {error && (
          <p
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
            style={{
              top: '0',
              height: 'fit-content',
              width: 'fit-content',
              zIndex: '15',
              margin: 'auto',
              fontSize: 'small',
            }}
          >
            Messeage not send!
            {/* <button onClick={this.close1}>click</button> */}
            <button type="button" class="close" onClick={this.close1}>
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        )}

        <form onSubmit={this.sendEmail.bind(this)}>
          <h3 className="des4" style={{ color: 'orange' }}>
            Drop a Message
          </h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="user_name"
                  class="form-control "
                  placeholder="Your Name *"
                  required="true"
                  // value=""
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  name="user_email"
                  class="form-control"
                  placeholder="Your Email *"
                  required="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="contact_number"
                  class="form-control"
                  placeholder="Your Phone Number *"

                  // value=""
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  placeholder="Your Message *"
                  required="true"
                  style={{ width: '100%', height: '150px' }}
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <button
                type="submit"
                name="btnSubmit"
                class="btnContact"

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
