import React from "react";
import obgStyle from "./obgStyle.module.css";
import featueImage from "../images/feature-image.jpg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";

export default function OurBackground() {
  return (
    <div className={obgStyle.ourBackground}>
      <div className={obgStyle.container}>
        <div className={obgStyle.tittle}>
          <h2 className={obgStyle.th2}>Our Background</h2>
        </div>
        <div className={obgStyle.pictreDesSocilNetworks}>
          <div className={obgStyle.picture}>
            <img className={obgStyle.img} src={featueImage} alt="" />
          </div>
          
          <div className={obgStyle.desSocilNetworks}>
            <div className="des">
              <div className={obgStyle.desTittle}>Who we are & What we do?</div>
              <div className={obgStyle.des}>
                <p className={obgStyle.desP}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  voluptate nihil eum consectetur similique? Consectetur, quod,
                  incidunt, harum nisi dolores delectus reprehenderit voluptatem
                  perferendis dicta dolorem non blanditiis ex fugiat. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  eum ratione ex ea praesentium quibusdam? Aut, in eum facere
                  corrupti necessitatibus perspiciatis quis.
                </p>
              </div>
            </div>
            <div className={obgStyle.socialNetworks}>
              <ul className={obgStyle.snnav}>
                <li className={obgStyle.snli}>
                  <a
                    className={obgStyle.faA}
                    target="_blank"
                    href="https://www.facebook.com"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className={obgStyle.snli}>
                  <a
                    className={obgStyle.faA}
                    target="_blank"
                    href="https://twitter.com"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className={obgStyle.snli}>
                  <a
                    className={obgStyle.faA}
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className={obgStyle.snli}>
                  <a
                    className={obgStyle.faA}
                    target="_blank"
                    href="https://www.behance.net/"
                  >
                    <FaBehance />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
