"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { Input, Button, InputNumber, Select } from 'antd';
const { TextArea } = Input;
import { AxiosInstance } from '../../../services/axios.service.js';
import { useAnalysisContext } from '../../../contexts/analysis.context.js';

const analysisTagOptions = [
    {
        label: 'Tag 1',
        value: 'tag1',
    },
    {
        label: 'Tag 2',
        value: 'tag2',
    },
    {
        label: 'Tag 3',
        value: 'tag3',
    }
]

const Step1 = () => {
    const router = useRouter();
    const { setAnalysisId } = useAnalysisContext();

    const axios_instance = new AxiosInstance();

    const [analysisName, setAnalysisName] = React.useState('');
    const [analysisDescription, setAnalysisDescription] = React.useState('');
    const [analysisTags, setAnalysisTags] = React.useState([]);
    const [numberOfProposal, setNumberOfProposal] = React.useState(1);

    const handleNext = async () => {

        await axios_instance.initialize();

        const payload = {
            "analysisName": String(analysisName),
            "analysisDescription": analysisDescription,
            "analysisTags": analysisTags,
        }
        axios_instance.post('/api/init-analyse', payload)
            .then((response) => {
                setAnalysisId(response.analysisId);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('analysisId', response.analysisId);
                }
                router.push('/step-2');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className='text-2xl font-bold'>Configuration</div>
                <div className='text-sm font-medium'>Descripition</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className='flex flex-col gap-0.5'>
                    <span className='text-sm font-medium'>Analysis Name*</span>
                    <Input
                        value={analysisName}
                        placeholder="Enter analysis name"
                        onChange={(e) => setAnalysisName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-sm font-medium'>Analysis Descripition*</span>
                    <TextArea
                        placeholder="Enter analysis description"
                        value={analysisDescription}
                        onChange={(e) => setAnalysisDescription(e.target.value)}
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        required
                    />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-sm font-medium'>Analysis Tags*</span>
                    <Select
                        mode="tags"
                        value={analysisTags}
                        style={{ width: '100%' }}
                        placeholder="Select analysis tags"
                        options={analysisTagOptions}
                        maxTagCount='responsive'
                        onChange={(value) => setAnalysisTags(value)}
                    />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-sm font-medium'>Number of Proposal to Analysis* <span className='text-xs font-normal'>(Max 8)</span></span>
                    <InputNumber
                        className='w-full'
                        value={numberOfProposal}
                        min={1}
                        max={8}
                        defaultValue={1}
                        onChange={(value) => setNumberOfProposal(value)}
                        required
                    />
                </div>
            </div>
            <div className='flex flex-row justify-end'>
                <Button onClick={handleNext} type="primary">Next</Button>
            </div>
        </div>
    );
};
export default Step1;