import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
import "./css/SignUp.css";

const FormPage = () => {
  return (
    <MDBContainer style={{padding: "0"}}>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody className='mx-4'>
              <div className='text-center'>
                <h3 className='pink-text mb-5'>
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput label='Your email' group type='text' validate />
              <MDBInput label='Your password' group type='password' validate />
              <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol className='text-center'>
                  <MDBBtn className='z-depth-1' color='pink' rounded block>
                    Sign up
                  </MDBBtn>
                </MDBCol>
                <MDBCol >
                  <p className='font-small grey-text d-flex justify-content-end'>
                    Have an account?
                    <a href='#!' className='blue-text ml-1'>
                      Log in
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <div className='footer pt-3 mdb-color lighten-3'>
              <MDBRow className='d-flex justify-content-center'>
                <p className='font-small white-text mb-2 pt-3'>
                  or Sign up with
                </p>
              </MDBRow>
              <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
                  <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                  <MDBIcon
                    fab
                    icon='google-plus-g'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;