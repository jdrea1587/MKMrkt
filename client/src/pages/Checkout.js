import React from 'react';

function Checkout(props) {
  return (
    <div>
      {' '}
      <div className='form'>
        <div className='form'>
          <div className='form'>
            <form onSubmit={props.onSubmit}>
              <div className='input-field'>
                <input
                  type='text'
                  first_name={props.first_name}
                  onChange={props.onChange}
                  name='first_name'
                  placeholder={'First Name'}
                />
              </div>

              <div className='input-field'>
                <input
                  type='text'
                  last_name={props.last_name}
                  onChange={props.onChange}
                  name='last_name'
                  placeholder={'Last Name'}
                />
              </div>

              <div className='input-field'>
                <input
                  type='text'
                  email={props.email}
                  onChange={props.onChange}
                  name='email'
                  placeholder={'Email'}
                />
              </div>

              <div className='input-field'>
                <input
                  type='text'
                  address={props.address}
                  onChange={props.onChange}
                  name='address'
                  placeholder={'Address'}
                />
              </div>

              <div className='input-field'>
                <input
                  type='text'
                  city={props.city}
                  onChange={props.onChange}
                  name='city'
                  placeholder={'City'}
                />
              </div>

              <div className='input-field'>
                <input
                  type='text'
                  postal_code={props.postal_code}
                  onChange={props.onChange}
                  name='postal_code'
                  placeholder={'Postal Code'}
                />
              </div>

              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
