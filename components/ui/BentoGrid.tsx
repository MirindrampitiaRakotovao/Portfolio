'use client'

import { cn } from "@/lib/utils";
import { Spirax } from "next/font/google";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mirindrampitirakotovao@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
      }}
    >

      {id === 1 && (
        <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, ' object-center opacity-50')}
          />
        )}
      </div>
      )}

      {/* <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-50'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
      </div> */}

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg!text-base z-10">
            {description}
          </div>

          <div className=" group-hover/bento:translate-x-2 transition duration-200 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-10 lg:gap-5 w-fit absolute right-5 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8 left-5">
              {['ReactJS', 'NextJS', 'TypeScript'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
              <span className="py-4 px-3 rounded-lg text-center bg-[#101132e]"/>
              
            </div>


            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-3 px-3 rounded-lg text-center bg-[#101132e]"/>
              {['TailWind', 'Flutter', 'ReactNative'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        )}


        {id === 4 && (
          <div className="flex gap-10 lg:gap-5 w-fit absolute right-7 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['NodeJS', 'Dart', 'Spring Boot'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
              <span className="py-4 px-3 rounded-lg text-center bg-[#101132e]"/>
            </div>


            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-1 px-3 rounded-lg text-center bg-[#101132e]"/>
              {['MySQL', 'Firebase', 'Prisma'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        )}


        {id === 5 && (
          <div className="flex gap-10 lg:gap-5 w-fit absolute right-7 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['GitHub', 'GitLab', 'Git'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
              <span className="py-2 px-3 rounded-lg text-center bg-[#101132e]"/>
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-2 px-3 rounded-lg text-center bg-[#101132e]"/>
              {['Figma', 'AdobeXD', 'Photoshop'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opaciy-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
            </div>

          </div>

        )}


        {id === 6 && (
          <div className="mt-5 relative md:-ml-40 -ml-32">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                }
              }} />
            </div>

            <MagicButton 
              title={copied ? 'Email copié' : 'Copier mon email'}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
