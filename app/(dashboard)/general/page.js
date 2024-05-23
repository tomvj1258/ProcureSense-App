"use client";
import { Card, Statistic, Avatar, List } from 'antd';
import { GeistSans } from "geist/font/sans";
import { useAnalysisContext } from '@/contexts/analysis.context.js';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const best_proposal = [
    {
        title: 'Ant Design Title 1',
    }
]

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

const GeneralPage = () => {
    const { analysisResult, proposalAnalysis, proposals } = useAnalysisContext();
    const ranking = analysisResult.ranking || []
    const overallSelectionReason = analysisResult.reasonForOverallSelection || []
    let proposalRanking = transformProposalData(ranking, proposals, proposalAnalysis)
    let bestProposal = proposalRanking.length > 0 ? [proposalRanking[0]] : []

    return (
        <main className={GeistSans.className}>
            <div className="flex flex-col gap-6 m-8">
                <div className="text-2xl font-bold">General Assessment</div>
                <div className="flex flex-col gap-8 bg-white p-8 border rounded">
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
                                        avatar={<Avatar src={`https://api.dicebear.com/8.x/icons/svg?seed=Maggie&backgroundColor=ffcc80`} />}
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

export default GeneralPage;