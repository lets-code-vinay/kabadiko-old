import React from 'react';

const Signup = () =>{

    const signupButton = (e:any) =>{
        e.preventDefault()
        console.log('singup utton click')
    }
    return (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 pt-5 mx-auto">
                    <div className=" sign-onbrdg mt-3">
                      <h6>We need a little more information about your company</h6>
                      <form name='signUpForm'>
                        <div className="form-group">
                          <input
                            id="address"
                            type="text"
                            // field='address'
                            // value={formState.address.value}
                            // onChange={hasFormValueChanged}
                            required={true}
                            maxLength={100}
                            // label="Address"
                            placeholder=""
                          />
                        </div>
    
                        <div className="form-group">
                          <input
                            id="city"
                            type="text"
                            // field="city"
                            // value={formState.city.value}
                            // onChange={hasFormValueChanged}
                            required={true}
                            maxLength={100}
                            // label="City"
                            placeholder=""
                          />
                        </div>
    
                        <div className="form-group">
                          <input
                            id="postalCode"
                            // field="postalCode"
                            // value={formState.postalCode.value}
                            // onChange={hasFormValueChanged}
                            required={true}
                            maxLength={100}
                            // label="Post Code"
                            placeholder=""
                          />
                        </div>
    
                        <div className="form-group">
                          <input
                            id="nosOfEmployee"
                            // numericality={true}
                            // field="nosOfEmployee"
                            // value={formState.nosOfEmployee.value}
                            // onChange={hasFormValueChanged}
                            // label="No. of Employee"
                            required={true}
                            maxLength={1000000000000}
                            placeholder=""
                            type="number"
                          />
                        </div>
    
                        <div className="cod-lg-12 col-md-12 col-sm-12 d-flex company-infobtn">
                          <button
                            className="btn btn-next mx-auto"
                            type="submit"
                            onClick={(e) => signupButton(e)}
                            style={{ cursor: "pointer" }}
                            // disabled={
                            //   !formState.address.value ||
                            //   !formState.city.value ||
                            //   !formState.postalCode.value ||
                            //   !formState.nosOfEmployee.value
                            // }
                          >Next
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="d-flex justify-content-center mb-3 bread-crumb">
                  {/* <ul className="list-unstyled d-flex">
                    <li className="first-c"></li>
                    <li className={step !== 'step2' ? "active" : 'd-active'} style={{ cursor: "pointer" }}>Step 1 <i className="fa fa-angle-right"></i></li>
                    <li className={step === 'step2' ? "active" : "d-active"} style={{ cursor: "pointer" }}>Step 2 <i className="fa fa-angle-right"></i> </li>
                    <li className={step !== 'step2' ? "active" : "d-active"} style={{ cursor: "pointer" }}>Step 3 <i className="fa fa-angle-right"></i> </li>
                  </ul> */}
                </div>
              </div>
    
              <div className="create-devider"></div>
            </>
    )
}

export default Signup;