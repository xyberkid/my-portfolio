import React, {useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../db/firebase";

export default function PostAuthorCard({authorId}){
    const [author, setAuthor] = useState({});

    console.log((authorId))

    useEffect(() => {
        return async () => {
            const ref = doc(FirebaseDB, "users", authorId);
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
                const author = docSnap.data();

                setAuthor(author)

                console.log({author})
            } else {
                console.log("No Such document!");
            }
            }
    }, []);
    return(
        <>
        <div class="flex-shrink-0">
                          <a href="">
                            <span class="sr-only">{`${author.firstname} ${author.lastname}`}</span>
                            <img
                              class="h-10 w-10 rounded-full"
                              src={author.img_url}
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                            {`${author.firstname} ${author.lastname}`}
                            </a>
                          </p>
                          <div class="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2022-11-23">Nov 23, 2022</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>3 min read</span>
                          </div>
                        </div>
        </>
    )
}