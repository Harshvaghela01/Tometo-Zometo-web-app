import React, { useEffect, useState } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography, MDBIcon } from "mdbreact";

import {SmallHeader} from '../index';
import axios from 'axios';

const AllShop = () => {

    let [allShop,setAllShop] = useState([]);
    let getAllShop = () =>{
        console.log("function is called");
        axios.get("http://localhost:7777/partner/all_shop")
        .then((response)=>{
            setAllShop(response.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(() => {
        getAllShop();
    }, [])
    return (
        <>
            <SmallHeader/>
             <MDBContainer>
                 <MDBBreadcrumb color="white" >
                    <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                    <MDBBreadcrumbItem className="blue-text" active>All Shops</MDBBreadcrumbItem>
                </MDBBreadcrumb>

                <MDBTypography tag='h3' variant="h3">Inspiration for your first order</MDBTypography><hr/>
                   
                <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Sandwich</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/eb0673a5f8ba542e4386144631ddb3981615443443.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Tea</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/d7681165c5942b1ee19bb53bf8acb5db1615267384.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Fries</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                        <MDBRow>
                        <MDBCol md="4">
                            <MDBCard className="mb-2">
                            <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/17c690ce29f5e0cadf953fea3d8a0de91612438781.png" />
                            <MDBCardBody>
                                <MDBCardTitle>Pouha</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBCard className="mb-2">
                            <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/9c179e4b2beb3b5e026346f946e502931613232962.png" />
                            <MDBCardBody>
                                <MDBCardTitle>Vada</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBCard className="mb-2">
                            <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/d4ab91f6247076f482e44919dff9b6801614913578.png" />
                            <MDBCardBody>
                                <MDBCardTitle>Wrap</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        </MDBRow>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBRow>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/dish_images/39e52008184e301bb0d3dd6417d72c151603437643.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Kachori</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Paratha</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src="https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png" />
                                <MDBCardBody>
                                    <MDBCardTitle>Rolls</MDBCardTitle>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            </MDBRow>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel><br/>

{/* MAP METHOD WILL BE CALLED HERE */}

                <MDBTypography tag='h3' variant="h3">Order Food online in Ahmedabad</MDBTypography><hr/>
                <MDBRow>
                    {/* {allShop.map((data)=>{
                        return(
                            <MDBCol style={{"marginBottom":"20px"}} md="4">
                                <MDBCard className="mb-2">
                                <MDBCardImage className="img-fluid" src={data._id} />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h6">Sandwich</MDBCardTitle>
                                    <MDBRow>
                                    <p className="pink-text"><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star-half" /> </p>4.5<MDBTypography className="grey-text">( 12.6k Delivery Review)</MDBTypography>
                                    </MDBRow>
                                    <p>Burgers, Pizza, Sacks</p>
                                    <p className="grey-text">₹ 300 Per Person • 39 Min </p>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })} */}
                    {
                        allShop.length === 0 ? "loading...." : allShop.map((data)=>{
                            return(
                                <MDBCol key={data._id} style={{"marginBottom":"20px"}} md="4">
                                    <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src={data.profile_photo} />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h6">{data.shop_name}</MDBCardTitle>
                                        <MDBRow>
                                        <p className="pink-text"><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star-half" /> </p>4.5<MDBTypography className="grey-text">( 12.6k Delivery Review)</MDBTypography>
                                        </MDBRow>
                                        <p>Burgers, Pizza, Sacks</p>
                                        <p className="grey-text">₹ {data.per_person} Per Person • {data.avarage_time} </p>
                                    </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
                </MDBContainer>

        </>
    )
}

export default AllShop
