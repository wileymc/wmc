import { RiArrowRightUpLine } from "react-icons/ri";

// Define interfaces
interface Book {
  title: string;
  author: string;
  description: string;
  thumbnail: string;
  quotes: string[];
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { title, author, description, thumbnail, quotes } = book;

  return (
    <div className="flex flex-col items-start py-2">
      <div
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-102 md:hover:bg-hover"
        aria-label={`${title} by ${author} - ${description}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={thumbnail}
              alt={`${title} cover`}
              className="h-12 w-9 rounded object-cover mr-3"
            />
            <div>
              <div className="flex items-center text-sm font-medium tracking-tight text-title dark:text-darkTitle md:group-hover:text-primary">
                <h3>{title}</h3>
              </div>
              <RiArrowRightUpLine
                className="absolute top-2 right-2 text-primary  opacity-0 transition-opacity duration-150 md:group-hover:opacity-100"
                aria-hidden="true"
              />
              <p className="text-xs text-body dark:text-darkBody">
                by {author}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-body dark:text-darkBody">
          {description}
        </p>
        {quotes?.length > 0 && (
          <div className="mt-3 border-l-2 border-primary pl-3">
            <p className="text-xs italic text-body dark:text-darkBody">
              "{quotes[0]}"
            </p>
            {quotes?.length > 1 && (
              <p className="mt-1 text-xs text-body dark:text-darkBody">
                +{quotes?.length - 1} more quote{quotes?.length > 2 ? "s" : ""}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
