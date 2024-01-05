import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { company_name, Degital_Ocean_flag } from "./Linksidebar";
// import "./Test.css";
import { toast } from "react-toastify";
import { FaRegCopy, FaHandHoldingWater, FaRegHandPaper } from "react-icons/fa";
import {
    BsClipboardCheck,
    BsCreditCard2Back,
    BsFillCheckCircleFill,
    BsQuestionDiamond,
} from "react-icons/bs";
import {
    RiShoppingCart2Line,
    RiEBike2Line,
    RiArrowGoBackLine,
} from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

const Test = () => {
    //   toast.configure();
    const { waybill } = useParams();
    console.log(waybill);

    const [productinfo, setProductinfo] = useState([]);
    console.log("productinfo", productinfo);
    useEffect(() => {
        console.log("this is waybill", waybill);

        var axios = require("axios");
        var data = JSON.stringify({
            access_id: 1,
            access_token: "firstAccessToken_test_product_track",
            product_waybill: "240101PA21120",
        });
        console.log("this is data : ", data);

        var config = {
            method: "post",
            url: Degital_Ocean_flag
                ? "https://e-deshdelivery.com/universalapi/allapi/unAuthorized_parcel_tracking" +
                "?company_name=" +
                company_name
                : "/universalapi/allapi/unAuthorized_parcel_tracking" +
                "?company_name=" +
                company_name,
            headers: {
                "Content-Type": "application/json",
                //'Authorization': `Bearer ${logingInformation_LocalStore.token}`
            },
            data: data,
        };

        // console.log("this is config", config);

        if (config) {
            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    // console.log(response.data);

                    return response;
                })
                .then((res) => {
                    // console.log("new response", res);
                    setProductinfo(res.data.message.message);
                    //setsearchresult(res.data.message.message.status_datetime)

                    //setinfoModalOpen(true);

                    //setpayload(true);
                });
        }
    }, []);

    const [copyFlag, setCopyFlag] = useState(false);

    const hanldeCopyEvent = (e) => {
        navigator.clipboard.writeText(
            productinfo.product_infor.producT_WAYBILL_NUMBER
        );
        setCopyFlag(true);
    };

    if (copyFlag) {
        toast.success("Order ID Coped");
        // setCopyFlag(false);
    }

    let lastItem;
    if (productinfo?.status_datetime) {
        lastItem =
            productinfo?.status_datetime[productinfo?.status_datetime?.length - 1];
        // console.log("lastItem", lastItem);
    } else {
        lastItem = false;
    }

    // -----------------------------------------------------------------------
    let [accepted, setAccepted] = useState({});
    let [picked, setPicked] = useState({});
    let [transit, setTransit] = useState({});
    let [outForDelivery, setOutForDelivery] = useState({});
    let [delivered, setDelivered] = useState({});

    let [acceptedStatus, setAcceptedStatus] = useState(false);
    let [pickedStatus, setPickedStatus] = useState(false);
    let [transitStatus, setTransitStatus] = useState(false);
    let [outForDeliveryStatus, setOutForDeliveryStatus] = useState(false);
    let [deliveredStatus, setDeliveredStatus] = useState(false);
    let [lostStatus, setLostStatus] = useState(false);
    let [returnStatus, setReturnStatus] = useState(false);
    let [holdStatus, setHoldStatus] = useState(false);

    useEffect(() => {
        productinfo?.status_datetime?.map((singleStatus) => {
            if (
                singleStatus.processing_status == "Product in System" ||
                singleStatus.processing_status == "Product Menifested" ||
                singleStatus.processing_status == "Product in Bag" ||
                singleStatus.processing_status == "Product in Transit " ||
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered" ||
                singleStatus.processing_status == "Product Received by FE " ||
                singleStatus.processing_status == "Product in Transit" ||
                singleStatus.processing_status == "Product Received by FE"
            ) {
                // accepted = { color: "green" };
                setAccepted("text-success");
                setAcceptedStatus(true);
            }
            if (
                singleStatus.processing_status == "Product Menifested" ||
                singleStatus.processing_status == "Product in Bag" ||
                singleStatus.processing_status == "Product in Transit " ||
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered" ||
                singleStatus.processing_status == "Product Received by FE " ||
                singleStatus.processing_status == "Product in Transit" ||
                singleStatus.processing_status == "Product Received by FE"
            ) {
                setAccepted("text-success");
                setAcceptedStatus(true);
            }
            if (
                singleStatus.processing_status == "Product in Bag" ||
                singleStatus.processing_status == "Product in Transit " ||
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered" ||
                singleStatus.processing_status == "Product Received by FE " ||
                singleStatus.processing_status == "Product in Transit" ||
                singleStatus.processing_status == "Product Received by FE"
            ) {
                console.log("Product in Bag ");
                setPicked("text-success");
                setPickedStatus(true);
            }
            if (
                singleStatus.processing_status == "Product in Transit " ||
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered" ||
                singleStatus.processing_status == "Product Received by FE " ||
                singleStatus.processing_status == "Product in Transit" ||
                singleStatus.processing_status == "Product Received by FE"
            ) {
                console.log("Product in Transit ");
                setTransit("text-success");
                setTransitStatus(true);
            }
            if (
                singleStatus.processing_status == "Product Received by FE " ||
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered" ||
                singleStatus.processing_status == "Product Received by FE"
            ) {
                console.log("Product Received by FE ");
                setOutForDelivery("text-success");
                setOutForDeliveryStatus(true);
            }
            if (
                singleStatus.processing_status == "Product Delivered " ||
                singleStatus.processing_status == "Product Delivered"
            ) {
                console.log("Product Delivered ");
                setDelivered("text-success");
                setDeliveredStatus(true);
                setHoldStatus(false);
                setReturnStatus(false);
                setLostStatus(false);
            } else if (singleStatus.processing_status == "Product Lost ") {
                setDelivered("text-danger");
                setLostStatus(true);
                setDeliveredStatus(false);
                setHoldStatus(false);
                setReturnStatus(false);
            } else if (singleStatus.processing_status == "Product Returned ") {
                setDelivered("text-danger");
                setReturnStatus(true);
                setDeliveredStatus(false);
                setHoldStatus(false);
                setLostStatus(false);
            } else if (singleStatus.processing_status == "Product Hold  ") {
                setDelivered("text-danger");
                setHoldStatus(true);
                setDeliveredStatus(false);
                setReturnStatus(false);
                setLostStatus(false);
            }
        });
    }, [productinfo]);
