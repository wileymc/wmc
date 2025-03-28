import { RiArrowRightUpLine } from "react-icons/ri";

// Define interfaces
interface Sound {
  title: string;
  description: string;
  thumbnail: string;
  source: string;
}

interface SoundCardProps {
  sound: Sound;
}

export default function SoundCard({ sound }: SoundCardProps) {
  const { title, description, thumbnail, source } = sound;

  return (
    <div className="flex flex-col items-start py-2">
      <div
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-102 md:hover:bg-hover"
        aria-label={`${title} - ${description}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="relative mr-3">
              <img
                src={thumbnail}
                alt={`${title} cover`}
                className="h-12 w-12 rounded object-cover"
              />
            </div>
            <div>
              <div className="flex items-center text-sm font-medium tracking-tight text-gray-900 dark:text-gray-100 md:group-hover:text-primary">
                <h3>{title}</h3>
              </div>
              <RiArrowRightUpLine
                className="absolute top-2 right-2 text-primary opacity-0 transition-opacity duration-150 md:group-hover:opacity-100"
                aria-hidden="true"
              />
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Native audio player with custom styling */}
        <audio controls src={source} className="w-full" />
      </div>
    </div>
  );
}
