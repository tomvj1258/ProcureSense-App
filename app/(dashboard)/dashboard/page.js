"use client";
import { Card, Statistic, Avatar, List } from 'antd';
import { GeistSans } from "geist/font/sans";
import { useAnalysisContext } from '@/contexts/analysis.context.js';

const transformFinancialData = (ranking, proposals, proposalAnalysis) => {
    let transformed_proposals = []

    for (let idx = 0; idx < ranking.length; idx++) {
        let proposal = proposals[Number(ranking[idx])]
        let proposal_analysis = proposalAnalysis[Number(ranking[idx])]

        let transformed_proposal = {
            title: proposal.companyName,
            route: `proposal/${ranking[idx]}`,
            description: proposal_analysis.financialAnalysis
        }
        transformed_proposals.push(transformed_proposal)
    }

    return transformed_proposals
}

const transformProposalData = (ranking, proposals, proposalAnalysis) => {
    let transformed_proposals = []

    for (let idx = 0; idx < ranking.length; idx++) {
        let proposal = proposals[Number(ranking[idx])]
        let proposal_analysis = proposalAnalysis[Number(ranking[idx])]

        let transformed_proposal = {
            title: proposal.companyName,
            route: `proposal/${ranking[idx]}`,
            description: proposal_analysis.reasonForRank
        }
        transformed_proposals.push(transformed_proposal)
    }

    return transformed_proposals
}

const transformRiskData = (ranking, proposals, proposalAnalysis) => {
    let transformed_proposals = []

    for (let idx = 0; idx < ranking.length; idx++) {
        let proposal = proposals[Number(ranking[idx])]
        let proposal_analysis = proposalAnalysis[Number(ranking[idx])]

        let transformed_proposal = {
            title: proposal.companyName,
            route: `proposal/${ranking[idx]}`,
            description: proposal_analysis.riskAssessment
        }
        transformed_proposals.push(transformed_proposal)
    }

    return transformed_proposals
}

const DashboardPage = () => {
    const { analysisResult, proposalAnalysis, proposals } = useAnalysisContext();
    const financialRanking = analysisResult.financialRanking || []
    const riskAssessmentRanking = analysisResult.riskAssessmentRanking || []
    const ranking = analysisResult.ranking || []

    let proposalFinanicalRanking = transformFinancialData(financialRanking, proposals, proposalAnalysis)
    let proposalRiskRanking = transformRiskData(riskAssessmentRanking, proposals, proposalAnalysis)
    let proposalRanking = transformProposalData(ranking, proposals, proposalAnalysis)

    return (
        <main className={GeistSans.className}>
            <div className="flex flex-col gap-6 m-8">
                <div className="text-2xl font-bold">Dashboard</div>
                <div className="flex flex-col gap-8 bg-white p-8 border rounded">
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Top Pick: All-Round Excellence</div>
                            <div>This proposal represents the pinnacle of innovation, feasibility, and potential success, earning the top spot across all categories.</div>
                        </div>
                        <List
                            className='w-2/3 p-4'
                            itemLayout="horizontal"
                            dataSource={proposalRanking}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
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
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Financial Champion: Maximizing Returns</div>
                            <div>This proposal leads in financial planning and management, demonstrating a robust model for profitability and investment returns.</div>
                        </div>
                        <List
                            className='w-2/3 p-4'
                            itemLayout="horizontal"
                            dataSource={proposalFinanicalRanking}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
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
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Risk-Minimizing Leader: Ensuring Stability</div>
                            <div>This proposal excels in risk assessment and mitigation strategies, ensuring a stable and resilient project trajectory with minimal uncertainties.</div>
                        </div>
                        <List
                            className='w-2/3 p-4'
                            itemLayout="horizontal"
                            dataSource={proposalRiskRanking}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
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

export default DashboardPage;