import { GitHubIcon } from "./icons/GitHubIcon";
import { NpmIcon } from "./icons/NpmIcon";

export const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-end gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/krystxf/react-svg-shape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.npmjs.com/package/react-svg-shape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <NpmIcon />
              <span>npm</span>
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>
            react-svg-shape - open source library for creating beautiful SVG
            blob shapes.
          </p>
        </div>
      </div>
    </footer>
  );
};
