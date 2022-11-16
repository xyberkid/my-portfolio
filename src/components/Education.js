import React from "react";
export default function Education(){
    return(
        <div id="education" 
        class="bg-[#73A16C] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 font-bold text-md">Education</h3>
        </div>
        
        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">BlueCrest University College</summary>
          <p>BlueCrest University College Liberia offers BScIT, BBA ,Certificate and Diploma programs in IT.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">HTB University</summary>
          <p>HTB Academy is a real "University for Hackers," where our users can learn step-by-step the cybersecurity 
            theory. All the way from guided to exploratory learning, learn how to hack and develop the hacking mindset 
            that will enable you to assess and create secure systems.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Try Hack Me</summary>
          <p>TryHackMe is a free online platform for learning cyber security, using 
            hands-on exercises and labs, all through your browser!</p>
        </details>
        </div>
    )
}