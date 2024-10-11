import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Link, SquareArrowOutUpRight } from "lucide-react";

export const ProposalSidebar = ({ proposalData }) => {
   const router = useRouter();
   const handleSectionScroll = (sectionId) => {
      router.push(`/analysis/#${sectionId}`);
   };
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
                     onClick={() => {
                        handleSectionScroll(`proposal${idx + 1}`);
                     }}
                  >
                     Proposal - {idx + 1}
                     {/* <Link className='ml-1 size-4' /> */}
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
