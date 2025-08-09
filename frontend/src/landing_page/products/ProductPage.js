import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'


function ProductPage() {
    return (    
        <>
        < Hero />
        
        
                    < LeftSection
                        imageURL={"media/img/doller.png"}
                        productName={"Doller"}
                        productDesription={"Stoxie DirectMF — invest in direct mutual funds online, 100% commission-free, with every unit delivered straight to your Demat account. Enjoy a seamless, intuitive experience on both Android and iOS — wherever you go, your portfolio goes with you."}
                        tryDemo={""}
                        learnMore={""}
                        googlePlay={""}
                        appStore={""}
                    />


            <RightSection
                imageURL={"media/img/console.png"}
                productName={"Holdings"}
                productDesription={" Your Stoxie Command Center. Track, analyze, and master your portfolio with rich visualizations and deep-dive reports — all in one sleek, centralized dashboard. Every trade. Every investment. Total clarity."}
                tryDemo={""}
                learnMore={""}
                googlePlay={""}
            />


        
            < LeftSection
                imageURL={"media/img/espresso.png"}
                productName={"Espresso"}
                productDesription={" Meet Espresso — our ultra-fast, precision-built trading platform engineered for the bold. With real-time streaming market data, advanced charting tools, and an elegantly intuitive interface, Espresso delivers a seamless experience across Android and iOS. It's not just trading. It's a ritual — fast, focused, and built for momentum. "}
                tryDemo={""}
                learnMore={""}
                googlePlay={""}
                appStore={""}
            />

            <RightSection
                imageURL={"media/img/stoxiemobile.png"}
                productName={"Stoxie Mobile"}
                productDesription={" The market, one card at a time. A beautifully designed collection of bite-sized stock market lessons — packed with clarity, visuals, and real insight. No jargon, no overwhelm. Just smart, swipeable content made for learning on the go."}
                tryDemo={""}
                learnMore={""}
                googlePlay={""}
            />




            {/* < RightSection/> */}
            < Universe />
        </>
    )
}


export default ProductPage;