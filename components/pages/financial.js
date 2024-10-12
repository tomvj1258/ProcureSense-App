"use client";

import { useRouter } from "next/navigation";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { Crown, SquareArrowOutUpRight, Check } from "lucide-react";
import { dashboardStore } from "@/stores/dashboard.js";
import { ProposalSidebar } from "./proposal-sidebar";

const FinancialPage = () => {
   const { selectedFinancialAnalyseData } = dashboardStore();
   const router = useRouter();

   const financialAnalyse = selectedFinancialAnalyseData?.financialAnalyse;
   const financialRanking = selectedFinancialAnalyseData?.financialRanking;
   const overallFinanciallySuitableProposal =
      selectedFinancialAnalyseData?.overallFinanciallySuitableProposal;
   const proposalAnalyse = selectedFinancialAnalyseData?.proposalAnalyse;
   const reasonForFinancialSelection =
      selectedFinancialAnalyseData?.reasonForFinancialSelection;
   const proposal = selectedFinancialAnalyseData?.proposal;

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
                     <CardTitle>Financial</CardTitle>
                     <CardDescription>
                        Explore financial analysis details to make informed
                        decisions.
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='flex flex-col gap-2'>
                        <form className='grid w-full items-start gap-6 overflow-auto pt-0'>
                           <fieldset className='grid gap-6 rounded-lg border p-4'>
                              <legend className='-ml-1 px-1 text-sm font-medium'>
                                 Basic Metrics
                              </legend>
                              <div className='flex flex-col gap-3 text-sm'>
                                 <div className='flex flex-row gap-1 w-full'>
                                    <span className='font-semibold w-2/12'>
                                       Average Quotion Value
                                    </span>
                                    <span className='w-10/12'>
                                       {financialAnalyse.avgQuote}
                                    </span>
                                 </div>
                                 <div className='flex flex-row gap-1'>
                                    <span className='font-semibold w-2/12'>
                                       Maximum Quotation Value
                                    </span>
                                    <span className='flex flex-row w-10/12'>
                                       {financialAnalyse.maxQuote} -
                                       <span
                                          className='flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize'
                                          onClick={() => {
                                             handleSectionScroll(
                                                `proposal${
                                                   financialAnalyse.maxQuoteProposal +
                                                   1
                                                }`
                                             );
                                          }}
                                       >
                                          {fetchProposalCompanyName(
                                             financialAnalyse.maxQuoteProposal
                                          )}
                                          <SquareArrowOutUpRight
                                             size={14}
                                             className='text-primary'
                                          />
                                       </span>
                                    </span>
                                 </div>
                                 <div className='flex flex-row gap-1'>
                                    <span className='font-semibold w-2/12'>
                                       Minimum Quotation Value
                                    </span>
                                    <span className='flex flex-row w-10/12'>
                                       {financialAnalyse.minQuote} -
                                       <span
                                          className='flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize'
                                          onClick={() => {
                                             handleSectionScroll(
                                                `proposal${
                                                   financialAnalyse.maxQuoteProposal +
                                                   1
                                                }`
                                             );
                                          }}
                                       >
                                          {fetchProposalCompanyName(
                                             financialAnalyse.minQuoteProposal
                                          )}
                                          <SquareArrowOutUpRight
                                             size={14}
                                             className='text-primary'
                                          />
                                       </span>
                                    </span>
                                 </div>
                              </div>
                           </fieldset>
                           <fieldset className='grid gap-6 rounded-lg border p-4'>
                              <legend className='-ml-1 px-1 text-sm font-medium'>
                                 Ranking Information
                              </legend>
                              <div className='flex flex-col gap-3 text-sm'>
                                 <div className='flex flex-row gap-1 w-full items-start'>
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
                                                      overallFinanciallySuitableProposal +
                                                      1
                                                   }`
                                                );
                                             }}
                                          >
                                             {fetchProposalCompanyName(
                                                overallFinanciallySuitableProposal
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
                                       {reasonForFinancialSelection.map(
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
                                 </div>
                                 <div className='flex flex-row gap-1 items-start w-full'>
                                    <span className='font-semibold w-2/12'>
                                       Ranking
                                    </span>
                                    <span className='flex flex-col gap-2 w-10/12 capitalize'>
                                       {financialRanking.map(
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
                                 </div>
                              </div>
                           </fieldset>
                           {proposalAnalyse.map((proposal, idx) => (
                              <fieldset
                                 key={idx}
                                 id={`proposal${idx + 1}`}
                                 className='grid gap-6 rounded-lg border p-4'
                              >
                                 <legend className='-ml-1 px-1 text-sm font-medium'>
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
                                          Financial Analyse
                                       </span>
                                       <span className='w-10/12'>
                                          {proposal.financialAnalysis.length > 0
                                             ? proposal.financialAnalysis.map(
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

export default FinancialPage;
