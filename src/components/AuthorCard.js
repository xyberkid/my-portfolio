import React from "react";
export default function AuthorCard(){
    return(
        <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/AMBS.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Abraham MB Selebay</h1>
                <small class="text-center block text-md text-gray-800">Technoprenuer CyberSecurity Enthusiast Team-Worker &amp; Emerging Software Engineer</small>
                <p class="text-justify text-lg text-gray-800">Hi! I'm Abraham MB Selebay a young <b> <i>Technoprenuer and CyberSecurity Enthusiast.</i></b> I'm a member of a BlueTeamer and a solution hunter. I'm a Penetrater Tester and an Emerging BugBounter <br>
                </br></p>
              </div>
            </div>

    )
}