import React from 'react'
import { MDBMask,MDBView} from "mdbreact";
const Home_Banner = () => {
    return (
        <div>
            <MDBView>
              <img
                src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                className="img-fluid"
                width="100%"
                style={{"margin-top": "-330px"}}
                height="auto"
                alt=""
              />
              <MDBMask className="flex-center">
               <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" height="60px" width="300"  alt="Logo"/>
              </MDBMask>
              <MDBMask>
               <b><h1 className="white-text text-center" style={{paddingTop:"350px",fontWeight:"bolder",fontStyle:"revert"}} >Discover the best food & drinks in Ahmedabad</h1></b><br/>
              </MDBMask>
              <MDBMask>
               <b> <a href="/" className="white-text float-right" style={{"text-indent": "50px",paddingRight:"500px",paddingTop:"25px"}} >Signup</a>
                <a href="/" className="white-text float-right" style={{paddingTop:"25px"}} >Login</a></b><br/>
              </MDBMask>
            </MDBView>
        </div>
    )
}

export default Home_Banner
