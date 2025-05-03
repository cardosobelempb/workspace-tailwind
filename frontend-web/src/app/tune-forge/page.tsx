import TuneForgeHeader from "@/components/tune-forge/tune-forge-header";
import TuneForgeLatestAlbum from "@/components/tune-forge/tune-forge-latest-album";

function TuneForgePage() {
  return (
    <>
      <TuneForgeHeader />

      <main>
        {/* <!-- --------------------- Latest Album --> */}
        <TuneForgeLatestAlbum />

        {/* <!-- --------------------- Unique Music --> */}
        <section>
          <div>
            <h2>A different kind of music</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              tempora nobis aliquam voluptates iusto assumenda excepturi itaque,
              commodi autem, blanditiis debitis repellendus quas placeat soluta
              atque cumque maxime vitae nihil.
            </p>
          </div>

          <div>
            <div>
              <h6>Where</h6>
              <p>890 Fifth Avenue, Manhattan</p>
              <p>New York City</p>
            </div>

            <div>
              <h6>When</h6>
              <p>Friday to Sunday</p>
              <p>Aug 18 to 20, 2027</p>
            </div>

            <button>
              <i className="fa-solid fa-ticket"></i> Buy a Ticket
            </button>
          </div>
        </section>

        {/* <!-- --------------------- Discography --> */}
        <section>
          <h2>Discography</h2>

          <div>
            <div>
              <div>
                <h6>Reload</h6>
                <a href="#">
                  <span>View Album</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>

              <figure>
                <img src="images/discography-1.jpg" alt="" />
              </figure>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-apple"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-amazon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cloud"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h6>Set me free</h6>
                <a href="#">
                  <span>View Album</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>

              <figure>
                <img src="images/discography-2.jpg" alt="" />
              </figure>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-apple"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-amazon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cloud"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h6>Limitless</h6>
                <a href="#">
                  <span>View Album</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>

              <figure>
                <img src="images/discography-3.jpg" alt="" />
              </figure>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-apple"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-amazon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cloud"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h6>Dawn</h6>
                <a href="#">
                  <span>View Album</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>

              <figure>
                <img src="images/discography-4.jpg" alt="" />
              </figure>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-apple"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-amazon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cloud"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- --------------------- Countdown --> */}
        <section>
          <h2>Upcoming Tour</h2>

          <p>Friday to Sunday Aug 18 to 20, 2027</p>
        </section>

        {/* <!-- --------------------- Band Members --> */}
        <section>
          <h2>Band Members</h2>

          <div>
            <div>
              <figure>
                <img src="images/members-1.jpg" alt="" />
              </figure>

              <div>
                <h6>Joe Jade</h6>
                <p>Lead Vocalist</p>
              </div>
            </div>

            <div>
              <figure>
                <img src="images/members-2.jpg" alt="" />
              </figure>

              <div>
                <h6>John Smith</h6>
                <p>Lead Guitarist</p>
              </div>
            </div>

            <div>
              <figure>
                <img src="images/members-3.jpg" alt="" />
              </figure>

              <div>
                <h6>Jeremy James</h6>
                <p>Lead Drummer</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- --------------------- Upcoming Tours --> */}
        <section>
          <h2>Upcoming Tours</h2>

          <figure>
            <img src="images/tours-list.jpg" alt="" />
            <figcaption>The American Tour</figcaption>
          </figure>

          <div>
            {/* <!-- Tours --> */}
            <div>
              <div>
                <p>21 Dec</p>

                <div>
                  <h6>Melbourne, AU</h6>
                  <h6>Rod Laver Arena</h6>
                </div>

                <div>
                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    VIP
                  </a>

                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    Buy Ticket
                  </a>
                </div>
              </div>

              <div>
                <p>10 Jan</p>

                <div>
                  <h6>Washington, DC, USA</h6>
                  <h6>Capital One Arena</h6>
                </div>

                <div>
                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    VIP
                  </a>

                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    Buy Ticket
                  </a>
                </div>
              </div>

              <div>
                <p>24 May</p>

                <div>
                  <h6>Houston, TX, USA</h6>
                  <h6>Arena Theatre</h6>
                </div>

                <div>
                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    VIP
                  </a>

                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    Buy Ticket
                  </a>
                </div>
              </div>

              <div>
                <p>28 Oct</p>

                <div>
                  <h6>Chicago, IL, USA</h6>
                  <h6>United Center</h6>
                </div>

                <div>
                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    VIP
                  </a>

                  <a href="#">
                    <i className="fa-solid fa-ticket"></i>
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div>
              <h3>
                Subscribe for free downloads <br />
                and band news updates
              </h3>
              <form>
                <input type="email" placeholder="Email Address" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </section>

        {/* <!-- --------------------- Pre-sale --> */}
        <section>
          <h2>pre-sale - upcoming tour</h2>

          <div>
            <p>
              <span>Pre-Sale Tour 1 :</span>
              <span>07/2 - 09/2</span>
            </p>

            <p>
              <span>Pre-Sale Tour 2 :</span>
              <span>14/2 - 16/2</span>
            </p>

            <p>All pre-sales begin 12am local and end 6pm local time.</p>
          </div>

          <a href="#">Check for more info</a>
        </section>

        {/* <!-- --------------------- Gallery --> */}
        <section>
          <h2>Band Gallery</h2>

          <div>
            <figure>
              <img src="images/gallery-1.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-2.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-3.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-4.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-5.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-6.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-7.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-8.jpg" alt="" />
            </figure>

            <figure>
              <img src="images/gallery-9.jpg" alt="" />
            </figure>
          </div>
        </section>
      </main>

      {/* <!-- --------------------- Footer --> */}
      <footer>
        <h2>Stay in Touch</h2>

        <div>
          <div>
            <h3>Booking</h3>
            <h5>Jane Doe</h5>
            <p>booking@tuneforge.com</p>
          </div>

          <div>
            <h3>Press</h3>
            <h5>Jack Doe</h5>
            <p>press@tuneforge.com</p>
          </div>

          <div>
            <h3>Info</h3>
            <h5>Julianna Doe</h5>
            <p>info@tuneforge.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TuneForgePage;
