import React, {useState} from "react";
export default function AuthorCard(){
  const [isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })
    return(
        <div id="intro" 
        class="bg-[#3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/AMBS.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Abraham MB Selebay</h1>
                <small class="text-center block text-md text-gray-800">Technoprenuer CyberSecurity Enthusiast Team-Worker &amp; Emerging Software Engineer</small>
                <p class="text-center text-lg text-auto-800">Hi! I'm Abraham MB Selebay a young <b> <i>Technoprenuer and CyberSecurity Enthusiast.</i></b> 
                I'm a member of a BlueTeamer and a solution hunter. I'm a Penetrater Tester and an Emerging BugBounter
                </p>
                <div className="p-6 max-w-full mx-auto">
                  <ul className="flex justify-center items-center gap-4">
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "education" && 'bg-[#70B198]'}`}>
                      <a href="" id="education" className="font-roboto font-bold text-xl text-[#E7EFF3]">Education</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "work" && 'bg-[#42C13E]'}`}>
                      <a href="" id="work" className="font-roboto text-xl">Work</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "work" && 'bg-[#307FC0]'}`}>
                      <a href="" id="hobbies" className="font-roboto font-bold text-xl">Hobbies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

    )
}