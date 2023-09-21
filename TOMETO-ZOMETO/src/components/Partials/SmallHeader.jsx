import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React from 'react'

const SmallHeader = () => {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="2" lg="2" sm="6" >
                    <a href="/"><img style={{marginTop:"25px"}} src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" height="30px" width="130px" /></a>
                    </MDBCol>
                    <MDBCol md="2" lg="2" sm="6" className="pink-text" >
                        <MDBInput value="Ahmedabad" readOnly icon="map-marker-alt" />
                    </MDBCol>
                    <MDBCol md="4" lg="4" sm="4" >
                        <MDBInput label="Search for restaurant, Cuisine or a dish" icon="search" />
                    </MDBCol>
                    <MDBCol md="2" lg="2" sm="4" >
                         <center><p style={{marginTop:"35px"}} >Login</p></center> 
                    </MDBCol>
                    <MDBCol md="2" lg="2" sm="4" >
                         <center><p style={{marginTop:"35px"}} >Signup</p></center> 
                    </MDBCol>
                </MDBRow>
            </MDBContainer><br/><br/>
        </div>
    )
}

export default SmallHeader
