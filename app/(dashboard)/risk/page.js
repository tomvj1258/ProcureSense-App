"use client";
import { Avatar, List } from 'antd';
import { GeistSans } from "geist/font/sans";
import { useAnalysisContext } from '@/contexts/analysis.context.js';


const transformProposalData = (riskAssessmentRanking, proposals, proposalAnalysis) => {
    let transformed_proposals = []

    for (let idx = 0; idx < riskAssessmentRanking.length; idx++) {
        let proposal = proposals[Number(riskAssessmentRanking[idx])]
        let proposal_analysis = proposalAnalysis[Number(riskAssessmentRanking[idx])]

        let transformed_proposal = {
            title: proposal.companyName,
            route: `proposal/${riskAssessmentRanking[idx]}`,
            description: proposal_analysis.riskAssessment
        }
        transformed_proposals.push(transformed_proposal)
    }

    return transformed_proposals
}

const RiskPage = () => {
    const { analysisResult, proposalAnalysis, proposals } = useAnalysisContext();
    const riskAssessmentRanking = analysisResult.riskAssessmentRanking || []
    const overallSelectionReason = analysisResult.reasonForRiskAssessmentSelection || []
    let proposalRanking = transformProposalData(riskAssessmentRanking, proposals, proposalAnalysis)
    let bestProposal = proposalRanking.length > 0 ? [proposalRanking[0]] : []

    return (
        <main className={GeistSans.className}>
            <div className="flex flex-col gap-6 m-8">
                <div className="text-2xl font-bold">Risk Assessment</div>
                <div className="flex flex-col gap-6 bg-white p-8 border rounded">
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Best Proposal</div>
                        </div>
                        <List
                            className='w-2/3 p-4'
                            itemLayout="horizontal"
                            dataSource={bestProposal}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        className={GeistSans.className}
                                        avatar={<Avatar src={`https://api.dicebear.com/8.x/icons/svg?seed=Maggie&backgroundColor=FFD700`} />}
                                        title={<a className='text-black text-base font-semibold' href={item.route}>{item.title}</a>}
                                        description={<span className='text-black text-base'>
                                            <ul className="list-decimal ml-6">
                                                {overallSelectionReason.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </span>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Ranking</div>
                            <div>This proposal leads in financial planning and management, demonstrating a robust model for profitability and investment returns.</div>
                        </div>
                        <List
                            className='w-2/3 p-4'
                            itemLayout="horizontal"
                            dataSource={proposalRanking}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        className={GeistSans.className}
                                        avatar={<Avatar src={`https://api.dicebear.com/8.x/initials/svg?backgroundColor=1890FF&seed=${index + 1}`} />}
                                        title={<a className='text-black text-base font-semibold' href={item.route}>{item.title}</a>}
                                        description={<span className='text-black text-base'>
                                            <ul className="list-decimal ml-6">
                                                {item.description.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </span>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RiskPage;