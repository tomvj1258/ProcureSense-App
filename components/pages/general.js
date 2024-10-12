"use client";

import { useRouter } from "next/navigation";
import { Crown, SquareArrowOutUpRight, Check } from "lucide-react";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { handleDateFormat } from "@/utils/function";
import { dashboardStore } from "@/stores/dashboard.js";
import { ProposalSidebar } from "@/components/pages/proposal-sidebar.js";

const GeneralPage = () => {
   const { selectedGeneralAnalyseData } = dashboardStore();
   const router = useRouter();

   const analyse = selectedGeneralAnalyseData.analyse;
   const requestForProposal = selectedGeneralAnalyseData.requestForProposal;
   const proposals = selectedGeneralAnalyseData.proposal;
   const ranking = selectedGeneralAnalyseData.ranking;
   const reasonForOverallSelection =
      selectedGeneralAnalyseData.reasonForOverallSelection;
   const overallSuitableProposal =
      selectedGeneralAnalyseData.overallSuitableProposal;
   const proposalAnalyse = selectedGeneralAnalyseData.proposalAnalyse;

   const handleSectionScroll = (sectionId) => {
      router.push(`/analysis/#${sectionId}`);
   };

   const fetchProposalCompanyName = (idx) => {
      return proposals[idx].companyName;
   };

   return (
      <>
         {/* <div className='grid grid-cols-[auto,1fr] gap-4 '> */}
         <div className='grid grid-cols-[auto,1fr] gap-4 '>
            {/* <div className=' min-h-full mt-1 sticky top-40 '> */}
            {/* <ProposalSidebar proposalData={proposals} /> */}
            {/* </div> */}

            <div className='w-full col-span-full '>
               <Card>
                  <CardHeader>
                     <CardTitle>General</CardTitle>
                     <CardDescription>
                        Explore comprehensive analysis details to make informed
                        decisions.
                     </CardDescription>
                  </CardHeader>
                  {selectedGeneralAnalyseData && (
                     <CardContent>
                        <div className='flex flex-col gap-2'>
                           <form className='grid w-full items-start gap-6 overflow-auto pt-0'>
                              <fieldset className='grid gap-6 rounded-lg border p-4'>
                                 <legend className='-ml-1 px-1 text-sm font-medium'>
                                    Request For Proposal Information
                                 </legend>
                                 <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex flex-row gap-1 w-full'>
                                       <span className='font-semibold w-2/12'>
                                          Company Name
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.companyName
                                             ? requestForProposal.companyName
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Company Address
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.companyAddress
                                             ? requestForProposal.companyAddress
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Release Date
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.releaseDate
                                             ? requestForProposal.releaseDate
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Scope Of Work
                                       </span>
                                       <div className='flex flex-col gap-1 w-10/12'>
                                          <span className='flex flex-row border-b border-t'>
                                             <span className='font-semibold w-1/6 text-center border-r border-l'>
                                                Quantity
                                             </span>
                                             <span className='font-semibold w-5/6 text-center border-r'>
                                                Description
                                             </span>
                                          </span>
                                          {requestForProposal.scopeOfWork.map(
                                             (scope, idx) => (
                                                <span
                                                   key={idx}
                                                   className='flex flex-row w-full border-b'
                                                >
                                                   <span className='flex flex-row w-1/6 justify-center border-l border-r'>
                                                      {scope.quantity}
                                                   </span>
                                                   <span className='flex flex-row w-5/6 justify-center border-r'>
                                                      {scope.description}
                                                   </span>
                                                </span>
                                             )
                                          )}
                                       </div>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Terms & Conditions
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.termsConditions
                                             .length > 0
                                             ? requestForProposal.termsConditions.map(
                                                  (terms, idx) => (
                                                     <span
                                                        key={idx}
                                                        className='flex flex-row gap-2 items-center'
                                                     >
                                                        <Check
                                                           size={16}
                                                           className='text-success-text'
                                                        />
                                                        {terms}
                                                     </span>
                                                  )
                                               )
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Delivery Terms
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.deliveryTerms
                                             .length > 0
                                             ? requestForProposal.deliveryTerms.map(
                                                  (terms, idx) => (
                                                     <span
                                                        key={idx}
                                                        className='flex flex-row gap-2 items-center'
                                                     >
                                                        <Check
                                                           size={16}
                                                           className='text-success-text'
                                                        />
                                                        {terms}
                                                     </span>
                                                  )
                                               )
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Payment Terms
                                       </span>
                                       <span className='w-10/12'>
                                          {requestForProposal.paymentTerms
                                             .length > 0
                                             ? requestForProposal.paymentTerms.map(
                                                  (terms, idx) => (
                                                     <span
                                                        key={idx}
                                                        className='flex flex-row gap-2 items-center'
                                                     >
                                                        <Check
                                                           size={16}
                                                           className='text-success-text'
                                                        />
                                                        {terms}
                                                     </span>
                                                  )
                                               )
                                             : "None"}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Contact Information
                                       </span>
                                       {requestForProposal.contactInformation ? (
                                          <span className='flex flex-col gap-2 w-10/12 '>
                                             <span>
                                                Raised by:{" "}
                                                {
                                                   requestForProposal
                                                      .contactInformation
                                                      .raisedBy
                                                }
                                             </span>
                                             <span>
                                                Contact:{" "}
                                                {
                                                   requestForProposal
                                                      .contactInformation
                                                      .contactDetail
                                                }
                                             </span>
                                          </span>
                                       ) : (
                                          "None"
                                       )}
                                    </div>
                                 </div>
                              </fieldset>
                              <fieldset className='grid gap-6 rounded-lg border p-4'>
                                 <legend className='-ml-1 px-1 text-sm font-medium'>
                                    Analyse Information
                                 </legend>
                                 <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex flex-row gap-1 w-full'>
                                       <span className='font-semibold w-2/12'>
                                          Name
                                       </span>
                                       <span className='w-10/12'>
                                          {analyse.name}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Description
                                       </span>
                                       <span className='w-10/12'>
                                          {analyse.description}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Created At
                                       </span>
                                       <span className='w-10/12'>
                                          {handleDateFormat(analyse.createdAt)}
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                       <span className='font-semibold w-2/12'>
                                          Last Updated At
                                       </span>
                                       <span className='w-10/12'>
                                          {handleDateFormat(analyse.updatedAt)}
                                       </span>
                                    </div>
                                 </div>
                              </fieldset>
                              <fieldset className='grid gap-6 rounded-lg border p-4'>
                                 <legend className='-ml-1 px-1 text-sm font-medium'>
                                    Ranking Information
                                 </legend>
                                 <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex flex-row gap-1 w-full'>
                                       <span className='flex flex-row gap-2 items-center font-semibold w-2/12'>
                                          <Crown
                                             size={16}
                                             className='text-warning-text'
                                          />
                                          Suggested Proposal
                                       </span>
                                       <span
                                          className='flex flex-row gap-2 items-center w-10/12 cursor-pointer hover:underline hover:text-primary capitalize'
                                          onClick={() => {
                                             handleSectionScroll(
                                                `proposal${
                                                   overallSuitableProposal + 1
                                                }`
                                             );
                                          }}
                                       >
                                          Proposal {overallSuitableProposal + 1}{" "}
                                          -{" "}
                                          {fetchProposalCompanyName(
                                             overallSuitableProposal
                                          )}
                                          <SquareArrowOutUpRight
                                             size={14}
                                             className='text-primary'
                                          />
                                       </span>
                                    </div>
                                    <div className='flex flex-row gap-1 w-full items-start'>
                                       <span className='flex flex-row gap-2 items-center font-semibold w-2/12'>
                                          Reason For Suggestion
                                       </span>
                                       <span className='flex flex-col gap-1 w-10/12'>
                                          {reasonForOverallSelection.map(
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
                                          {ranking.map((proposal, idx) => (
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
                                                <span>
                                                   Reason:{" "}
                                                   {proposalAnalyse[
                                                      proposal
                                                   ].reasonForRank.join(", ")}
                                                </span>
                                             </span>
                                          ))}
                                       </span>
                                    </div>
                                 </div>
                              </fieldset>
                              {proposals.map((proposal, idx) => (
                                 <fieldset
                                    key={idx}
                                    id={`proposal${idx + 1}`}
                                    className='grid gap-6 rounded-lg border p-4 '
                                 >
                                    <legend className='-ml-1  px-1 text-sm font-medium'>
                                       Proposal - {idx + 1} Information
                                    </legend>
                                    <div className='flex flex-col gap-3 text-sm'>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Company Name
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.companyName
                                                ? proposal.companyName
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Company Address
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.companyAddress
                                                ? proposal.companyAddress
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Company Email
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.companyEmail
                                                ? proposal.companyEmail
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Company Website
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.companyWebsite
                                                ? proposal.companyWebsite
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Submission Date
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.submissionDate
                                                ? proposal.submissionDate
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Scope Of Work
                                          </span>
                                          <div className='w-10/12'>
                                             <span className='flex flex-row border-b border-t'>
                                                <span className='font-semibold w-1/12 text-center border-r border-l'>
                                                   Quantity
                                                </span>
                                                <span className='font-semibold w-6/12 text-center border-r'>
                                                   Description
                                                </span>
                                                <span className='font-semibold w-2/12 text-center border-r'>
                                                   Unit Price
                                                </span>
                                                <span className='font-semibold w-2/12 text-center border-r'>
                                                   Before Taxes
                                                </span>
                                                <span className='font-semibold w-2/12 text-center border-r'>
                                                   Taxes
                                                </span>
                                                <span className='font-semibold w-2/12 text-center border-r'>
                                                   Total Price
                                                </span>
                                             </span>
                                             {proposal.scopeOfWork.map(
                                                (scope, idx) => (
                                                   <span
                                                      key={idx}
                                                      className='flex flex-row w-full border-b'
                                                   >
                                                      <span className='flex flex-row w-1/12 justify-center border-l border-r'>
                                                         {scope.quantity}
                                                      </span>
                                                      <span className='flex flex-row w-6/12 justify-center text-center border-r'>
                                                         {scope.description}
                                                      </span>
                                                      <span className='flex flex-row w-2/12 justify-center border-r'>
                                                         {scope.unit_price}
                                                      </span>
                                                      <span className='flex flex-row w-2/12 justify-center border-r'>
                                                         {
                                                            scope.price_before_taxes
                                                         }
                                                      </span>
                                                      <span className='flex flex-row w-2/12 justify-center border-r'>
                                                         {scope.taxes}
                                                      </span>
                                                      <span className='flex flex-row w-2/12 justify-center border-r'>
                                                         {scope.total_price}
                                                      </span>
                                                   </span>
                                                )
                                             )}
                                          </div>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Terms & Conditions
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.termsConditions.length >
                                             0
                                                ? proposal.termsConditions.map(
                                                     (terms, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-center'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {terms}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Delivery Terms
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.deliveryTerms.length > 0
                                                ? proposal.deliveryTerms.map(
                                                     (terms, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-center'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {terms}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Payment & Terms
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.paymentTerms.length > 0
                                                ? proposal.paymentTerms.map(
                                                     (terms, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-center'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {terms}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Implementation Information
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.proposalImplementation
                                                .length > 0
                                                ? proposal.proposalImplementation.map(
                                                     (terms, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-center'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {terms}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Benefits Information
                                          </span>
                                          <span className='w-10/12'>
                                             {proposal.keyBenefits.length > 0
                                                ? proposal.keyBenefits.map(
                                                     (terms, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-start'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {terms}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Pros
                                          </span>
                                          <span className='w-10/12'>
                                             {proposalAnalyse[idx].pros.length >
                                             0
                                                ? proposalAnalyse[idx].pros.map(
                                                     (pro, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-start'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {pro}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1 w-full'>
                                          <span className='font-semibold w-2/12'>
                                             Cons
                                          </span>
                                          <span className='w-10/12'>
                                             {proposalAnalyse[idx].cons.length >
                                             0
                                                ? proposalAnalyse[idx].cons.map(
                                                     (con, idx) => (
                                                        <span
                                                           key={idx}
                                                           className='flex flex-row gap-2 items-start'
                                                        >
                                                           <Check
                                                              size={16}
                                                              className='text-success-text'
                                                           />
                                                           {con}
                                                        </span>
                                                     )
                                                  )
                                                : "None"}
                                          </span>
                                       </div>
                                       <div className='flex flex-row gap-1'>
                                          <span className='font-semibold w-2/12'>
                                             Contact Information
                                          </span>
                                          {proposal.contactInformation ? (
                                             <span className='flex flex-col gap-2 w-10/12 '>
                                                <span>
                                                   Submitted by:{" "}
                                                   {
                                                      proposal
                                                         .contactInformation
                                                         .submittedBy
                                                   }
                                                </span>
                                                <span>
                                                   Contact:{" "}
                                                   {
                                                      proposal
                                                         .contactInformation
                                                         .contactDetail
                                                   }
                                                </span>
                                             </span>
                                          ) : (
                                             "None"
                                          )}
                                       </div>
                                    </div>
                                 </fieldset>
                              ))}
                           </form>
                        </div>
                     </CardContent>
                  )}
               </Card>
            </div>
         </div>
      </>
   );
};

export default GeneralPage;
