import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
}

export default function CardDisplay(
  {
    imageSrc,
    imageAlt,
    title,
    description,
    tags,
    projectLink
  }: ProjectCardProps) {
  return (
    <>
      <div className="relative max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:opacity-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="relative">
          {/* Project Image */}
          <img
            className="w-full h-48 object-cover object-center"
            src={imageSrc}
            alt={imageAlt}
          />
          <div className="mx-2 absolute bottom-1 right-4 z-10 flex flex-wrap gap-2 justify-end">
            {tags?.map((tag: any, index: any) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Title and External Link Icon */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <a
              href={projectLink}
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Project Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}