import { album } from "@/app/assets/images/tune-forge";

import {
  FaAmazon,
  FaApple,
  FaCloud,
  FaDownload,
  FaGooglePlay,
  FaMusic,
  FaPlay,
  FaShoppingCart,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

function TuneForgeLatestAlbum() {
  return (
    <section>
      <div>
        <h2>Latest Album</h2>

        <div>
          <div>
            <p>
              <span>Label</span>
              <span>Reload</span>
            </p>
            <p>
              <span>Released</span>
              <span>August 2027</span>
            </p>
            <p>
              <span>Genre</span>
              <span>Rock/Metal</span>
            </p>
            <p>
              <span>Styles</span>
              <span>Revival</span>
            </p>
          </div>

          <ul>
            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaApple color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaGooglePlay color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaAmazon color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaCloud color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaSpotify color="#FFFFFF" />
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <div className="size-8 p-2 bg-slate-500 stroke-white border border-white">
                  <FaYoutube color="#FFFFFF" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <figure>
          <Image
            src={album.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>

        <div>
          <div>
            <div>
              <FaPlay />
              <h6>Love Alive</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Hope</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaMusic />
                Lyrics
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Bounce Out</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Headspace</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Tomorrow</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaMusic />
                Lyrics
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Falling Apart</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TuneForgeLatestAlbum;
