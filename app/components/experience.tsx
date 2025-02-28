import { MdWork } from 'react-icons/md'
import { experiences, ToolUsedI } from '../constants/experiences'
import React from 'react'

const ToolIcon = ({ tool }: { tool: ToolUsedI }) => {
  const [showTooltip, setShowTooltip] = React.useState(false)
  
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {tool.icon && React.createElement(tool.icon, {
          className: "w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        })}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded-md whitespace-nowrap">
          <p>{tool.name}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <div key={index} className="flex gap-6 mb-8">
          <div className="pt-1">
            <MdWork className="text-2xl text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <span className="text-sm font-light text-gray-400">
                {exp.period}
              </span>
            </div>
            <div className="mt-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {exp.role}
              </span>
              <div className="max-w-3xl mx-auto px-4 text-left sm:text-justify ">
                <p className="text-gray-400 mt-2 max-w-prose">
                  {exp.description}
                </p>
              </div>
              <div className="max-w-3xl mx-auto px-4 text-left">
                <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-sm font-semibold text-gray-300">Tecnologias:</span>
                  {Array.isArray(exp.tools) && exp.tools.map((tool, toolIndex) => (
                    <ToolIcon key={toolIndex} tool={tool}/>
                  ))}
                </div>
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="text-3xl tracking-widest text-center rotate-90 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ...
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}