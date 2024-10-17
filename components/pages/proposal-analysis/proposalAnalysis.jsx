import { Check } from "lucide-react";
import React from "react";

export const ProposalAnalysis = ({ proposalAnalysisData, title }) => {
   return (
      <>
         {proposalAnalysisData.map((proposal, idx) => {
            const analysis =
               title === "Financial"
                  ? proposal?.financialAnalysis
                  : title === "Risk" && proposal?.riskAssessment;
            return (
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
                           {proposal.name ? proposal.name : "None"}
                        </span>
                     </div>
                     <div className='flex flex-row gap-1 w-full'>
                        <span className='font-semibold w-2/12'>
                           {title} Analyse
                        </span>
                        <span className='w-10/12'>
                           {analysis.length > 0
                              ? analysis.map((analyse, idx) => (
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
                                ))
                              : "None"}
                        </span>
                     </div>
                  </div>
               </fieldset>
            );
         })}
      </>
   );
};
