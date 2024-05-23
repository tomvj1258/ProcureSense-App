"use client"
import { Pagination } from 'antd';
import { GeistSans } from "geist/font/sans";
import { useAnalysisContext } from '@/contexts/analysis.context.js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProposalPage = ({ params }) => {
    const router = useRouter();
    let currentIdx = Number(params.proposal) + 1
    const { analysisResult, proposalAnalysis, proposals } = useAnalysisContext();

    const handleProposalChange = (page) => {
        router.push(`/proposal/${page - 1}`);
    }

    const totalProposals = proposalAnalysis ? proposalAnalysis.length : 0
    const currentProposalAnalysis = proposalAnalysis[params.proposal] || {}
    const currentProposal = proposals[params.proposal] || {}

    let pros = currentProposalAnalysis.pros || []
    pros = pros.length > 0 ? pros : ['No Data Available']

    let cons = currentProposalAnalysis.cons || []
    cons = cons.length > 0 ? cons : ['No Data Available']

    let riskAssessment = currentProposalAnalysis.riskAssessment || []
    riskAssessment = riskAssessment.length > 0 ? riskAssessment : ['No Data Available']

    let financialAnalysis = currentProposalAnalysis.financialAnalysis || []
    financialAnalysis = financialAnalysis.length > 0 ? financialAnalysis : ['No Data Available']

    let remarks = currentProposalAnalysis.remarks || []
    remarks = remarks.length > 0 ? remarks : ['No Data Available']

    let reasonForRanking = currentProposalAnalysis.reasonForRank || []
    reasonForRanking = reasonForRanking.length > 0 ? reasonForRanking : ['No Data Available']

    let keyBenefits = currentProposal.keyBenefits || []
    keyBenefits = keyBenefits.length > 0 ? keyBenefits : ['No Data Available']

    let proposalImplementation = currentProposal.proposalImplementation || []
    proposalImplementation = proposalImplementation.length > 0 ? proposalImplementation : ['No Data Available']

    let scopeOfWork = currentProposal.scopeOfWork || []
    scopeOfWork = scopeOfWork.length > 0 ? scopeOfWork : ['No Data Available']

    let termsConditions = currentProposal.termsConditions || []
    termsConditions = termsConditions.length > 0 ? termsConditions : ['No Data Available']

    let paymentTerms = currentProposal.paymentTerms || []
    paymentTerms = paymentTerms.length > 0 ? paymentTerms : ['No Data Available']

    let deliveryTerms = currentProposal.deliveryTerms || []
    deliveryTerms = deliveryTerms.length > 0 ? deliveryTerms : ['No Data Available']

    return (
        <main className={GeistSans.className}>
            <div className="flex flex-col gap-6 m-8">
                <div className="flex flex-col gap-2 text-2xl font-bold">
                    <span className='flex flex-row justify-between'>
                        <span>{currentProposalAnalysis.name}</span>
                        <Pagination simple defaultCurrent={currentIdx} total={totalProposals} defaultPageSize={1} onChange={handleProposalChange} />
                    </span>
                    <span className='text-lg font-semibold'>
                        Rank - {currentProposalAnalysis.rank}
                    </span>
                </div>
                <div className="flex flex-col gap-8 bg-white p-8 border rounded">
                    <div className='text-xl font-bold'>Analysis Result</div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Pros</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {pros.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Cons</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {cons.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Financial Assessment</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {financialAnalysis.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Risk Assessment</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {riskAssessment.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-1 w-3/5'>
                            <div className='text-lg font-semibold'>Reason for Ranking</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {reasonForRanking.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-3/5'>
                            <div className='text-lg font-semibold'>Remark</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {remarks.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-xl font-bold'>Proposal Details</div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='text-lg font-semibold'>Scope Of Work</div>
                            <div className='flex flex-col gap-1 w-full'>
                                <div className='flex flex-row gap-2 w-full'>
                                    <div className='w-3/12 text-base font-medium'>Description</div>
                                    <div className='w-1/12 text-base font-medium text-center'>Quantity</div>
                                    <div className='w-1/6 text-base font-medium text-center'>Unit Price</div>
                                    <div className='w-1/6 text-base font-medium text-center'>Price Before Taxes</div>
                                    <div className='w-1/6 text-base font-medium text-center'>Taxes</div>
                                    <div className='w-1/6 text-base font-medium text-center'>Total Price</div>
                                </div>
                                {scopeOfWork.map((item, index) => (
                                    <div className='flex flex-row gap-2 border-b py-3' key={index}>
                                        <div className='w-3/12 text-wrap'>{item.description}</div>
                                        <div className='w-1/12 text-center'>{item.quantity}</div>
                                        <div className='w-1/6 text-center'>{item.unit_price}</div>
                                        <div className='w-1/6 text-center'>{item.price_before_taxes}</div>
                                        <div className='w-1/6 text-center'>{item.taxes}</div>
                                        <div className='w-1/6 text-center'>{item.total_price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Key Benefits</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {keyBenefits.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Proposal Implementation</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {proposalImplementation.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Terms & Conditions</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {termsConditions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Payment Terms</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {paymentTerms.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 ml-10'>
                        <div className='flex flex-col gap-2 w-3/5'>
                            <div className='text-lg font-semibold'>Delivery Terms</div>
                            <div className='ml-6'>
                                <ul className="list-disc">
                                    {deliveryTerms.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default ProposalPage