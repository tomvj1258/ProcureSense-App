"use client";

import { useRouter } from "next/navigation";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { Crown, SquareArrowOutUpRight, Check, Star } from "lucide-react";
import { dashboardStore } from "@/stores/dashboard.js";
import { ProposalSidebar } from "./proposal-sidebar";

const RiskPage = () => {
   const { selectedRiskAnalyseData } = dashboardStore();
   const router = useRouter();

   const riskAssessmentRanking = selectedRiskAnalyseData?.riskAssessmentRanking;
   const overallRiskAssessmentSuitableProposal =
      selectedRiskAnalyseData?.overallRiskAssessmentSuitableProposal;
   const proposalAnalyse = selectedRiskAnalyseData?.proposalAnalyse;
   const reasonForRiskAssessmentSelection =
      selectedRiskAnalyseData?.reasonForRiskAssessmentSelection;
   const proposal = selectedRiskAnalyseData?.proposal;

   const fetchProposalCompanyName = (idx) => {
      const proposalName = proposal[idx];
      return proposalName?.companyName;
   };

   const handleSectionScroll = (sectionId) => {
      router.push(`/analysis/#${sectionId}`);
   };

   return (
      <>
         <div className='grid grid-cols-[auto,1fr] gap-4 '>
            {/* <div className=' min-h-full mt-1  '>
               <ProposalSidebar proposalData={proposalAnalyse} />
            </div> */}
            <div className='w-full col-span-full'>
               <Card>
                  <CardHeader>
                     <CardTitle>Risk Assessment</CardTitle>
                     <CardDescription>
                        Explore risk analysis details to make informed
                        decisions.
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='flex flex-col gap-2'>
                        <form className='grid w-full items-start gap-6 overflow-auto pt-0'>
                           <fieldset className='fieldset'>
                              <legend className='legend'>
                                 Ranking Information
                              </legend>
                              <div className='flex flex-col gap-3 text-sm'>
                                 {/* <div className='flex flex-row gap-1 w-full items-start'>
                                    <span className='flex flex-row gap-2 items-center font-semibold w-2/12'>
                                       <Crown
                                          size={16}
                                          className='text-warning-text'
                                       />
                                       Suggested Proposal
                                    </span>
                                    <span className='w-10/12'>
                                       <span className='flex flex-col gap-2 justify-start'>
                                          <span
                                             className='flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize'
                                             onClick={() => {
                                                handleSectionScroll(
                                                   `proposal${
                                                      overallRiskAssessmentSuitableProposal +
                                                      1
                                                   }`
                                                );
                                             }}
                                          >
                                             {fetchProposalCompanyName(
                                                overallRiskAssessmentSuitableProposal
                                             )}
                                             <SquareArrowOutUpRight
                                                size={14}
                                                className='text-primary'
                                             />
                                          </span>
                                       </span>
                                    </span>
                                 </div>

                                 <div className='flex flex-row gap-1 w-full items-start'>
                                    <span className='flex flex-row gap-2 items-center font-semibold w-2/12'>
                                       Reason For Suggestion
                                    </span>
                                    <span className='flex flex-col gap-1 w-10/12'>
                                       {reasonForRiskAssessmentSelection.map(
                                          (reason, idx) => (
                                             <span
                                                key={idx}
                                                className='flex flex-row gap-2 items-center'
                                             >
                                                <Check
                                                   size={16}
                                                   className='text-success-text'
                                                />
                                                {reason}
                                             </span>
                                          )
                                       )}
                                    </span>
                                 </div> */}

                                 {/* <div className='flex flex-row gap-1 items-start w-full'>
                                    <span className='font-semibold w-2/12'>
                                       Ranking
                                    </span>
                                    <span className='flex flex-col gap-2 w-10/12 capitalize'>
                                       {riskAssessmentRanking.map(
                                          (proposal, idx) => (
                                             <span
                                                key={idx}
                                                className='flex flex-col gap-2'
                                             >
                                                <span
                                                   className='flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize'
                                                   onClick={() => {
                                                      handleSectionScroll(
                                                         `proposal${
                                                            proposal + 1
                                                         }`
                                                      );
                                                   }}
                                                >
                                                   {idx + 1} -{" "}
                                                   {fetchProposalCompanyName(
                                                      proposal
                                                   )}
                                                   <SquareArrowOutUpRight
                                                      size={14}
                                                      className='text-primary'
                                                   />
                                                </span>
                                             </span>
                                          )
                                       )}
                                    </span>
                                 </div> */}

                                 <div className='flex flex-col gap-3 w-full'>
                                    <span className='flex flex-row gap-2 items-center font-semibold underline text-base'>
                                       <Crown
                                          size={16}
                                          className='text-warning-text'
                                       />
                                       Suggested Proposal
                                    </span>
                                    <div className='container flex flex-col gap-4 mx-auto'>
                                       <div className='flex gap-3 items-center '>
                                          <span className=''>
                                             <Star
                                                size={20}
                                                className='border bg-yellow-400 rounded-full p-0.5 text-white size-6'
                                             />
                                          </span>
                                          <span
                                             className='flex flex-row gap-2 text-sm font-semibold items-center cursor-pointer hover:underline hover:text-primary capitalize'
                                             onClick={() => {
                                                handleSectionScroll(
                                                   `proposal${
                                                      overallRiskAssessmentSuitableProposal +
                                                      1
                                                   }`
                                                );
                                             }}
                                          >
                                             Proposal{" "}
                                             {overallRiskAssessmentSuitableProposal +
                                                1}{" "}
                                             -{" "}
                                             {fetchProposalCompanyName(
                                                overallRiskAssessmentSuitableProposal
                                             )}
                                             <SquareArrowOutUpRight
                                                size={14}
                                                className='text-primary'
                                             />
                                          </span>
                                       </div>

                                       <div className='flex flex-col gap-1 w-full items-start'>
                                          <span className='flex flex-row gap-2 items-center font-semibold w-2/12'>
                                             Reason For Suggestion
                                          </span>
                                          <span className='flex flex-col gap-1  container mx-auto'>
                                             {reasonForRiskAssessmentSelection.map(
                                                (reason, idx) => (
                                                   <span
                                                      key={idx}
                                                      className='flex flex-row gap-2 text-sm font-medium items-start'
                                                   >
                                                      <Check
                                                         size={16}
                                                         className='text-success-text '
                                                      />
                                                      <span className='max-w-md'>
                                                         {reason}
                                                      </span>
                                                   </span>
                                                )
                                             )}
                                          </span>
                                       </div>
                                    </div>
                                 </div>

                                 <div className='flex flex-col gap-1 items-start w-full'>
                                    <span className='font-semibold w-2/12'>
                                       Ranking
                                    </span>

                                    <div className='container mx-auto'>
                                       <span className='flex flex-wrap  container mx-auto gap-4  capitalize'>
                                          {riskAssessmentRanking.map(
                                             (proposal, idx) => (
                                                <Card
                                                   key={idx}
                                                   className='flex flex-col gap-2'
                                                >
                                                   <CardHeader
                                                      className='flex flex-row font-semibold  gap-2 px-4 py-2 items-center cursor-pointer hover:underline  hover:text-primary capitalize'
                                                      onClick={() => {
                                                         handleSectionScroll(
                                                            `proposal${
                                                               proposal + 1
                                                            }`
                                                         );
                                                      }}
                                                   >
                                                      <span className='border text-sm font-semibold rounded-full bg-primary/80 size-7 flex items-center justify-center text-white hover:bg-primary'>
                                                         {idx + 1}
                                                      </span>
                                                      {/* {idx + 1} -{" "} */}
                                                      {fetchProposalCompanyName(
                                                         proposal
                                                      )}
                                                      <SquareArrowOutUpRight
                                                         size={14}
                                                         className='text-primary'
                                                      />
                                                   </CardHeader>
                                                   <CardContent className='max-w-xs '>
                                                      Reason:{" "}
                                                      {proposalAnalyse[
                                                         proposal
                                                      ].reasonForRank.join(
                                                         ", "
                                                      )}
                                                   </CardContent>
                                                </Card>
                                             )
                                          )}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </fieldset>

                           {proposalAnalyse.map((proposal, idx) => (
                              <fieldset
                                 key={idx}
                                 id={`proposal${idx + 1}`}
                                 className='fieldset'
                              >
                                 <legend className='legend'>
                                    Proposal - {idx + 1} Information
                                 </legend>
                                 <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex flex-row gap-1 w-full'>
                                       <span className='font-semibold w-2/12'>
                                          Company Name
                                       </span>
                                       <span className='w-10/12'>
                                          {proposal.name
                                             ? proposal.name
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1 w-full'>
                                       <span className='font-semibold w-2/12'>
                                          Risk Analyse
                                       </span>
                                       <span className='w-10/12'>
                                          {proposal.riskAssessment.length > 0
                                             ? proposal.riskAssessment.map(
                                                  (analyse, idx) => (
                                                     <span
                                                        key={idx}
                                                        className='flex flex-row gap-2 items-start'
                                                     >
                                                        <Check
                                                           size={16}
                                                           className='text-success-text'
                                                        />
                                                        {analyse}
                                                     </span>
                                                  )
                                               )
                                             : "None"}
                                       </span>
                                    </div>
                                 </div>
                              </fieldset>
                           ))}
                        </form>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </>
   );
};

export default RiskPage;
