import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';

const Footer = () => {
  return (
    // <footer className='text-center mt-2 mb-3'>
    //   <div>
    //     <a
    //       {...{
    //         target: '_blank'
    //       }}
    //       className='d-flex align-items-center'
    //       href='https://elrond.com/'
    //     >
    //       Made with <HeartIcon className='mx-1' /> by Elrond Network.
    //     </a>
    //   </div>
    // </footer>
    <div className='footer my'>
      <div className='wrap'><img src='images/EPAD-LOGO-VECTOR-OPT.png' width='75' alt='Elrond Launchpad official Logo' />
        <div className='footer-list'>
          <a href='https://www.instagram.com/elrondlaunchpad/' target='_blank' rel='noreferrer' className='footer-link-2'>Instagram</a>
          <a href='https://twitter.com/Elrond_Pad' target='_blank' rel='noreferrer' className='footer-link-2'>Twitter</a>
          <a href='https://discord.gg/c7vse43zcY' target='_blank' rel='noreferrer' className='footer-link-2'>Discord</a>
          <a href='https://t.me/elrondlaunchpad' target='_blank' rel='noreferrer' className='footer-link-2'>Telegram</a>
          <div>--------------------------------</div>
          <a href='#' className='footer-link-2'>Privacy Policy</a>
          <a href='#' className='footer-link-2'>Terms &amp; Conditions</a>
          <a href='https://medium.com/@elrondlaunchpad' target='_blank' rel='noreferrer' className='footer-link-2'>Whitepaper</a>
        </div>
        <div className='text-block-24'>© 2022 by Elrond Launchpad.</div>
      </div>
    </div>
  );
};

export default Footer;
