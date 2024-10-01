import React, {useState} from 'react';
import './css/contact.css'

function Contact() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    // Regular expression pattern for validation
    const regexPattern = /^(?:[a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    
    if (regexPattern.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setInputValue(value);
  };
  return (
    <main>
      <section className="form_margins">
        <h1 className="contact_me">CONTACT ME</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label form_word">Name</label>
            <input type="text" className="form-control" id="Name" aria-describedby="Name"/>
          </div>
          <div className="mb-3">
            <label  htmlFor="Email" className="form-label form_word">Email address</label>
            <input  
              rows="3" 
              type="email" 
              className={`form-control ${isValid ? '' : 'is-invalid'}`} 
              value={inputValue} 
              onChange={handleChange}
              id="Email" 
              aria-describedby="emailHelp"
            />
            <div className="form-text"> </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Message" className='form_word'>Message:</label>
            <textarea className="form-control" id="Message" rows="7" aria-describedby="Message"></textarea>
          </div>
          <button type="submit" className="btn custom_button" onclick="return false">Submit</button>
        </form>
      </section>
    </main>

  );
}

export default Contact;