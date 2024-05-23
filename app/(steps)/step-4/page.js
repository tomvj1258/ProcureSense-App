"use client";

import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { Button, Progress, message } from 'antd';
import { AxiosInstance } from '@/services/axios.service.js';
import { useAnalysisContext } from '@/contexts/analysis.context.js';

const axios_instance = new AxiosInstance();

const Step4 = () => {
    const router = useRouter();
    let progressPrecentage = 0;
    const { analysisId } = useAnalysisContext();
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isTiming, setIsTiming] = useState(false);
    const [analyseComplete, setAnalyseComplete] = useState(false);
    const [analyseLoading, setAnalyseLoading] = useState(false);

    const startTimer = () => {
        setTimeElapsed(0);
        setIsTiming(true);
    };

    useEffect(() => {
        if (!isTiming) return;

        const intervalId = setInterval(() => {
            setTimeElapsed((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isTiming]);

    useEffect(() => {
        if (timeElapsed > 0) {
            const timeoutId = setTimeout(() => {
                setIsTiming(false);
            }, 6000);
            return () => clearTimeout(timeoutId);
        }
    }, [timeElapsed]);

    const getMessage = () => {
        if (timeElapsed === 0) {
            progressPrecentage = 0;
            return 'Click Start Analyse to begin..';
        }
        else if (timeElapsed < 1) {
            progressPrecentage = 0;
            return 'Fetching request for proposal data...';
        }
        else if (timeElapsed < 3) {
            progressPrecentage = 30;
            return 'Fetching proposal data...';
        }
        else if (timeElapsed < 5) {
            progressPrecentage = 60;
            return 'Analysing data...';
        }
        else if (analyseComplete === true) {
            progressPrecentage = 100;
            return 'Done ! Check the results in the dashboard';
        }
        else {
            progressPrecentage = 80;
            return 'Analyzing data...';
        }
    };

    const handleGoToDashboard = () => {
        router.push('/dashboard');
    }

    const handleStartAnalyse = async () => {
        setAnalyseLoading(true);
        await axios_instance.initialize();
        startTimer();
        axios_instance.post(`/api/start-analyse?analysisId=${analysisId}`)
            .then((response) => {
                setAnalyseComplete(true);
                setAnalyseLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setAnalyseComplete(true);
                setAnalyseLoading(false);
                message.error(`Unable to start analysis. Please try again.`);
            });
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className='text-2xl font-bold'>Analyze</div>
                <div className='text-sm font-medium'>Descripition</div>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <div className='flex flex-col border-2 border-dashed bg-slate-50 w-4/5 h-24 p-3 rounded items-center justify-center'>
                    <span className='text-lg font-semibold'>{getMessage()}</span>
                </div>
                <Progress percent={progressPrecentage} status="active" />
            </div>
            <div className='flex flex-row justify-end'>
                {
                    analyseComplete === false ?
                        <Button type="primary" onClick={handleStartAnalyse} loading={analyseLoading} iconPosition={'end'}>Start Analyse</Button> :
                        <Button type="primary" onClick={handleGoToDashboard}>Go to Dashboard</Button>
                }

            </div>
        </div>
    );
};
export default Step4;