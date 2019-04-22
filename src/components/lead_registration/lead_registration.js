import React, { Component } from 'react';
import logo from './logo.svg';
import './lead_registration.css';
import './logo_tech.png'

class RegistryForm extends Component {
    render() {
      return (
  <div className="container-fluid register">
  
                  

                  <div className="row">
                  <div className="row buttons">
                        <div class="btn-group " role="group" aria-label="Basic example">
                        <button type="button" id = "newload" class="btn btn-secondary butdes">New loan</button>
                        <button type="button" id = "interaction"  class="btn btn-secondary butdes">Interaction</button>
                        <button type="button" id = "meeting"  class="btn btn-secondary butdes">Meeting</button>
                        {/* <button type="button" class="btn btn-secondary butdes"></button>
                        <button type="button" class="btn btn-secondary butdes"></button> */}

                        </div>
                  </div>  
                  <br></br>
                      <div className="col-md-3 s register-left">
                          <img src="https://scontent.fgyd4-2.fna.fbcdn.net/v/t1.0-9/32086007_229958380890533_4187589368388517888_n.jpg?_nc_cat=101&_nc_ht=scontent.fgyd4-2.fna&oh=5e5aa5d944ba1ab6da06dc5612bd816d&oe=5D33F22B"/>
                          <h1></h1>
                      </div>
  
                      <div className="col-md-9 register-right"> 
                          <div className="tab-content register-right " id="myTabContent">
  
                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
                                  <h3 className="register-heading">Customer Relationship Management</h3>
  
                                  <div className="row register-form">
  
                                      <div className="col-md-6">
  
                                          <div className="form-group">
                                              <input type="text" className="form-control" required placeholder="Name *"  />
                                          </div>
                                          <div className="form-group">
                                              <input type="text" className="form-control" placeholder="Surname *" />
                                          </div>
                                          <div className="form-group">
                                          <select className="form-control">
                                                  <option className="hidden" selected disabled>Gender</option>
                                                  <option>Male</option>
                                                  <option>Female</option>
                                              </select>
                                          </div>
                                          <div className="form-group">
                                              <input type="text" type="text" minlength="10" maxlength="10"  className="form-control"  placeholder="Phone number"  />
                                          </div>
  
                                          
                                              
  
                                      </div>
  
  
                                      <div className="col-md-6">
  
  
  
                                      <div className="form-group">
                                          <select className="form-control">
                                                  <option className="hidden" selected disabled>Contact Source</option>
                                                  <option>Email</option>
                                                  <option>Instagram</option>
                                                  <option>Facebook</option>
                                                  <option>Call</option>
                                              </select>
                                          </div>
                                          
                                         
                                          <div className="">
                                            <div class="form-group">
                                                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
                                                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4" placeholder="Visited at:"/>
                                                    <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                          <div className="">
                                            <div class="form-group">
                                                  <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
                                                      <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3" placeholder="Created at:"/>
                                                      <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                                          <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                          <select className="form-control">
                                                  <option className="hidden" selected disabled>Status</option>
                                                  <option>status1</option>
                                                  <option>status2</option>
                                              </select>
  
                                          <input type="submit" className="btnRegister"  value="Register"/>
  
                                         
  
                                      </div>
                                  </div>
                              </div>
                             
                          </div>
                      </div>
                  </div>
  
              </div>
      );
    }
  }
  
export default RegistryForm