import Head from 'next/head'
import Image from 'next/image'

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { FaShoppingBasket } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaToilet, FaCalendar, FaMoneyBill } from 'react-icons/fa';
import { FaRuler, FaBus, FaRunning, FaHammer, FaBriefcase } from 'react-icons/fa';



export default function Home() {


//   return (
//     <div>
//     <PropertyPictures />
//     <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>
// <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;"
//   data-link="https://photos.app.goo.gl/745cXENjMBxaDdBR8"
//   data-title="New item by Nirmal Chaudhury">
//   <object data="https://lh3.googleusercontent.com/JcXqqLxUp3-nwY-INjKO2C4Eg24_3JRh-Bm413Zan3EB_n_8_R4NaHwESxPG08g_8hOazCH7qoUr9GOpVrOxMhADTOkSmIy3jnk7jg2Xd1vgCq3ACumpKsjpiFCs5otu_3W4xoXokqw=w1920-h1080"></object>
// </div>

//     </div>
//   );
// }

  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://next-app-theta-eosin.vercel.app/api/album"
      );

      console.log(response.data)

      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map(url => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  if (images) {
    return (

      <div className="propertyContainer">
        <div className="imagegal">
          <ImageGallery items={images} />
        </div>
        <div className="propertyDescription">
          <p>
            <h3>Property Description:</h3>
            <ul id="horizontal-list">
              <li><FaBed /> 3 </li>
              <li><FaToilet /> 3 </li>
              <li><FaRuler /> 1900 sqft + basement </li>
            </ul>

            A modern home with three spacious bedrooms and three baths in Stittsville, just a short drive to the Kanata Centrum, malls and the High Tech sector. The home is situated on a beautiful lot with plenty of natural
            sunlight through out the day. Enjoy a bike ride, jog or a walk on the Trans Canada Trail or tennis at the new Roucey Park Tennis courts. 
            <br /> <br />
            This home features a modern open concept kitchen with quartz counter-top, stainless steel appliances, spacious bedrooms and an oversized primary bedroom with a walk in closet and an ensuite washroom. The unfinished basement provides extra area
            for storage and a home gym.

            <br /> <br />

            <h3>Nearby Amenities:</h3>

            <table className='amentitiesTable'>
              <tr>
                <td><FaShoppingBasket /></td>
                <td>Walmart, Costco, Nofrills, Food Basics, Real Canadian Superstore, Metro, Kanata Centrum, Tanger Outlet Mall</td>
              </tr>
              <tr>
                <td><FaHammer /></td>
                <td>Lowes, Home Depot, Canadian Tire</td>
              </tr>
              <tr>
                <td><FaBus /></td>
                <td>HWY 417, OC Transpo 167</td>
              </tr>
              <tr>
                <td><FaBriefcase /></td>
                <td>Kanata High Tech, DND Carling Campus</td>
              </tr>
              <tr>
                <td><FaRunning /></td>
                <td>Trans Canada Trail, Roucey Park Tennis Courts/Soccer Field, GoodLife</td>
              </tr>
            </table>
            <br />

            <h3>Requirements:</h3>

            Minimum One Year Lease, Credit Check, Proof of Employment and First and Last month rent is required.
            No Pets, non-smokers

            <br /> <br />

            Available from <strong>May 1st, 2022</strong>.
            <br></br>
            $2,295 + utilities (hydro, gas, water, and hot water tank rental).
          </p>
        </div>


      </div>
    )
  }
  else
  {
    return null
  }

}
