import Image from "next/image";

export default function SpinStep() {
  return (
    <>
      <div className="max-w-[1230px] mx-auto mt-10 md:bg-[#581f00] md:py-10 md:px-5 md:mb-10">
        <div>
          <h1 className="text-white text-2xl font-bold uppercase text-center md:text-4xl">
            How to use Lucky hammer
          </h1>
          <div className="h-[1px] w-[90%] mx-auto bg-gray-300 my-5"></div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 mt-10 md:grid-cols-3">
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step 1:</span>
                <span className="text-yellow-300">Log In</span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_one.webp"
                height={400}
                width={200}
                alt="Step one of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step 2:</span>
                <span>
                  Click your &quot;
                  <span className="text-yellow-300">Avatar</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_two.webp"
                height={400}
                width={200}
                alt="Step two of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step: 3</span>
                <span>
                  Click &quot;
                  <span className="text-yellow-300">Reward center</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_three.webp"
                height={400}
                width={200}
                alt="Step three of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 4:</span>
                <span className="text-pretty">
                  Click &quot;
                  <span className="text-yellow-300">Bonus</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_four.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 5:</span>
                <span className="text-balance">
                  Click &quot;<span className="text-yellow-300">Claim</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_five.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 6:</span>
                <span className="text-balance">
                  Choose a &quot;
                  <span className="text-yellow-300">Golden Egg</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/image_steps/step_six.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto flex items-center justify-center my-10 md:my-20">
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
          <div className="text-center">
            <h2 className="text-yellow-300 mb-4 font-bold text-2xl md:mb-0 md:text-4xl md:font-bold">
              Contact Us
            </h2>
            <div className="flex flex-col items-center gap-5 md:flex-row lg:mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/img/image_steps/telegram_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="text-white mt-2 md:mt-1">
                  <a
                    href="https://t.me/AgentTMJel"
                    target="_blank"
                    className="inline-block font-semibold text-white hover:text-[#8EE4FF] transform transition duration-300 hover:-translate-y-1"
                  >
                    @AgentTMJel
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/image_steps/telegram_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="text-white mt-2 md:mt-1">
                  <a
                    href="https://t.me/angelplay789"
                    target="_blank"
                    className="inline-block font-semibold text-white hover:text-[#8EE4FF] transform transition duration-300 hover:-translate-y-1"
                  >
                    @angelplay789
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/image_steps/viber_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="mt-2 md:mt-1 inline-block font-semibold text-white hover:text-[#a78bfa] transform transition duration-300 hover:-translate-y-1 cursor-pointer">
                  +63 915 0612 743
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/image_steps/viber_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="mt-2 md:mt-1 inline-block font-semibold text-white hover:text-[#a78bfa] transform transition duration-300 hover:-translate-y-1 cursor-pointer">
                  +63 920 5624 589
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
