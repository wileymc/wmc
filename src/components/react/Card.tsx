import { RiArrowRightUpLine } from "react-icons/ri";

// Define interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  tag?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function Card({ project }: ProjectCardProps) {
  const { title, description, link, tag } = project;

  return (
    <div className="flex flex-col items-start pt-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-102 md:hover:bg-hover"
        aria-label={`${title} - ${description}`}
      >
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-title dark:text-darkTitle md:group-hover:text-primary">
          <div className="flex items-center">
            <h3>{title}</h3>
            {tag && (
              <div
                className="ml-2 rounded-full border border-emerald-700 bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700"
                aria-label={`Tag: ${tag}`}
              >
                <span>{tag}</span>
              </div>
            )}
          </div>
          <RiArrowRightUpLine
            className="ml-0.5 text-primary  opacity-0 transition-opacity duration-150 md:group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 text-sm text-body dark:text-darkBody">
          {description}
        </p>
      </a>
    </div>
  );
}
