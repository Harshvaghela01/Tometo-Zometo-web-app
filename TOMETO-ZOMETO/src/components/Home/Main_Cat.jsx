import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer,MDBRow, MDBView} from "mdbreact";
const Main_Cat = () => {
    return (
        <div>
            <MDBContainer style={{paddingTop:"50px"}} >
              <MDBRow>
              <MDBCol md='4'>
                <a href="/all_shops">
                  <MDBCard narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*'
                        alt='food'
                      />
                    </MDBView>

                    <MDBCardBody>

                      <MDBCardTitle className='font-weight-bold'>
                        Order food online
                      </MDBCardTitle>

                      <MDBCardText>
                        Stay home and order to your doorstep now...
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                  </a>
                </MDBCol>


                <MDBCol md='4'>
                <a href="/out_for_meal">
                  <MDBCard narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*'
                        alt='food'
                      />
                    </MDBView>

                    <MDBCardBody>

                      <MDBCardTitle className='font-weight-bold'>
                        Go out for meal
                      </MDBCardTitle>

                      <MDBCardText>
                        View the city's favorite dining venues
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                  </a>
                </MDBCol>

                <MDBCol md='4'>
                  <a href="/zomoto_pro">
                  <MDBCard narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*'
                        alt='food'
                      />
                    </MDBView>

                    <MDBCardBody>

                      <MDBCardTitle className='font-weight-bold'>
                        Tometo pro 😉
                      </MDBCardTitle>

                      <MDBCardText>
                        Enjoy limitness dining privileges
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                  </a>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Main_Cat
