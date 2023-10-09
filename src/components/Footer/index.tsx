import sass from "./Footer.module.scss";
import { Container } from "../Container";
import { FC } from "react";

import { FaInstagram } from 'react-icons/fa';
import { BsTiktok, BsWhatsapp } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';

export const Footer: FC = () => {
  return (
    <footer className={sass.footer}>
      <Container>
        <div className={sass.footerInner}>
          <ul className={sass.socialList}>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="#instagram-page">
                <FaInstagram size={30} />
              </a>
            </li>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="#telegram-page">
                <BiLogoTelegram size={30} />
              </a>
            </li>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="#tiktok-page">
                <BsTiktok size={30} />
              </a>
            </li>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="#whatsapp-page">
                <BsWhatsapp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
};
