"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useScrollWithOffset(offset = 0) {
   const router = useRouter();

   const scrollToElement = useCallback(
      (elementId) => {
         router.push(`/analysis/#${elementId}`);
         setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
               const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset -
                  offset;
               window.scrollTo({ top: y, behavior: "smooth" });
            }
         }, 100);
      },
      [router, offset]
   );

   return scrollToElement;
}
