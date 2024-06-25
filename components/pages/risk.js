"use client";

import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Crown, SquareArrowOutUpRight, Check } from "lucide-react";
import { dashboardStore } from "@/stores/dashboard.js";

const RiskPage = () => {

    const { selectedRiskAnalyseData } = dashboardStore();
    const router = useRouter();

    const riskAssessmentRanking = selectedRiskAnalyseData?.riskAssessmentRanking;
    const overallRiskAssessmentSuitableProposal = selectedRiskAnalyseData?.overallRiskAssessmentSuitableProposal;
    const proposalAnalyse = selectedRiskAnalyseData?.proposalAnalyse;
    const reasonForRiskAssessmentSelection = selectedRiskAnalyseData?.reasonForRiskAssessmentSelection;
    const proposal = selectedRiskAnalyseData?.proposal;

    const fetchProposalCompanyName = (idx) => {
        const proposalName = proposal[idx];
        return proposalName?.companyName;
    }

    const handleSectionScroll = (sectionId) => {
        router.push(`/analysis/#${sectionId}`);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>
                    Explore risk analysis details to make informed decisions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <form className="grid w-full items-start gap-6 overflow-auto pt-0">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Ranking Information
                            </legend>
                            <div className="flex flex-col gap-3 text-sm">
                                <div className="flex flex-row gap-1 w-full items-start">
                                    <span className="flex flex-row gap-2 items-center font-semibold w-2/12">
                                        <Crown size={16} className="text-warning-text" />
                                        Suggested Proposal
                                    </span>
                                    <span className="w-10/12">
                                        <span className='flex flex-col gap-2 justify-start'>
                                            <span className="flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize" onClick={() => { handleSectionScroll(`proposal${overallRiskAssessmentSuitableProposal + 1}`) }}>
                                                {fetchProposalCompanyName(overallRiskAssessmentSuitableProposal)}
                                                <SquareArrowOutUpRight size={14} className="text-primary" />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div className="flex flex-row gap-1 w-full items-start">
                                    <span className="flex flex-row gap-2 items-center font-semibold w-2/12">
                                        Reason For Suggestion
                                    </span>
                                    <span className="flex flex-col gap-1 w-10/12">
                                        {reasonForRiskAssessmentSelection.map((reason, idx) => (
                                            <span key={idx} className="flex flex-row gap-2 items-center">
                                                <Check size={16} className="text-success-text" />
                                                {reason}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                                <div className="flex flex-row gap-1 items-start w-full">
                                    <span className="font-semibold w-2/12">Ranking</span>
                                    <span className="flex flex-col gap-2 w-10/12 capitalize">
                                        {riskAssessmentRanking.map((proposal, idx) => (
                                            <span key={idx} className="flex flex-col gap-2">
                                                <span className="flex flex-row gap-2 items-center cursor-pointer hover:underline hover:text-primary capitalize" onClick={() => { handleSectionScroll(`proposal${proposal + 1}`) }}>
                                                    {idx + 1} - {fetchProposalCompanyName(proposal)}
                                                    <SquareArrowOutUpRight size={14} className="text-primary" />
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </fieldset>
                        {proposalAnalyse.map((proposal, idx) => (
                            <fieldset key={idx} id={`proposal${idx + 1}`} className="grid gap-6 rounded-lg border p-4">
                                <legend className="-ml-1 px-1 text-sm font-medium">
                                    Proposal - {idx + 1} Information
                                </legend>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex flex-row gap-1 w-full">
                                        <span className="font-semibold w-2/12">Company Name</span>
                                        <span className="w-10/12">{proposal.name ? proposal.name : 'None'}</span>
                                    </div>
                                    <div className="flex flex-row gap-1 w-full">
                                        <span className="font-semibold w-2/12">Risk Analyse</span>
                                        <span className="w-10/12">
                                            {proposal.riskAssessment.length > 0 ? proposal.riskAssessment.map((analyse, idx) => (
                                                <span key={idx} className="flex flex-row gap-2 items-start">
                                                    <Check size={16} className="text-success-text" />
                                                    {analyse}
                                                </span>
                                            )) : 'None'}
                                        </span>
                                    </div>
                                </div>
                            </fieldset>
                        ))}
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default RiskPage;