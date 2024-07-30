import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image'; // Assurez-vous d'avoir une image importée ou de spécifier le chemin correct

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="relative my-20 z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Photo alignée en haut de Bonjour en mode téléphone */}
        <div className="flex justify-center items-center mb-10 md:mb-0 md:w-1/2 md:-ml-14 md:-mt-10">
          <Image
            src="/Portfolio.png" // Remplacez par le chemin de votre photo
            alt="Photo"
            width={500} // Ajustez la largeur selon vos besoins
            height={500} // Ajustez la hauteur selon vos besoins
            className="rounded-full" // Optionnel : ajoute un arrondi à l'image
          />
        </div>

        {/* Texte et bouton alignés à gauche */}
        <div className="flex flex-col items-start justify-center md:w-1/2">
          <h2 className="uppercase tracking-widest text-4xl font-bold text-center ml-28 -mt-20 text-blue-100 max-w-80 mb-4 md:mb-8 md:ml-40">
            Bonjour👋
          </h2>

          <TextGenerateEffect
            className="text-center text-[30px] md:text-3xl lg:text-3xl"
            words="Je suis Mirindrampitia RAKOTOVAO"
          />

          <p className="text-center md:tracking-wider md:-ml-20 mb-4 text-sm md:text-lg lg:text-2xl">
            Développeur FullStack JS | UX/UI Designer | Graphic Designer.
          </p>

          <a href="#about">
            <MagicButton
              title="Visualiser mes projets"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
