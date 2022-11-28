import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* <!-- ====== Contact Section Start --> */}
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">

        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <div class="flex justify-center">
            <div class="text-center lg:max-w-3xl md:max-w-xl">
              <h2 class="text-3xl font-bold mb-12 px-6">Contact us</h2>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
              <form>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                    placeholder="Name" />
                </div>
                <div class="form-group mb-6">
                  <input type="email" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                    placeholder="Email address" />
                </div>
                <div class="form-group mb-6">
                  <textarea class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <div class="form-group form-check text-center mb-6">
                  <input type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87" checked />
                  <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                    message</label>
                </div>
                <button type="submit" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
              </form>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div class="flex flex-wrap">
                <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="w-5 text-white"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">Technical support</p>
                      <p class="text-gray-500">xyberkid0@gmail.com</p>
                      <p class="text-gray-500">+231-770-244-025</p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg class="h-8 w-8 text-white-500" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">Address</p>
                      <p class="text-gray-500">DuPort Road, Paynesville </p>
                      <p class="text-gray-500">Monrovia Liberia</p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div class="flex align-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                          class="w-5 text-white" role="img" xmlns="#" viewBox="0 0 576 512">
                          <path fill="currentColor"
                            d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">Social Media</p>
                      <li class="text-blue-500 underline"> <a href="https://www.facebook.com/abraham.mb.selebay/">Facebook</a></li>
                      <li class="text-blue-500 underline"> <a href="https://lr.linkedin.com/in/abraham-mb-selebay-a96404152/"> Linkedin </a> </li>
                      <li class="text-blue-500 underline"> <a href="https://discordapp.com/users/abra#7277/"> Discord </a> </li>

                    </div>
                  </div>
                </div>
                <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div class="flex align-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" class="w-5 text-white"
                          role="img" xmlns="#" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">Bug report</p>
                      <p class="text-gray-500">brahamhack@gmail.com</p>
                      <p class="text-gray-500">+231-888-687-403</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}

      </div>
      {/* <!-- Container for demo purpose --> */}

      {/* <!-- ====== Contact Section End --> */}
    </>
  )
}