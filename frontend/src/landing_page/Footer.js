import React from "react";
import "../landing_page/stylesheet.css"
function Footer() {
    return (
        <footer className="background-fade text-white">
            <div className="container text-white mt-5 p-2">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/img/navlogo.png" style={{ width: "50px", fontWeight: "400" }} />  &nbsp;   <b id="grediant-text">Stoxie</b>
                        <p className="text-fade2">
                            &copy; 2025 - 20235, Stoxie Production Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className="col alink text-white">
                        <p className="text-white">Company</p>
                        <a className="text-fade2" href="">About</a>
                        <br />
                        <a className="text-fade2" href="">Products</a>
                        <br />
                        <a className="text-fade2" href="">Pricing</a>
                        <br />
                        <a className="text-fade2" href="">Referral programme</a>
                        <br />
                        <a className="text-fade2" href="">Careers</a>
                        <br />
                        <a className="text-fade2" href="">Stoxie.tech</a>
                        <br />
                        <a className="text-fade2" href="">Press & media</a>
                        <br />
                        <a className="text-fade2" href="">Stoxie cares (CSR)</a>
                        <br />
                    </div>
                    <div className="col alink">
                        <p className="text-white">Support</p>
                        <a className="text-fade2" href="">Contact</a>
                        <br />
                        <a className="text-fade2" href="">Support portal</a>
                        <br />
                        <a className="text-fade2" href="">X-Connect blog</a>
                        <br />
                        <a className="text-fade2" href="">List of charges</a>
                        <br />
                        <a className="text-fade2" href="">Downloads & resources</a>
                        <br />
                    </div>
                    <div className="col alink">
                        <p className="text-white">Account</p>
                        <a className="text-fade2" href="">Create an account</a>
                        <br />
                        <a className="text-fade2" href="">Fund Transfer</a>
                        <br />
                        <a className="text-fade2" href="">60 day Challenge</a>
                        <br />
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p className="text-fade">
                        Stoxie Financial Services Pvt. Ltd.
                        Registered Member: NSE & BSE - SEBI Reg. No: INZ000031633
                        Depository Services via Stoxie Securities Pvt. Ltd. - SEBI Reg. No: IN-DP-100-2015
                        Commodity Trading through Stoxie Commodities Pvt. Ltd.
                        Member of MCX - SEBI Reg. No: INZ000038238

                        Registered Office:
                        Stoxie Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India
                    </p>

                    <p className="text-fade alink">
                        <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on the
                        <a className="text-fade2" href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer"> SCORES portal</a>.
                        Mandatory details for filing complaints: Name, PAN, Address, Mobile Number, and Email ID.
                        <br />
                        <strong>Benefits:</strong> Effective communication and speedy grievance redressal.
                    </p>

                    <p className="text-fade">
                        <strong>Disclaimer:</strong> Investments in securities markets are subject to market risks.
                        Please read all related documents carefully before investing.
                    </p>

                    <p className="text-fade">
                        <strong>Investor Safety Advisory:</strong>
                        Prevent unauthorized transactions in your account. Update your mobile number and email ID with your stockbroker.
                        Receive information about your transactions directly from the Exchange via SMS/email at the end of the day.
                        <br /><br />
                        KYC is a one-time process while dealing in securities markets. Once completed through a SEBI-registered intermediary
                        (broker, DP, mutual fund, etc.), you do not need to repeat it when approaching another intermediary.
                        <br /><br />
                        Dear Investor, if you are applying for an IPO, there is no need to issue a cheque.
                        Simply mention your bank account number and sign the application form to authorize your bank to process the payment in case of allotment.
                        If shares are not allotted, funds will remain in your bank account.
                    </p>

                    <p className="text-fade">
                        <strong>Important Note:</strong> Stoxie does not offer stock tips, investment advice,
                        or authorize anyone to trade on your behalf. If anyone claims otherwise, please report it
                        by creating a support ticket on our official website.
                    </p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
