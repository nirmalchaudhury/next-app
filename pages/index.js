import Head from 'next/head'
import Image from 'next/image'

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { FaShoppingBasket, FaMap } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaBath} from 'react-icons/fa';
import { FaRuler, FaBus, FaRunning, FaHammer, FaBriefcase } from 'react-icons/fa';
import { FaList, FaCalendar, FaDollarSign } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import MenuBar from "../components/MenuBar"



export default function Home() {

  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        // "http://localhost:3000/api/album"
        "https://juneberry-rental-theta-eosin.vercel.app/api/album"
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
      <> 
        <div className="propertyContainer">
          <div className="imagegal">
            <ImageGallery items={images} />
          </div>
          <div className="propertyDescription">
 
            <h3>Property Description:</h3>
            <ul id="horizontal-list">
              <li><FaMap /> 706 Juneberry Lane, Stittsville, Ontario </li>
            </ul>
            <ul id="horizontal-list">
              <li><FaBed /> 3 </li>
              <li><FaBath /> 2.5 </li>
              <li><FaRuler /> 1900 sqft + basement </li>
            </ul>
            <p>
              A new house with a modern open concept kitchen, quartz counter-top, stainless steel appliances, three spacious bedrooms and three baths. The primary room
              has a walk-in closet and an ensuite washroom. The unfinished basement provides extra area for storage and a home gym.

              <br /> <br />
              
              The home is situated on a beautiful lot with plenty of natural sunlight through out the day. It is a short drive to the Kanata Centrum, Tanger Outlets Mall and
              the Kanata High Tech. The Trans Canada Trail and the newly built the Roucey Park are just a few steps away for biking, jogging or tennis.
            </p>

            <h3>Nearby Amenities:</h3>
            <table className='amentitiesTable'>
              <tbody>
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
                  <td>HWY 417, OC Transpo 167, Trans Canada Trail Bike Path</td>
                </tr>
                <tr>
                  <td><FaBriefcase /></td>
                  <td>Kanata High Tech, DND Carling Campus</td>
                </tr>
                <tr>
                  <td><FaRunning /></td>
                  <td>Trans Canada Trail, Roucey Park Tennis Courts/Soccer Field, GoodLife</td>
                </tr>
              </tbody>
            </table>

            <h3>Requirements:</h3>
            <table className='amentitiesTable'>
              <tbody>
              <tr>
                  <td><FaCalendar /></td>
                  <td>Available from <strong>May 1st, 2022</strong>.</td>
                </tr>
                <tr>
                  <td><FaList /> </td>
                  <td> One Year Lease, Credit Check, Proof of Employment, First and Last month rent, No Pets, Non-smoker</td>
                </tr>
                <tr>
                  <td><FaDollarSign /></td>
                  <td>$2,295/month + Utilities (Hydro, Gas, Water, and Hot Water Tank rental).</td>
                </tr>
              </tbody>
            </table>

            <h3>Contact:</h3>
            <table className='amentitiesTable'>
              <tbody>
                <tr>
                  <td><FaEnvelope /> </td>
                  <td><a href="mailto:nchaudhury@gmail.com"> nchaudhury@gmail.com </a> </td>
                </tr>
                <tr>
                  <td><FaPhone /></td>
                  <td><a href="tel:6132861160">(613)286-1160</a></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </>
    )
  }
  else
  {
    return null
  }

}
