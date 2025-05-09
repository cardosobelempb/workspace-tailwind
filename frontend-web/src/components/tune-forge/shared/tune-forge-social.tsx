import {
  FaAmazon,
  FaApple,
  FaCloud,
  FaGooglePlay,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

interface TuneForgeSocial {
  className?: string;
}

function TuneForgeSocial({ className }: TuneForgeSocial) {
  return (
    <ul
      className={`flex gap-x-4 justify-center *:bg-df-slate/60 *:size-7 ${className}`}
    >
      <li>
        <a href="#">
          <div className="p-1 stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaApple color="#FFFFFF" />
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="p-1 stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaGooglePlay color="#FFFFFF" />
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="p-1  stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaAmazon color="#FFFFFF" />
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="p-1  stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaCloud color="#FFFFFF" />
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="p-1  stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaSpotify color="#FFFFFF" />
          </div>
        </a>
      </li>

      <li>
        <a href="#">
          <div className="p-1 stroke-white border border-white transition-colors hover:bg-df-golden/60">
            <FaYoutube color="#FFFFFF" />
          </div>
        </a>
      </li>
    </ul>
  );
}

export default TuneForgeSocial;
