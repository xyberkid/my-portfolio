import React from "react";
export default function Hobbies(){
    return(
        <div id="hobbie" 
        class="bg-[#728FCE] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 font-bold text-md">Hobbies</h3>
        </div>
        
        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Hacking</summary>
          <p>Hacking for fun have been my major hobbit</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Learning</summary>
          <p>Learning new things is what I love doing when am chance and doing nothing.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Fun</summary>
          <p>Fun sharing is what playful I found pleasure having with others</p>
        </details>
        </div>
    )
}