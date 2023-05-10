import React from 'react'
import topimg from '../../Assets/topimg.jpeg';
import "./readmore.css";


const ReadMore = (props) => {
    return (
        <div className='container'>
            <h2 className='heading'>
                {/* {props.heading} */}
                helloworld
                </h2>
            <div className="flex">
                <div>
                    {/* {props.content} */}
                    <p className='content'>Rather than holding up at a trauma center to be analyzed, numerous patients are presently picking to have X-beams taken in their homes. Particularly helpful for the old or patients with critical sicknesses, compact X-beam machines can require just 20 minutes and may try and have the option to send data to a radiologist carefully.

                    Convenient X-beam machines have been accessible for quite a while. By and large, they have been utilized in clinics to perform radiography on patients who are in such basic condition that they can only with significant effort be shipped to the radiology office. These machines have likewise been utilized in the trauma center when a patient is being treated for horrendous wounds or in the working room where patients might be going through different surgeries.

                    At times, it is challenging for patients at home to head out to the emergency clinic, which has prompted an expanded utilization of compact X-beam administrations, as indicated by a new article from Reuters. The choice might be especially useful for older patients, since an outing to the emergency clinic could be dangerous. Then again, there are different patients who wish to be treated in the commonality and solace of their own homes.

                    Having a X-beam taken at home requires a specialist’s solution. To play out the radiographic examinations, a convenient machine should be moved to the patient’s home, alongside a prepared and ensured expert, as indicated by Reuters. This is essential to guarantee a quality test is taken, while safeguarding others who might be in the home from undesirable openness. For this degree of administration, a test might cost about $300 without protection inclusion.

                    “As a rule, in about an hour after we take a X-beam we give these outcomes straightforwardly to the specialist,” Paul Fowler, pioneer behind Specialty Portable X-Ray, Inc. in New York told Reuters. “With the computerized X-beams, we are utilizing most likely less openness than you would at the clinic.”

                    Different organizations utilize advanced transmission to send the X-beam pictures straightforwardly to the radiologist, as indicated by Reuters. This builds the proficiency of the methodology.

                    Regardless of the obvious advantages that convenient X-beams offer, nonetheless, there might be a few disadvantages. A few specialists feel that convenient tests offer a much lower quality than comparable tests acted in a conventional X-beam division, as per Reuters.

                    “In the event that you look at the nature of those sorts of examinations with the nature of a review that was acted in a clinic in a radiology division or in a confidential radiology office, there will be no correlation,” Dr. David Levin, teacher and administrator emeritus of the Department of Radiology at Thomas Jefferson University Hospital in Philadelphia, told Reuters. “In the event that a convenient X-beam is totally important in light of the patient’s clinical condition, then, at that point, it’s reasonable.”

                    Further developing comfort and taking out excursions to clinical offices is a speeding up pattern in the clinical gadget space. As of late, a home lab framework was presented that consolidates wearable tech and nanoscale biomarker testing.</p>
                    </div> 
                <div className='rowImage'>
                    <img className='thisImg' src={props.img} />
                </div>
            </div>
        </div>
    )
}

export default ReadMore
