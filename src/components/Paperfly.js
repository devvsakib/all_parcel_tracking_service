import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'
const Paperfly = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const api = "https://go-app.paperfly.com.bd/merchant/api/react/order/track_order.php?order_number="
    const trackId = "PFL-BD0009426886"
    const url = api + trackId

    const handleSearch = (trackId) => {
        fetchData(trackId)
    }
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.post(url)
            setData(res.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    console.log(data)
    return (
        <>
            <SearchBox
                handleSearch={handleSearch}
            />
            <div className='max-w-[600px] mx-auto'>
                <div className='statusbar flex justify-between mt-5'>
                    <div>
                        <p>Order Id: PFL-BD0009426886</p>
                    </div>
                    <div className='delivered'>
                        <p>Delivered</p>
                    </div>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}

                {/* delivery info */}
                <div>
                        {/* sender */}
                        {/* <div className="" style="background-color: rgb(235, 241, 250);">
                            <p className="">Sender</p>
                            <p className="">DARAZ</p>
                            <p className=""></p>
                            <p className="">District - Dhaka</p>
                            <p className="" style="margin-top: 7px;">Thana - Tejgaon Shilpanchal</p>
                        </div> */}
                        {/* receiver */}
                        {/* <div className="MuiGrid-root jss13 css-rfnosa" style="background-color: rgb(232, 246, 252);">
                            <div className="jss17">Receiver</div>
                            <div className="jss20">Sakib Ahmed</div>
                            <div className="jss18">017XXXXX300</div>
                            <div className="jss16">District - Moulvibazar<div className="jss14" style="margin-top: 7px;"></div>Thana - Moulvibazar Sadar</div>
                            <div className="jss16">Sylhet, Moulvibazar, Kamalganj Shamsher Nagar, shamshernagar, airport road, psi market(deliver here PSI MARKET)</div>
                        </div> */}

                        {/* order details */}
                        {/* <div className="MuiGrid-root jss13 css-rfnosa" style="background-color: rgb(239, 254, 255);">
                            <div className="jss17" style="font-weight: 600; color: rgb(51, 70, 96);">Parcel Details:</div>
                            <div style="display: flex; flex-direction: row;">
                                <div style="width: 24px; height: 24px; margin-right: 6px;">
                                    <img src='/assets/percel.svg' />
                                </div>
                                <div style="display: flex; flex-direction: column;">
                                    <div style="min-height: 45px; width: 470px;">
                                        <div className="jss20" style="color: rgb(51, 70, 96);">Merchant Order ID:</div>
                                        <div className="jss18" style="margin-top: -3px; font-size: 14px; overflow-wrap: break-word;">PFL-BD0009426886</div>
                                    </div>
                                    <div style="min-height: 45px;">
                                        <div className="jss20" style="color: rgb(51, 70, 96);">Product Description:</div>
                                        <div className="jss18" style="margin-top: -3px; font-size: 14px; max-width: 100%;"></div>
                                    </div>
                                    <div style="min-height: 45px;">
                                        <div className="jss20" style="color: rgb(51, 70, 96);">Product Weight:</div>
                                        <div className="jss18" style="margin-top: -3px; font-size: 14px;">0.00 KG</div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: row; margin-top: -8px;">
                                <div style="width: 24px; height: 24px; margin-right: 6px;">
                                    <img src='/assets/money.svg' />
                                </div>
                                <div style="display: flex; flex-direction: column;">
                                    <div style="min-height: 45px;">
                                        <div className="jss20" style="color: rgb(51, 70, 96);">Package price:</div>
                                        <div className="jss18" style="margin-top: -3px; font-size: 14px;"><b>৳</b> 379</div>
                                    </div>
                                    <div style="min-height: 45px;">
                                        <div className="jss20" style="color: rgb(51, 70, 96);">Collected Amount:</div>
                                        <div className="jss18" style="margin-top: -3px; font-size: 14px;"><b>৳</b> 379</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
                <h6 name="receiver">{data?.receiver?.full_name}</h6>
                <h4 name="delivered">{data?.status}</h4>
            </div>
        </>
    )
}

export default Paperfly