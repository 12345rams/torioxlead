import React from 'react'
import {FaArrowAltCircleLeft, FaArrowLeft, FaGoogle, FaRegGrinTongueSquint, FaUpload} from "react-icons/fa";
import { useState } from 'react';

function Home() {

    const cards = [
        {
          id: 1,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel est a nulla consectetur tempor.',
        },
        {
          id: 2,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 2',
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        },
        {
          id: 3,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 3',
          description:
            'Nunc et ex non dui malesuada tincidunt in non urna. Ut eu libero vel dui dictum euismod.',
        },
        {
          id: 4,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 4',
          description:
            'Vivamus auctor, odio vel euismod tincidunt, dui quam lacinia leo, et malesuada tellus orci at tellus.',
        },
        {
          id: 5,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 5',
          description:
            'Pellentesque eu justo justo. In hac habitasse platea dictumst. Etiam lacinia elit nec vehicula.',
        },
        {
          id: 6,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 6',
          description:
            'Fusce sit amet massa vel dolor ultrices vehicula a in erat. Nunc sit amet mattis est, nec commodo purus.',
        },
        {
          id: 7,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 7',
          description:
            'Curabitur dignissim, elit eu vehicula efficitur, ante tellus faucibus eros, at efficitur mi justo et sapien.',
        },
        {
          id: 8,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 8',
          description:
            'Vestibulum euismod a quam eget tincidunt. Maecenas non vestibulum urna, nec aliquam turpis.',
        },
        {
          id: 9,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
          title: 'Card 9',
          description:
            'In sit amet convallis odio. Vivamus venenatis vulputate urna vel fringilla. Sed in quam nec est.',
        },
      ];

    const cardsData = [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          name: 'John Doe',
          rating: 5,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
        },
        {
          id: 2,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
          name: 'Jane Smith',
          rating: 4,
          imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
        },
      ];

    const [selectedOption, setSelectedOption] = useState('option1');

    const options = [
        { id: 'option1', text: 'grow your email list', color: 'white' },
        { id: 'option2', text: 'Capture more leads', color: 'white' },
        { id: 'option3', text: 'Increase sales conversion', color: 'white' },
        { id: 'option4', text: 'Reduce cart abandonment', color: 'white' },
        { id: 'option5', text: 'Show target offers', color: 'white' },
        { id: 'option6', text: 'Get more pageview', color: 'white' },
      ];

      const handleClick = (divId) => {
        if (selectedOption === divId) {
            // If the same div is clicked again, reset the selection
            setSelectedOption(null);
          } else {
            setSelectedOption(divId);
          }
        
      };

  return (
    <section>
      <div className=''>
        <FaGoogle className='m-3 mt-20 text-center text-6xl mx-auto'></FaGoogle>
        <h1 className='my-6 font-black w-96 text-center mx-auto text-4xl'>Easy and powerful to drive huge results</h1>
        <p className='my-6 text-xl w-3/5 mx-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quo fuga consequatur eaque nobis cumque quibusdam excepturi, ab pariatur nesciunt!Loremoin seantium tempora neque, numquam animi. Maiores saepe, illum commodi, exercitationem non reprehenderit dolor tenetur dignissimos iure molestias ipsa corporis consequuntur ea.</p>
        <div className=' text-blue-400 my-6 mx-auto w-60'><a href="">See our proven 3-step process</a></div>
      </div>
      <div className='text-center bg-white my-20 h-auto w-10/12 rounded-lg mx-auto'>
        <div className='flex w-full justify-evenly text-center'>
            {options.map((option) => (
                <div
                id={option.id}
                onClick={() => handleClick(option.id)}
                className={`w-full p-5 rounded-t-lg border-y border border-white cursor-pointer ${ selectedOption === option.id ? 'bg-white' : 'bg-slate-200'} hover:bg-white h-auto text-xl border-black`}
                >
                <h1>{option.text}</h1>
                </div>
            ))}
        </div>
        <div style={{display: selectedOption === 'option1' ? 'block' : 'none',}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Turn visitors into subscribers with beautiful, attention grabbing optin forms that are proven to convert.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/grow.png" alt="" />
        </div>
        </div>
        <div style={{display: selectedOption === 'option2' ? 'block' : 'none'}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Fill your pipeline with qualified leads that are ready to take the next step with your business.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/capture.png" alt="" />
        </div>
        </div>
        <div style={{display: selectedOption === 'option3' ? 'block' : 'none'}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Display relevant promotions to improve your sales conversion rate and drive more revenue from your existing website traffic.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/increase.png" alt="" />
        </div>
        </div>
        <div style={{display: selectedOption === 'option4' ? 'block' : 'none'}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Detect visitors who are about to leave without buying and recover them with an additional offer.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/reduce.png" alt="" />
        </div>
        </div>
        <div style={{display: selectedOption === 'option5' ? 'block' : 'none'}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Segment your promotions to new or returning visitors to maximize revenue growth from all audiences.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/targeted.png" alt="" />
        </div>
        </div>
        <div style={{display: selectedOption === 'option6' ? 'block' : 'none'}}>
        <h2 className=' text-2xl mx-auto w-7/12 my-8'>Increase engagement by driving traffic to high value pages on your website while reducing overall bounce rate.</h2>
        <div>
            <img className=' my-8 mx-auto w-7/12' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/pageviews.png" alt="" />
        </div>
        </div>
      </div>
      <div className="flex justify-evenly m-28 ">
        {cardsData.map((card) => (
            <div key={card.id} className="w-4/5 m-4 border rounded-lg p-4">
            <p>{card.text}</p>
            <div className="flex items-center mt-2">
                <img
                src={card.imageSrc}
                alt="Profile"
                className="w-4 h-4 rounded-full mr-2"
                />
                <h1>{card.name}</h1>
            </div>
            </div>
        ))}
        </div>
      <div className='m-10'>
        <h1 className='my-5 font-black w-8/12 text-center mx-auto text-4xl'>Finally, a Lead Generation and Conversion Optimization Software That's Both Easy AND Powerful!</h1>
        <p className='my-5 text-xl w-4/5 mx-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quo fuga consequatur eaque nobis cumque quibusdam excepturi, ab pariatur nesciunt!Loremoin seantium tempora neque, numquam animi. Maiores saepe, illum commodi, exercitationem non reprehenderit dolor tenetur dignissimos iure molestias ipsa corporis consequuntur ea.</p>
      </div>
      <div className="grid grid-cols-3 gap-10 my-28 mx-40">
      {cards.map((card) => (
        <div key={card.id} className="bg-whitesmoke text-center p-4">
          <img
            src={card.imageSrc}
            alt={`Card ${card.id}`}
            className="w-20 mx-auto h-20 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
          <p className="text-gray-600 mt-2">{card.description}</p>
        </div>
      ))}
    </div>
    <div className='m-10 my-10'>
        <img className='w-20 mx-auto h-20 object-cover rounded-lg' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-flag.svg" alt="" />
        <h1 className='my-6 font-black w-8/12 text-center mx-auto text-4xl'>Top 4 Reasons Why Smart Marketers, Business Owners and Agencies Love OptinMonster…and You Will Too!</h1>
        <p className='my-6 text-xl w-4/5 mx-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quo fuga consequatur eaque nobis cumque quibusdam excepturi, ab pariatur nesciunt!Loremoin seantium tempora neque, numquam animi. Maiores saepe, illum commodi, exercitationem non reprehenderit dolor tenetur dignissimos iure molestias ipsa corporis consequuntur ea.</p>
      </div>
      <div className=" flex justify-evenly mx-40 my-32">
        <div className='w-full'>
            <img className=' mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img03.png" alt="" />
        </div>
        <div className=''>
            <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Grow Faster by Using Easier & Better</h1>
            <p className='my-6 w-4/5 mx-auto'>Fast-track your growth with software that works for you, not against you.
            Easily create, publish and A/B test beautiful lead capture forms that generate impressive results - all without needing a developer or writing a single line of code.</p>
            <div className='flex mx-16'>
            <div className=''>
            <ul>
                <li className='m-1 ml-5 list-disc'>Lightbox Popups</li>
                <li className='m-1 ml-5 list-disc'>Floating Hello Bars</li>
                <li className='m-1 ml-5 list-disc'>Inline / After Post Forms</li>
                <li className='m-1 ml-5 list-disc'>Spin-a-Wheel Gamified Campaigns</li>
            </ul> 
            </div>
            <div>
            <ul>
                <li className='m-1 ml-7 list-disc'>Fullscreen Welcome Mats</li>
                <li className='m-1 ml-7 list-disc'>Mobile Specific Forms</li>
                <li className='m-1 ml-7 list-disc'>Slide-in Scroll Boxes</li>
                <li className='m-1 ml-7 list-disc'>100+ Pre-Made Templates</li>
            </ul> 
            </div>
            </div>                    
        </div>
      </div>
      <div className=" flex justify-evenly mx-40 my-32">
        <div className=''>
            <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Custom Design That Matches Your Style and Brand</h1>
            <p className='my-6 w-4/5 mx-auto'>Quickly customize the look and feel of any template in our library. Choose from over 100 pre-made templates designed for maximum conversions, or start from scratch with a blank canvas. Customize all the details with our easy to use drag-and-drop builder - no code needed.</p>
                               
        </div>
        <div className='w-full'>
            <img className=' mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img04.png" alt="" />
        </div>
        </div>
      <div className=" flex justify-evenly mx-40 my-32">
        <div className='w-full'>
            <img className=' mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img06.png" alt="" />
        </div>
        <div className=''>
            <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Show Personalized Messages to the Right People at the Right Time</h1>
            <p className='my-6 w-4/5 mx-auto'>OptinMonster’s enterprise-grade targeting and segmentation engine lets you show personalized, relevant messages to your visitors based on their behavior to maximize lead, subscriber and sales growth across every page of your website.</p>
            <div className='flex mx-16'>
            <div className=''>
            <ul>
                <li className='m-1 ml-5 list-disc'>Superior Page Targeting</li>
                <li className='m-1 ml-5 list-disc'>Personalized Smart Tags™</li>
                <li className='m-1 ml-5 list-disc'>Exit Intent® Technology</li>
                <li className='m-1 ml-5 list-disc'>Scheduled Messages</li>
            </ul> 
            </div>
            <div>
            <ul>
                <li className='m-1 ml-7 list-disc'>Onsite Follow Up Campaigns®</li>
                <li className='m-1 ml-7 list-disc'>Geo-Location Targeting</li>
                <li className='m-1 ml-7 list-disc'>OnSite Retargeting®</li>
            </ul> 
            <a href="" className=' text-blue-400 m-1 ml-7'>click to see more</a>
            </div>
            </div>                    
        </div>
      </div>
      <div className=" flex justify-evenly mx-40 my-32">
        <div className=''>
            <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Make Smarter, Data-Driven Decisions</h1>
            <p className='my-6 w-4/5 mx-auto'>Eliminate the “guess work” by testing different headlines, content, images and calls to action with OptinMonster’s easy A/B testing tool. Then, get the stats that matter and make the best decisions to grow your business with detailed campaign performance and analytics.</p>
            </div>
        <div className='w-full'>
            <img className=' mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img07.png" alt="" />
        </div>
        </div>

        <div className='m-10'>
        <h1 className='my-5 font-black w-8/12 text-center mx-auto text-4xl'>...and One Click Integration with Your Favorite Email Marketing Service or CRM Software</h1>
        <p className='text-xl w-4/5 mx-auto text-center'>Seamlessly integrate with MailChimp, AWeber, HubSpot, Klaviyo and 30+ more services.</p>
        <p className='text-xl w-4/5 mx-auto text-center'>BONUS: any custom HTML form and webhooks!</p>
        </div>
      
      </section>
  )
}

export default Home