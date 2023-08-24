/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Cart from "./CartIcon";
import User from "./UserIcon";
import Menu from "./Menu";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
    if (activeMenu !== null) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = 'auto';
    }
  }, [activeMenu]);

  const handleMenuHover = (menuId) => {
    setActiveMenu(menuId);
  };

  const menus = [
    {
      label: "MEN",
      content: (
        <div className="grid grid-cols-5 gap-20 pr-10">
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-purple-500">Topwear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">T-Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Casual Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Formal Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sweatshirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sweaters</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jackets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Blazer & Coats</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Suits</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Rain Jackets</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-3 text-purple-500">Indian & Festive Wear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Kurtas & Kurta Sets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sherwanis</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Nehru Jackets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Dhotis</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Short Kurta</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-purple-500">Bottomwear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Jeans</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Casual Trousers</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Formal Trousers</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Shorts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Track Pants & Joggers</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-3 text-purple-500">Innerwear & Sleepwear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Briefs & Trunks</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Boxers</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Vests</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sleepwear & Loungewear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Thermals</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-purple-500">Footware</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">Casual shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Flipflops</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sport Shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sandals & Floaters</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sneakers</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-purple-500">Personal Care & Grooming</div>
            <div className="font-semibold mb-3 mt-5 text-purple-500">Sunglasses & Frames</div>
            <div className="font-semibold mb-3 mt-5 text-purple-500">Watches</div>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-purple-500">Sports & Active Wear</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Sports Shoes</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Sports Sandals</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Active T-shirts</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Track Pants & Shorts</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Tracksuits</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Jackets and Sweatshirts</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Sports Accessories</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Swimmer</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-3 text-purple-500">Gadgets</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Smart Wearables</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Fitness Gadgets</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Headphones</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Speakers</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-purple-500">Fashion Accessories</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Wallets</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Watches</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Belts</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Perfumes and Body Mists</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Trimmers</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Caps & Hats</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Mufflers & Gloves</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Ring & Wristwear</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Helmets</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-purple-500">Bags & Backpacks</div>
            <div className="font-semibold mb-3 mt-5 text-purple-500">Luggages & Trolleys</div>
          </div>
        </div>
      ),
    },
    {
      label: "WOMEN",
      content: (
        <div className="grid grid-cols-5 gap-20 pr-10">
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-pink-500">Indian & Fusion Wear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Kurtas</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Kurtis, Tunic & Tops</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sarees</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Ethnic Wear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Leggings, Salwars & Churidars</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Skirts & Palazzos</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Dress Materials</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Lehenga Cholis</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Dupatta & Shawls</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Part Wear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jackets</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-pink-500">Belts, Scarves & More</div>
            <div className="font-semibold mb-3 mt-5 text-pink-500">Watches & Wearables</div>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-pink-500">Western Wear</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Dresses</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Tops</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">T-Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jeans</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Trousers & Capris</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Shorts & Skirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Co-ords</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Playsuits</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jumpsuits</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Shrugs</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jacket, Sweater and Sweatshirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Waistcoats</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-pink-500">Plus Size</div>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-pink-500">Footware</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">Casual shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Flipflops</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sport Shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Flats</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sandals</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Heels</li></a>
              <a href=""><li class="mb-1 hover:font-bold">School Shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Socks</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-pink-500">Sports & Active Wear</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Clothing</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Footware</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Sports Accessories</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Sports Equipments</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-pink-500">Lingerie & Sleepwear</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Briefs</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Shapewear</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Sleepware & Loungewear</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Swimmer</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Camisoles & Thermals</li></a>
            </ul>
            <div className="font-semibold mb-3 text-pink-500">Beauty & Personal Care</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Makeup</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Skincare</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Premium Beauty</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Lipsticks</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Fragrances</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-pink-500">Gadgets</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Smart Wearables</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Fitness Gadgets</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Headphones</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Speakers</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-3 text-pink-500">Jewellery</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">Fashion Jewellery</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Fine Jewellery</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Earrings</li></a>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "KIDS",
      content: (
        <div className="grid grid-cols-5 gap-20 pr-10">
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-orange-500">Boys Clothing</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">T-Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Shorts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jeans</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Trousers</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Clothing Sets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Ethnic Wear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Track Pants and Pyjamas</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jacket, Sweater & Sweatshirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Part Wear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Value Packs</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-orange-500">Girls Clothing</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Dresses</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Tops</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">T-Shirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Clothing Sets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Kurta Sets</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Party Wear</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jumpsuits</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Skirts and shorts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Tights and Leggings</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jeans, Trousers and Capris</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Jacket, Sweater and Sweatshirts</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Value Packs</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-orange-500">Footware</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">Casual shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Flipflops</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sport Shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Flats</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Sandals</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Heels</li></a>
              <a href=""><li class="mb-1 hover:font-bold">School Shoes</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Socks</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-orange-500">Toys and Games</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Learning and Development</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Activity Toys</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Soft Toys</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Action Figure / Play Set</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-orange-500">Infants</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Bodysuits</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Rompers & Sleepsuits</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Clothing Sets</li></a>
              <a href =""><li class="mb-1 hover:font-bold">T-shirts & Tops</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Dresses</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Bottom wear</li></a>
              <a href =""><li class="mb-1 hover:font-bold">winter wear</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Innerwear & Sleepwear</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Infant Care</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-orange-500">Kids Accessories</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Bags & BackPacks</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Watches</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Jewellery & Hair accessory</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Sunglasses</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Masks & Protective Gears</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Caps & Hats</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-3 text-orange-500">Brands</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">H&M</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Max Kids</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Pantaloons</li></a>
              <a href=""><li class="mb-1 hover:font-bold">United Colors of Benetton Kids</li></a>
              <a href=""><li class="mb-1 hover:font-bold">YK</li></a>
              <a href=""><li class="mb-1 hover:font-bold">U.S. Polo Assn. Kids</li></a>
              <a href=""><li class="mb-1 hover:font-bold">HRX</li></a>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "BEAUTY",
      content: (
        <div className="grid grid-cols-5 gap-20 pr-10">
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-green-500">Makeup</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Lipstick</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Lip Gloss</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Lip Liner</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Mascara</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Eyeliner</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Kajal</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Eyeshadow</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Foundation</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Primer</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Concealer</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Compact</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Nail Polish</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-green-500">Skincare, Bath & Body</div>
            <ul className="font-light font-roboto">
              <a href = ""><li class="mb-1 hover:font-bold">Face Moisturiser</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Cleanser</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Masks & Peel</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Sunscream</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Serum</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Face Wash</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Eye Cream</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Lip Balm</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Body Lotion</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Body Wash</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Body Scrub</li></a>
              <a href = ""><li class="mb-1 hover:font-bold">Hand Cream</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-green-500">Body Care</div>
            <div className="font-semibold mb-3 mt-2 text-green-500">Masks</div>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="font-semibold mb-3 text-green-500">Haircare</div>
            <ul className="font-light font-roboto">
              <a href=""><li class="mb-1 hover:font-bold">Shampoo</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Conditioner</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Cream</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Oil</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Gel</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Color</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Serum</li></a>
              <a href=""><li class="mb-1 hover:font-bold">Hair Accessory</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-green-500">Fragrances</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Perfume</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Deodrant</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Body Mist</li></a>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-green-500">Appliances</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Hair Straightner</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Hair Dryer</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Epilator</li></a>
            </ul>
            <div className="font-semibold mb-3 text-green-500">Men's Grooming</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Trimmers</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Beard Oil</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Hair Wax</li></a>
            </ul>
            <div className="font-semibold mb-3 text-green-500">Beauty Gift & Makeup Set</div>
            <ul className="font-light font-roboto">
              <a href =""><li class="mb-1 hover:font-bold">Beauty Gift</li></a>
              <a href =""><li class="mb-1 hover:font-bold">Makeup Kit</li></a>
            </ul>
            <div className="font-semibold mb-3 mt-5 text-green-500">Premium Beauty</div>
            <div className="font-semibold mb-3 mt-5 text-green-500">Wellness & Hygiene</div>
          </div>
          <div className="col-span-3 sm:col-span-1 w-1/3 sm:w-auto">
            <div className="font-semibold mb-3 text-green-500">Top Brands</div>
            <ul className="font-light font-roboto">
              <a href= ""><li class="mb-1 hover:font-bold">Lakme</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Maybelline</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">LOreal</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Phillips</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Bath & Body Works</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Biotique</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Mamaearth</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">MCaffeine</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Nievea</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Lotus Herbals</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">LOreal Professionals</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">KAMA AYURVEDA</li></a>
              <a href= ""><li class="mb-1 hover:font-bold">Forest Essentials</li></a>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div class="font-roboto lg:text-sm font-semibold text-xs">
      <nav class="relative w-full items-center justify-between mb-3">
        <div class="flex lg:gap-36 md:gap-18 gap-10">
          <Logo />
          <div className="hidden md:flex items-center lg:gap-12 gap-7">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMenuHover(index)}
                onMouseLeave={() => handleMenuHover(null)}
              >
                <button className="p-4 hover:text-red-500">{menu.label}</button>
                {activeMenu === index && (
                  <div className="mr-20 mega-menu-wrapper fixed mb-80 left-10 bottom-0 w-full flex justify-center items-center px-10 pr-20">
                    <div className="mega-menu absolute bg-gray-50 w-screen py-4 px-8 shadow-2xl border-t-2">
                      {menu.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div class="hidden md:flex items-center lg:gap-9 gap-5 mt-1">
            <SearchBar />
            <Cart />
            <User />
          </div>
        </div>
      </nav>
      <Menu />
    </div>
  );
};

export default MegaMenu;

