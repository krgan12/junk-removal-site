import ContactUsFooter from '@/components/ContactUsFooter'
import React from 'react'

function page() {

  const HEADER_OFFSET = 20;

  return (
    <div className='min-h-screen'>
      {/* <div>
          <h1>JunkBGone Junk Removal - Get a free Quote</h1>
          <p>Get a free junk removal quite! Tell us your city, nearest intersection, and what you need removed
            (example: 1 couch, 10 bags). You can also text the details to: <span className='underline'>905-781-4046</span>
          </p>
          <form>
            <label htmlFor=""></label>
            I am human hCaptch verification - to do NEAR END 
            Submit Button
          </form>
        </div>
        <ContactUsFooter /> */}

        <section className='mx-auto max-w-[610px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
        </section>

        <div className='mx-auto flex max-w-[610px] flex-col items-center'>
          <h1>JunkBGone Junk Removal - Get a free Quote</h1>
          <p>Get a free junk removal quite! Tell us your city, nearest intersection, and what you need removed
            (example: 1 couch, 10 bags). You can also text the details to: <span className='underline'>905-781-4046</span>
          </p>
          <form>
            <label htmlFor=""></label>
            {/* I am human hCaptch verification - to do NEAR END  */}
            {/* Submit Button */}
          </form>
        </div>
        <ContactUsFooter />

    </div>
  )
}

export default page