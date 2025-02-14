import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-70"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Prêt à transformer <span className="text-purple">ton monde</span> en digital avec moi?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center"> Entre en contact et je verrai comment pourrais-je peux aider à atteindre ton but .</p>
        <a href="mirindrampitirakotovao@gmail.com">
            <MagicButton
                title="Envoyez-moi un mail"
                icon={<FaLocationArrow />}
                position="right"
            />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 | Mirindrampitia Rakotovao</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg satrurate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img
                        src={profile.img} alt={profile.id.toString()} width={20} height={20}
                    />
                </div>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
