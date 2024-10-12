import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { useScrollWithOffset } from "@/hooks/useScroll";

export const ProposalSidebar = ({ proposalData }) => {
   const scrollToElement = useScrollWithOffset(80);
   return (
      <>
         <Card className=' sticky top-40  pr-16 hidden md:block '>
            <CardHeader>
               <CardTitle>Proposals</CardTitle>
            </CardHeader>
            <CardContent className='grid w-full gap-1'>
               {proposalData.map((proposal, idx) => (
                  <legend
                     className='cursor-pointer hover:text-primary flex items-center p-1  text-sm font-semibold text-left'
                     key={idx}
                     onClick={(e) => {
                        e.preventDefault();
                        scrollToElement(`proposal${idx + 1}`);
                     }}
                  >
                     Proposal - {idx + 1}
                     <SquareArrowOutUpRight
                        size={14}
                        className=' text-primary  ml-2'
                     />
                  </legend>
               ))}
            </CardContent>
         </Card>
      </>
   );
};
