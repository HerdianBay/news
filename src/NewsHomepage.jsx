import { useState } from "react";

export default function NewsHomepage() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4 mt-3 lg:max-w-[900px] lg:px-0 lg:py-8 lg:mt-0 xl:py-0 font-inter">
          {isClicked && (
            <div className="fixed inset-0 z-5 backdrop-brightness-40 bg-white/10"></div>
          )}
          {isClicked && (
            <div className="absolute top-0 right-0 z-10 bg-white h-full w-2/3 p-4">
              <div className="flex w-full justify-end">
                <button className="flex" onClick={handleClick}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="mt-16">
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">New</a>
                  </li>
                  <li>
                    <a href="#">Popular</a>
                  </li>
                  <li>
                    <a href="#">Trending</a>
                  </li>
                  <li>
                    <a href="#">Categories</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between z-0 ">
            <h5 className="font-bold text-4xl">W.</h5>
            <button onClick={handleClick} className="lg:hidden">
              <span className="w-[40px] h-[3px] my-0.5 block bg-slate-900"></span>
              <span className="w-[40px] h-[3px] my-0.5 block bg-slate-900"></span>
              <span className="w-[40px] h-[3px] my-0.5 block bg-slate-900"></span>
            </button>
            <ul className="hidden lg:flex lg:gap-8 text-sm text-grayishBlue">
              <li className="hover:text-softOrange">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-softOrange">
                <a href="#">New</a>
              </li>
              <li className="hover:text-softOrange">
                <a href="#">Popular</a>
              </li>
              <li className="hover:text-softOrange">
                <a href="#">Trending</a>
              </li>
              <li className="hover:text-softOrange">
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>
          <div className="mt-6 lg:hidden">
            <img src="/image-web-3-mobile.jpg" alt="Image-Random" />
            <div className="mt-4">
              <h1 className="font-bold text-5xl">
                The Bright Future of Web 3.0?
              </h1>
              <p className="pt-4 text-base text-grayishBlue">
                We dive into the next evolution of the web that claims to put
                the tower of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="mt-5 bg-softRed px-5 py-2 tracking-widest font-semibold hover:cursor-pointer">
                READ MORE
              </button>
            </div>
          </div>
          <div className="hidden lg:flex mt-8 gap-6">
            <div className="w-2/3">
              <img src="/image-web-3-desktop.jpg" alt="Image-Random" />
              <div className="flex mt-4 gap-10 items-center">
                <h1 className="font-bold text-5xl items-center basis-1/2">
                  The Bright Future of Web 3.0?
                </h1>
                <div className="basis-1/2">
                  <p className="text-base text-grayishBlue">
                    We dive into the next evolution of the web that claims to
                    put the tower of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className="mt-5 bg-softRed px-8 py-2 tracking-widest font-semibold hover:cursor-pointer">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-veryDarkBlue p-5">
                <h2 className="text-softOrange font-semibold text-3xl">New</h2>
                <div className="mt-7 text-offWhite">
                  <h3 className="font-semibold text-md">
                    <a href="#" className="hover:text-softOrange">
                      Hydrogen VS Electric Cars
                    </a>
                  </h3>
                  <p className="text-sm mt-2 text-grayishBlue">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                  <hr className="mt-7" />
                </div>
                <div className="text-offWhite mt-7">
                  <h3 className="font-semibold text-md">
                    <a href="#" className="hover:text-softOrange">
                      The downsides of AI Artistry
                    </a>
                  </h3>
                  <p className="text-sm mt-2 text-grayishBlue">
                    What are the possible adverse effects of on-demand AI image
                    generation
                  </p>
                  <hr className="mt-7" />
                </div>
                <div className="text-offWhite mt-7">
                  <h3 className="font-semibold text-md">
                    <a href="#" className="hover:text-softOrange">
                      Is VC Funding Drying Up?
                    </a>
                  </h3>
                  <p className="text-sm mt-2 text-grayishBlue">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex mt-16 justify-between items-center gap-6 h-[144px]">
            <div className="flex items-center gap-5 w-1/3 h-full">
              <img src="./image-retro-pcs.jpg" className="h-full" />
              <div className="flex flex-col h-full justify-between">
                <h2 className="font-bold text-softRed text-3xl">01</h2>
                <h3 className="font-bold text-md">
                  <a href="#" className="hover:text-softRed">
                    Reviving Retro PCs
                  </a>
                </h3>
                <p className="text-grayishBlue text-sm">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 w-1/3 h-full">
              <img src="./image-top-laptops.jpg" className="h-full" />
              <div className="flex flex-col h-full justify-between">
                <h2 className="font-bold text-softRed text-3xl">02</h2>
                <h3 className="font-bold text-md">
                  <a href="#" className="hover:text-softRed">
                    Top 10 Laptops of 2022
                  </a>
                </h3>
                <p className="text-grayishBlue text-sm">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 w-1/3 h-full">
              <img src="./image-gaming-growth.jpg" className="h-full" />
              <div className="flex flex-col h-full justify-between">
                <h2 className="font-bold text-softRed text-3xl">03</h2>
                <h3 className="font-bold text-md">
                  <a href="#" className="hover:text-softRed">
                    The Growth of Gaming
                  </a>
                </h3>
                <p className="text-grayishBlue text-sm">
                  How the pandemic has sparked fresh opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="bg-veryDarkBlue mt-16 p-5 lg:hidden">
            <h2 className="text-softOrange font-semibold text-3xl">New</h2>
            <div className="mt-7 text-offWhite">
              <h3 className="font-semibold text-xl">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-base mt-2">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
              <hr className="mt-7" />
            </div>
            <div className="text-offWhite mt-7">
              <h3 className="font-semibold text-xl">
                The downsides of AI Artistry
              </h3>
              <p className="text-base mt-2">
                What are the possible adverse effects of on-demand AI image
                generation
              </p>
              <hr className="mt-7" />
            </div>
            <div className="text-offWhite mt-7">
              <h3 className="font-semibold text-xl">
                Is VC Funding Drying Up?
              </h3>
              <p className="text-base mt-2">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
          <div className="mt-20 mb-20 lg:hidden">
            <div className="flex items-center">
              <img src="./image-retro-pcs.jpg" className="max-h-[120px]" />
              <div className="px-6 flex flex-col gap-1.5">
                <h2 className="font-bold text-softRed text-3xl">01</h2>
                <h3 className="font-bold text-lg">Reviving Retro PCs</h3>
                <p className="text-grayishBlue text-sm">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <img
                src="./image-top-laptops.jpg"
                alt=""
                className="max-h-[120px]"
              />
              <div className="px-6 flex flex-col gap-1.5">
                <h2 className="font-bold text-softRed text-3xl">02</h2>
                <h3 className="font-bold text-lg">Top 10 Laptops of 2022</h3>
                <p className="text-grayishBlue text-sm">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <img
                src="./image-gaming-growth.jpg"
                alt=""
                className="max-h-[120px]"
              />
              <div className="px-6 flex flex-col gap-1.5">
                <h2 className="font-bold text-softRed text-3xl">03</h2>
                <h3 className="font-bold text-lg">The Growth of Gaming</h3>
                <p className="text-grayishBlue text-sm">
                  How the pandemic has sparked fresh opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
