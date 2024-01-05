import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'
const Paperfly = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const api = "https://go-app.paperfly.com.bd/merchant/api/react/order/track_order.php?order_number="


    const handleSearch = (trackId) => {
        console.log(trackId)
        fetchData(trackId)
    }
    const fetchData = async (trackId) => {
        try {
            setLoading(true)
            const res = await axios.post(api + trackId.trim())
            setData(res.data)
            console.log(res.data)
            setLoading(false)
            setError(null)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(" PFL-BD0009426886")
    }, [])
    function convertTime(inputTime) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const dateTime = new Date(inputTime);

        const monthIndex = dateTime.getMonth();
        const monthName = months[monthIndex];

        const day = dateTime.getDate();
        const daySuffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        const formattedDate = `${monthName}, ${day}${daySuffix} ${dateTime.getFullYear()}`;

        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

        return `${formattedDate}, ${formattedTime}`;
    }


    return (
        <>
            <SearchBox
                handleSearch={handleSearch}
            />
            <div className='max-w-[600px] mx-auto grid gap-5'>
                {loading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
                {/* delivery info */}
                <div className='statusbar flex justify-between mt-5'>
                    <div>
                        <p>Order Id: {data?.package?.merchant_order_ref ?? "unknown"}</p>
                    </div>
                    <div className='delivered'>
                        <p>{data?.status ?? "unknown"}</p>
                    </div>
                </div>

                <div className='flex'>
                    <div style={{ display: "flex", flexDirection: "column", width: "27px" }}>
                        <div>
                            <div className="percelImage">
                                <img src="/assets/percel.svg" alt="" />
                            </div>
                            <div className="dottedState" style={{ opacity: 0.2 }}></div>
                            <div className="dottedState" style={{ opacity: 0.4 }}></div>
                            <div className="dottedState" style={{ opacity: 0.6 }}></div>
                            <div className="dottedState" style={{ opacity: 0.8 }}></div>
                            <div className="dottedState" style={{ opacity: 1 }}></div>
                        </div>
                        <div>
                            <div className="percelImage">
                                <img src="/assets/box_open.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        {/* sender */}
                        <div className="box" style={{ backgroundColor: "rgb(235, 241, 250)" }}>
                            <div className="type">Sender</div>
                            <div className="name">{data?.sender?.full_name}</div>
                            <div className="phone">{data?.sender?.phone_number}</div>
                            <div className=""></div>
                            <div className="address mt-4">District - {data?.sender?.district}<div className="addressDivider" style={{ marginTop: "7px" }}></div>Thana - {data?.sender?.thana_name}</div>
                        </div>
                        {/* receiver */}
                        <div className="box" style={{ backgroundColor: "rgb(232, 246, 252)" }}>
                            <div className="type">Receiver</div>
                            <div className="name">{data?.receiver?.full_name}</div>
                            <div className="phone">{data?.receiver?.phone_number}</div>
                            <div className="address">District - {data?.receiver?.district}<div className="addressDevider" style={{ marginTop: "7px" }}></div>Thana - {data?.receiver?.thana_name}</div>
                            <div className="address">{data?.receiver?.address_line}</div>
                        </div>

                        {/* order details */}
                        <div className="box" style={{ backgroundColor: "rgb(239, 254, 255)" }}>
                            <div className="titlePfl" style={{ fontWeight: 600, color: "rgb(51, 70, 96)" }}>Parcel Details:</div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ width: "24px", height: "24px", marginRight: "6px" }}>
                                    <img src='/assets/percel.svg' />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <div style={{ minHeight: "45px", width: "470px" }}>
                                        <div className="font600" style={{ color: "rgb(51, 70, 96)" }}>Merchant Order ID:</div>
                                        <div className="font500" style={{ marginTop: "-3px", fontSize: "14px", overflowWrap: "break-word" }}>{data?.package?.merchant_order_ref ?? "unknown"}</div>
                                    </div>
                                    <div style={{ minHeight: "45px" }}>
                                        <div className="font600" style={{ color: "rgb(51, 70, 96)" }}>Product Description:</div>
                                        <div className="font500" style={{ marginTop: "-3px", fontSize: "14px", maxWidth: "100%" }}>{data?.package?.package_description ?? "No description"}</div>
                                    </div>
                                    <div style={{ minHeight: "45px" }}>
                                        <div className="font600" style={{ color: "rgb(51, 70, 96)" }}>Product Weight:</div>
                                        <div className="font500 mb-3" style={{ marginTop: "-3px", fontSize: "14px" }}>{data?.package?.merchant_provide_weight ?? null}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", marginTop: "-8px" }} >
                                <div style={{ width: "24px", height: "24px", marginRight: "6px" }}>
                                    <img src='/assets/money.svg' />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
                                    <div style={{ minHeight: "45px" }}>
                                        <div className="font600" style={{ color: "rgb(51, 70, 96)" }}>Package price:</div>
                                        <div className="font500" style={{ marginTop: "-3px", fontSize: "14px" }}><b>৳</b> {data?.package?.collected_amount ?? null}</div>
                                    </div>
                                    <div style={{ minHeight: "45px" }}>
                                        <div className="font600" style={{ color: "rgb(51, 70, 96)" }}>Collected Amount:</div>
                                        <div className="font500" style={{ marginTop: "-3px", fontSize: "14px" }}><b>৳</b> {data?.package?.collectable_amount ?? null}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='box' style={{ backgroundColor: "rgb(239, 254, 255)" }}>
                            <div className="type">Timeline:</div>
                            <div className='grid gap-3'>
                                {
                                    data?.timeline?.map((item, index) => {
                                        return (
                                            <div key={index} className='flex gap-2'>
                                                <div className="MuiGrid-root css-rfnosa" style={{ width: "16px" }}>
                                                    <div className="timeline_dot"></div>
                                                    {
                                                        index !== data?.timeline?.length - 1 &&
                                                        <div className="timeline_line"></div>
                                                    }
                                                </div>
                                                <div>
                                                    <div className="date_time">{convertTime(item?.date_time)}</div>
                                                    <div className="status">
                                                        {
                                                            item?.message === "Pickup request sent" ?
                                                                "The merchant has requested for the parcel to be picked up." : item?.message
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paperfly