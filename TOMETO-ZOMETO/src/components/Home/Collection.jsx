import React from 'react'
import { MDBCard, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBTypography, MDBView} from "mdbreact";
const Collection = () => {
    return (
        <div>
            <MDBContainer style={{paddingTop:"25px"}} > 
            <MDBTypography tag='h1' variant="h1">Collections</MDBTypography><hr/>
                <MDBRow>
                  <MDBCol  md='6' >
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends.</p> 
                  </MDBCol>
                  <MDBCol md="6" >
                    <p className="float-right pink-text"><a className="pink-text" href="/all_collection">All collection in Ahmedabad  </a><MDBIcon icon="caret-right" /></p>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer style={{paddingTop:"25px"}} >
            <MDBRow>
              <MDBCol md='3'>
                <a href="/trending_shop">
                <MDBCard narrow cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay='white-slight'
                      className='card-img-top'
                      src='https://b.zmtcdn.com/data/collections/b53772a204429cb9b42313d6dc22bf3c_1556018415.jpg'
                      alt='Card cap'
                    />
                    <MDBMask className="flex-center">
                      <b><p className="black-text" style={{marginTop:"-100px"}} >Trending this week 30 Place <MDBIcon icon="caret-right" /></p></b>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                </a>
              </MDBCol>

              <MDBCol md='3'>
              <a href="/top_10_shop">
                <MDBCard narrow cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay='white-slight'
                      className='card-img-top'
                      src='https://b.zmtcdn.com/data/collections/be6543a9fbd2c6a8b6db0ad0e4972f58_1537267039.jpg'
                      alt='Card cap'
                    />
                    <MDBMask className="flex-center">
                      <b><p className="white-text" style={{marginTop:"200px"}} >Best of Ahmedabad 67 Place <MDBIcon icon="caret-right" /></p></b>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                </a>
              </MDBCol>

              <MDBCol md='3'>
              <a href="/romantic_resturants">
                <MDBCard narrow cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay='white-slight'
                      className='card-img-top'
                      src='https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg'
                      alt='Card cap'
                    />
                     <MDBMask className="flex-center">
                      <b><p className="white-text" style={{marginTop:"-100px"}} >Romantic Restuarents 17 Place <MDBIcon icon="caret-right" /></p></b>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                </a>
              </MDBCol>

              <MDBCol md='3'>
              <a href="/newly_open">
                <MDBCard narrow cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay='white-slight'
                      className='card-img-top'
                      src='https://b.zmtcdn.com/data/collections/daf0f4765d084892ed0378eade2d106f_1595820022.jpg'
                      alt='Card cap'
                    />
                    <MDBMask className="flex-center">
                      <b><p className="white-text" style={{marginTop:"200px"}} >Newly Open 13 Place <MDBIcon icon="caret-right" /></p></b>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                </a>
              </MDBCol>

            </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Collection
