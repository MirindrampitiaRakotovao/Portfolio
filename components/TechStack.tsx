import { techStack, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Mes
        <span className="text-purple"> connaissances et outils </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-8 grid-cols-1 gap-10">
        {techStack.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-20 md:w-20 lg:w-20"
              />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
