import React from 'react'
import { MDBBox,MDBCol, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBRow, MDBTypography} from "mdbreact";

const Footer = () => {
    return (
        <div>
             <MDBContainer style={{paddingTop:"35px"}}>
              <MDBTypography tag='h1'  variant="h1">Popular localities in and around Ahmedabad</MDBTypography><hr/>

            </MDBContainer>

            <MDBContainer>
              <MDBRow>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Bodakdev <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Navrangpura <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Prahlad Nagar <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Ranip <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Naroda <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Iskon <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>

                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Kalupur <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Gota <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Sarkhej <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>

                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Chandkheda <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>New Ranip <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Science City <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>

                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Ghatlodiya <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Settalite <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol style={{marginTop:"20px"}} md="4" sm="12" lg="4" >
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Palladium <MDBIcon className="float-right" icon="caret-right" /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer style={{marginTop:"40px"}} >
              <MDBRow>
                <MDBCol md="6" sm="12" lg="6" >
                  <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" height="30px" width="150px" alt="logo"/>
                </MDBCol>
                <MDBCol md="6" sm="12" lg="6" >
                  <span className="float-right" >India</span>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer style={{marginTop:'20px'}} >
              <MDBRow>
                <MDBCol md="3" style={{paddingButtom:"15px"}} >
                  <MDBTypography  tag='h6'><b>Company</b></MDBTypography>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Who we are</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Blog</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Careers</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Report Fraud</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Contact</MDBBox></a>
                </MDBCol>
                <MDBCol md="3" style={{paddingButtom:"15px"}} >
                  <MDBTypography  tag='h6'><b>FOR FOODIES</b></MDBTypography>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Code of Conduct</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Community</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Blogger Help</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Mobile Apps</MDBBox></a>
                </MDBCol>
                <MDBCol md="3" style={{paddingButtom:"15px"}} >
                  <MDBTypography  tag='h6'><b>FOR RESTAURANTS</b></MDBTypography>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Add Restaurants</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Claim your Listing</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Business App</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Restaurants</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Product of Business</MDBBox></a>
                </MDBCol>
                <MDBCol md="3" style={{paddingButtom:"15px"}} >
                  <MDBTypography  tag='h6'><b>FOR YOU</b></MDBTypography>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Privacy</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Terms</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Security</MDBBox></a>
                  <a href="##" ><MDBBox tag="footer" className="grey-text" mb={3} >Sitemap</MDBBox></a>
                </MDBCol>
              </MDBRow>
              <hr/>
              <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2020-2023 © Tomato™ Pvt Ltd. All rights reserved.</p>
            </MDBContainer>
        </div>
    )
}

export default Footer
