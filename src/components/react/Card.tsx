import { RiArrowRightUpLine } from "react-icons/ri";

// Define interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function Card({ project }: ProjectCardProps) {
  const { title, description, link, tags } = project;

  return (
    <div className="flex flex-col items-start pt-2">
      <a
        href={link}
        target={link.startsWith("/") ? "_self" : "_blank"}
        rel={link.startsWith("/") ? undefined : "noreferrer"}
        className="group relative -mx-3 w-[calc(100%+1.5rem)] rounded-lg px-3 py-2 transition-transform duration-150 ease-out md:hover:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none hover:bg-hover focus-visible:bg-hover focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        aria-label={`${title} - ${description}`}
      >
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-title dark:text-darkTitle">
          <div className="flex items-center justify-between w-full">
            <h3 className="group-hover:text-primary group-focus-visible:text-primary">
              {title}
            </h3>
            {tags && (
              <div className="ml-2 text-xs font-normal text-body dark:text-darkBody justify-end">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-1 inline-block rounded-full bg-primary px-2 py-1 text-on-accent text-[0.65rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <RiArrowRightUpLine
            className="ml-0.5 shrink-0 text-primary opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100"
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
