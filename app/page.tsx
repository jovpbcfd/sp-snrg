import SpinStep from "@/component/spin-step";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1230px] mx-auto mt-10 md:bg-[#581f00] md:py-10 md:px-5">
        <div>
          <h1 className="text-white text-2xl font-bold uppercase text-center md:text-4xl">
            SwertePlus New Raffle Group
          </h1>
          <div className="h-[1px] w-[90%] mx-auto bg-gray-300 my-5"></div>
        </div>

        <div className="grid grid-cols-1 gap-y-5 mt-10 md:grid-cols-5">
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step 1:</span>
                <span>
                  Download the
                  <span className="block">
                    &quot;
                    <span className="text-yellow-300">Telegram app</span>
                    &quot;
                  </span>
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/step_one.webp"
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
                  After registering
                  <span className="block">search for</span>
                  &quot;<span className="text-yellow-300">spprogmagent</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/step_two.webp"
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
                  Enter the group and go{" "}
                  <span>
                    to the &quot;
                    <span className="text-yellow-300">Prize Draw</span>&quot;
                    tab
                  </span>
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/step_three.webp"
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
                  Click the &quot;<span className="text-yellow-300">Join</span>
                  &quot;
                  <span className="block">button</span>
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/step_four.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 5:</span>
                <span className="text-balance">
                  Send the required
                  <span className="block">details via private</span>
                  message to the contact
                  <span className="block">mentioned in the post</span>
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/step_five.webp"
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
          <div>
            <Image
              src="/img/sppromagentQR.png"
              width={200}
              height={200}
              alt="QR code"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-yellow-300 font-bold text-2xl md:text-4xl md:font-bold">
              Join the New Raffle Group
              <span className="block">Scan Now!</span>
            </h2>
            <p className="text-white mt-2 md:mt-1">
              <a
                href="https://t.me/sppromagent/4"
                className="inline-block text-white hover:text-[#8EE4FF] transform transition duration-300 hover:-translate-y-1"
              >
                https://t.me/sppromagent/4
              </a>
            </p>
          </div>
        </div>
      </div>

      <SpinStep />
    </>
  );
}
