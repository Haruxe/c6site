import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Environment, Text, Sparkles } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import PRODUCTS from "../../components/data.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image.js";
import Link from "next/link.js";
import Backdrop from "../../components/Backdrop.js";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Home = ({
  scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4),
  darkMode,
}) => {
  const [submitted, setSubmitted] = useState(false);

  function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 10, state.mouse.y / 10, 10),
        0.05
      );
    });
  }

  function Bg({ darkMode }) {
    return (
      <mesh scale={100} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorB={darkMode ? "#282952" : "#c1ecf7"}
            colorA={darkMode ? "black" : "#9c9c9c"}
            alpha={1}
            mode="normal"
            near={130}
            far={200}
            origin={[100, 100, -100]}
          />
          <Noise
            mapping="local"
            type="white"
            scale={1000}
            colorA="white"
            colorB="black"
            mode="subtract"
            alpha={0.2}
          />
        </LayerMaterial>
      </mesh>
    );
  }

  function onFormSubmit(e) {
    var params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      country: document.getElementById("country").value,
    };
    if (
      params.name != "" &&
      params.phone != "" &&
      params.email != "" &&
      params.country != ""
    ) {
      emailjs.send(
        "service_5pajjw9",
        "template_sdx6ui4",
        params,
        "nbjd4ySeLKQB-3bLu"
      );
      setSubmitted(true);
      return false;
    }
  }

  return (
    <motion.div
      className="flex place-content-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "2" }}
      style={
        !darkMode
          ? {
              scrollSnapAlign: "start",
              backgroundColor: "#e5e5f7",
              opacity: "1",
              backgroundImage:
                "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
              backgroundSize: "27px 27px",
            }
          : {
              scrollSnapAlign: "start",
              backgroundColor: "#080830",
              opacity: "1",
              backgroundImage:
                "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
              backgroundSize: "27px 27px",
            }
      }
    >
      <div className="max-w-[1300px] h-full font-major font-bold md:text-lg text-sm text-black flex absolute mt-[60px] z-10 mx-auto w-full flex-col space-y-4 md:p-8 p-4">
        <div className="md:w-2/3 w-full mx-auto">
          <div className="my-3 mx-auto space-y-8 bg-[#ffffffd0] md:p-12 p-6 rounded-md flex flex-col font-major backdrop-blur-lg">
            <div>
              <h1 className="w-full font-major-black text-xl text-center">
                Join The Waitlist
              </h1>
              <div className="h-[2px] bg-black w-[100px] mx-auto mt-4 " />
            </div>

            <div>
              <h1 className="text-sm font-major-black text-[#505050]">
                Your Name *
              </h1>
              <input
                type={"text"}
                id="name"
                className="text-black bg-transparent outline-none text-md mb-2 mt-1 w-full"
                placeholder="Enter your name"
                required={true}
              />
              <div className="h-[2px] bg-[#50505056] " />
            </div>

            <div>
              <h1 className="text-sm font-major-black text-[#505050]">
                Your Email *
              </h1>
              <input
                type={"text"}
                id="email"
                className="text-black bg-transparent outline-none text-md mb-2 mt-1 w-full"
                placeholder="Enter your email"
                required={true}
              />
              <div className="h-[2px] bg-[#50505056] " />
            </div>
            <div>
              <h1 className="text-sm font-major-black text-[#505050]">
                Your Phone # *
              </h1>
              <input
                type={"text"}
                id="phone"
                className="text-black bg-transparent outline-none text-md mb-2 mt-1 w-full"
                placeholder="Enter your phone #"
                required={true}
              />
              <div className="h-[2px] bg-[#50505056] " />
            </div>
            <div>
              <h1 className="text-sm font-major-black text-[#505050]">
                Your Country *
              </h1>
              <select
                name="country"
                id="country"
                className="text-[#474747] bg-transparent mb-2 mt-1 w-full "
                required={true}
                defaultValue={"United States"}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua">Antigua</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijani">Azerbaijani</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Netherlands">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia-Hercegovina">Bosnia-Hercegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British IOT">British IOT</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Rep">Central African Rep</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Faeroe Islands">Faeroe Islands</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern">French Southern</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard">Heard</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="MNP">MNP</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="NER">NER</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Neutral Zone">Neutral Zone</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="North Korea">North Korea</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre">Saint Pierre</option>
                <option value="Saint Vincent">Saint Vincent</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Scotland">Scotland</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovak Republic">Slovak Republic</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somali Democratic">Somali Democratic</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia">South Georgia</option>
                <option value="South Korea">South Korea</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                <option value="STP">STP</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="TCA">TCA</option>
                <option value="Thailand">Thailand</option>
                <option value="Toga">Toga</option>
                <option value="Togolese">Togolese</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tongo">Tongo</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab">United Arab</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Upper Volta">Upper Volta</option>
                <option value="Uruguay">Uruguay</option>
                <option value="USSR(Former)">USSR(Former)</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="VI, British">VI, British</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, USA">Virgin Islands, USA</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="WLF">WLF</option>
                <option value="Yemen">Yemen</option>
                <option value="Yugoslavia">Yugoslavia</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <div className="h-[2px] bg-[#50505056] " />
            </div>

            {submitted ? (
              <button className="text-black cursor-default bg-gradient-to-r from-indigo-400 to-red-500 rounded-2xl p-3 font-bold w-1/3 mx-auto">
                <h1 className="mx-auto">Request Sent!</h1>
              </button>
            ) : (
              <motion.button
                className="text-black cursor-pointer bg-gradient-to-r from-indigo-400 to-red-500 rounded-2xl p-3 font-bold w-1/3 mx-auto"
                whileHover={{ scale: 1.05 }}
                onClick={() => onFormSubmit()}
              >
                Submit
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