console.log(productinfo);
    // -----------------------------------------------------------------------

    return (
        <div className="w-full  py-5">
            {/* <h2>test page</h2> */}
            <div className="text-dark parcel_container my-5">
                <div className="grid grid-cols-2 justify-between bg-white p-3">
                    <div>Waybill </div>
                    <div className="flex gap-1 items-center justify-end">
                        <p className="inline pe-2">
                            {productinfo.product_infor &&
                                productinfo.product_infor.producT_WAYBILL_NUMBER}
                        </p>
                        {copyFlag ? (
                            <FaRegCopy
                                className="text-success"
                                onClick={(e) => hanldeCopyEvent(e)}
                            />
                        ) : (
                            <FaRegCopy onClick={(e) => hanldeCopyEvent(e)} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 justify-between bg-white p-3">
                    <div>Ref No </div>
                    <div className="flex gap-1 items-center justify-end">
                        <p className="inline pe-2">
                            {productinfo.product_infor &&
                                productinfo.product_infor.referencE_NO}
                        </p>
                        {copyFlag ? (
                            <FaRegCopy
                                className="text-success"
                                onClick={(e) => hanldeCopyEvent(e)}
                            />
                        ) : (
                            <FaRegCopy onClick={(e) => hanldeCopyEvent(e)} />
                        )}
                    </div>
                </div>


                <div className="grid grid-cols-4 justify-between bg-white p-3 mt-2">
                    <div className="col-lg-4 col-md-4 col-span-3">Shipping Info</div>
                    <div className="col-lg-8 col-md-8 col-sm-8 text-end">
                        <h5>
                            {productinfo.product_infor &&
                                productinfo.product_infor.contacT_NUMBER}
                        </h5>
                        <h6 name="receiver">
                            {productinfo.product_infor &&
                                productinfo.product_infor.consigneE_NAME}
                        </h6>
                        <span>
                            {productinfo.product_infor && productinfo.product_infor.address}
                        </span>
                    </div>
                </div>

                {/* tracing details */}
                <div className="justify-between bg-white p-3 mt-2">
                    <h3>Tracking Details</h3>

                    {/* track state */}
                    <div className="flex justify-center text-center mt-5">
                        <div className={accepted}>
                            <div className="text-[3.5rem] p-3">
                                <BsClipboardCheck />
                            </div>
                            <div
                                // style={accepted ? accepted : { color: "red" }}
                                // className=" text-center"
                                className={"flex items-center " + `${accepted ? accepted : "text-secondary"
                                    }`}
                            >
                                <p className="inline-block " style={{ opacity: 0 }}>
                                    -------
                                </p>
                                {acceptedStatus ? (
                                    <BsFillCheckCircleFill />
                                ) : (
                                    <MdCancel className="fs-5" />
                                )}
                                -------
                            </div>
                            <p>Accepted</p>
                        </div>
                        <div className={picked}>
                            <div className="text-[3.5rem] p-3">
                                <RiShoppingCart2Line />
                            </div>
                            <div
                                className={"flex items-center " + (picked ? picked : "text-secondary" + "text-center")}
                            >
                                -------
                                {pickedStatus ? (
                                    <BsFillCheckCircleFill />
                                ) : (
                                    <MdCancel className="fs-5" />
                                )}
                                -------
                            </div>
                            <p>Picked</p>
                        </div>
                        <div className={transit}>
                            <div className="text-[3.5rem] p-3">
                                <HiOutlineTruck />
                            </div>
                            <div
                                className={"flex items-center " + (transit ? transit : "text-secondary" + "text-center")}
                            >
                                -------
                                {transitStatus ? (
                                    <BsFillCheckCircleFill />
                                ) : (
                                    <MdCancel className="fs-5" />
                                )}
                                -------
                            </div>
                            <p>In Transit</p>
                        </div>
                        <div className={outForDelivery}>
                            <div className="text-[3.5rem] p-3">
                                <RiEBike2Line />
                            </div>
                            <div
                                className={"flex items-center " +
                                    (outForDelivery
                                        ? outForDelivery
                                        : "text-secondary" + "text-center")
                                }
                            >
                                -------
                                {outForDeliveryStatus ? (
                                    <BsFillCheckCircleFill />
                                ) : (
                                    <MdCancel className="fs-5" />
                                )}
                                -------
                            </div>
                            <p>
                                Out For <br /> Delivery
                            </p>
                        </div>
                        <div className={delivered}>
                            {deliveredStatus && (
                                <div className="text-[3.5rem] p-3">
                                    <FaHandHoldingWater />
                                </div>
                            )}
                            {!deliveredStatus &&
                                !holdStatus &&
                                !lostStatus &&
                                !returnStatus && (
                                    <div className="text-[3.5rem] p-3">
                                        <FaHandHoldingWater />
                                    </div>
                                )}
                            {returnStatus && (
                                <div className="text-[3.5rem] p-3">
                                    <RiArgridrow />
                                </div>
                            )}
                            {holdStatus && (
                                <div className="text-[3.5rem] p-3">
                                    <FaRegHandPaper />
                                </div>
                            )}
                            {lostStatus && (
                                <div className="text-[3.5rem] p-3">
                                    <BsQuestionDiamond />
                                </div>
                            )}
                            <div
                                className="text-center flex items-center "
                            // style={delivered ? delivered : { color: "gray" }}
                            >
                                -------
                                {deliveredStatus ? (
                                    <BsFillCheckCircleFill />
                                ) : (
                                    <MdCancel className="fs-5" />
                                )}
                                <p className="inline " style={{ opacity: 0 }}>
                                    -------
                                </p>
                            </div>
                            {returnStatus && <p>Returned</p>}
                            {deliveredStatus && <p>Delivered</p>}
                            {holdStatus && <p>Hold</p>}
                            {lostStatus && <p>Lost</p>}
                            {!deliveredStatus &&
                                !holdStatus &&
                                !lostStatus &&
                                !returnStatus && <p>Delivered</p>}
                        </div>
                    </div>
                    <div>
                        {productinfo.status_datetime &&
                            productinfo.status_datetime
                                .slice(0, productinfo.status_datetime.length - 1)
                                .map((singleItem) => {
                                    return (
                                        <div
                                            className="border-l-4 my-3"
                                            key={singleItem.date_time}
                                        >
                                            <div className="ps-2">
                                                <h6>{singleItem.processing_status}</h6>
                                                <small>{singleItem.date_time}</small>
                                            </div>
                                        </div>
                                    );
                                })}
                        {lastItem && (
                            <div className="border-l-4 border-green-500  my-3">
                                <div className="ps-2">
                                    <h6>{lastItem?.processing_status}</h6>
                                    <small>{lastItem?.date_time}</small>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* reciept */}
                <div className="grid grid-cols-2 justify-between bg-white p-3 mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-5">
                        <h4>Product Description</h4>
                        <span>
                            {productinfo.product_infor &&
                                productinfo.product_infor.producT_DESCRIPTION}
                        </span>
                    </div>
                    <div className="">
                        <div className="flex">
                            <h4 className="me-2">Receipt</h4>
                            <span className="flex gap-1 items-center border border-green-500 p-1 rounded">
                                <BsCreditCard2Back />{" "}
                                {productinfo.product_infor &&
                                    productinfo.product_infor.producT_PAYMENT_TYPE == "COD" ? (
                                    <span>CASH ON DELIVERY</span>
                                ) : (
                                    `${productinfo.product_infor &&
                                    productinfo.product_infor.producT_PAYMENT_TYPE
                                    }`
                                )}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Product Price</span>
                            <span>
                                TK :{" "}
                                {productinfo.product_infor &&
                                    productinfo.product_infor.producT_VALUE_AMOUNT}
                            </span>
                        </div>
                    </div>
                </div>

                {/* seller info */}
                <div className="grid grid-cols-4  bg-white p-3 mt-2">
                    <h5>Seller Info</h5>
                    <h6 className="text-success">
                        {productinfo.product_infor &&
                            productinfo.product_infor.merchentName}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Test;
