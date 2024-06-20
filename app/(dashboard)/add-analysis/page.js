"use client";

import Step1Page from "@/components/pages/step1";
import Step2Page from "@/components/pages/step2";
import Step3Page from "@/components/pages/step3";
import Step4Page from "@/components/pages/step4";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, RotateCw } from 'lucide-react';
import { useState } from "react";
import { addAnalyseStore } from "@/stores/addAnalyse";
import { toast } from "sonner";
import {
    ingestResquestForProposal,
    ingestProposal,
    fetchResquestForProposal,
    fetchProposal
} from "@/utils/addAnalyse";

const AddAnalysisPage = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { setAnalyseId, setAnalyseData, setRequestForProposalData, setProposalData } = addAnalyseStore();
    const { analyseId, analyseData, requestForProposalData, proposalData, requestForProposalFileList, proposalFileList } = addAnalyseStore();

    const handleNext = () => {
        if (currentStep === 4) return;

        setCurrentStep(currentStep + 1);
    }
    const handlePrevious = () => {
        if (currentStep === 1) return;

        setCurrentStep(currentStep - 1);
    }

    const fetchResquestForProposalData = async (id) => {
        try {
            const response = await fetchResquestForProposal(id);
            setRequestForProposalData(response.data.rp);
            setAnalyseData(response.data.analyse);
            handleNext();
        }
        catch (error) {
            console.error(error);
            toast.error('Error while fetching request for proposal data !');
        }
    }

    const handleStep1Next = async () => {

        setIsLoading(true);
        let payload = new FormData();

        if (requestForProposalFileList.length !== 1) {
            toast.error('Please upload a request for proposal file !');
            setIsLoading(false);
            return;
        }

        requestForProposalFileList.forEach((file) => {
            payload.append('file', file);
        });

        try {
            // const response = await ingestResquestForProposal(payload)
            // setAnalyseId(response.data.id);
            setAnalyseId('e34d0c9c-2367-41cb-96bd-9086c1e6c50f');
            await fetchResquestForProposalData('e34d0c9c-2367-41cb-96bd-9086c1e6c50f');
            setIsLoading(false);
        }
        catch (error) {
            console.error(error);
            toast.error('Error while uploading request for proposal ! Please try again.');
            setIsLoading(false);
        }
    }

    const handleStep2Previous = () => {
        handlePrevious();
    }

    const handleStep2Next = () => {
        handleNext();
    }

    const handleStep3Next = () => {
        handleNext();
    }

    const handleStep4Next = () => {
    }

    return (
        <div className="flex flex-col gap-3 w-full item-center justify-center">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold md:text-2xl">Add Analysis</h1>
                <span className="text-sm text-gray-500">Add a new analysis</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                {
                    currentStep === 1 &&
                    <Card className="w-[80%]">
                        <Step1Page />
                        <CardFooter className="flex flex-row w-full justify-end mt-4">
                            <Button className="flex flex-row gap-2" onClick={() => { handleStep1Next() }} disabled={isLoading}>
                                {
                                    isLoading ?
                                        (
                                            <>
                                                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                                                Please wait ...
                                            </>
                                        ) :
                                        (
                                            <>
                                                <span>Next</span>
                                                <ChevronRight size={20} />
                                            </>
                                        )
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                }
                {
                    currentStep === 2 &&
                    <Card className="w-[80%]">
                        <Step2Page />
                        <CardFooter className="flex flex-row w-full justify-between mt-4">
                            <Button variant="outline" className="flex flex-row gap-2" onClick={() => { handleStep2Previous() }}>
                                <ChevronLeft size={20} />
                                <span>Previous</span>
                            </Button>
                            <Button className="flex flex-row gap-2" onClick={() => { handleStep2Next() }}>
                                <span>Submit & Next</span>
                                <ChevronRight size={20} />
                            </Button>
                        </CardFooter>
                    </Card>
                }
                {
                    currentStep === 3 &&
                    <Card className="w-[80%]">
                        <Step3Page />
                        <CardFooter className="flex flex-row w-full justify-between mt-4">
                            <Button variant="outline" className="flex flex-row gap-2">
                                <ChevronLeft size={20} />
                                <span>Previous</span>
                            </Button>
                            <Button className="flex flex-row gap-2" onClick={() => { handleStep3Next() }}>
                                <span>Next</span>
                                <ChevronRight size={20} />
                            </Button>
                        </CardFooter>
                    </Card>
                }
                {
                    currentStep === 4 &&
                    <Card className="w-[80%]">
                        <Step4Page />
                        <CardFooter className="flex flex-row w-full justify-between mt-4">
                            <Button variant="outline" className="flex flex-row gap-2">
                                <ChevronLeft size={20} />
                                <span>Previous</span>
                            </Button>
                            <Button className="flex flex-row gap-2" onClick={() => { handleStep4Next() }}>
                                <span>Submit & Next</span>
                                <ChevronRight size={20} />
                            </Button>
                        </CardFooter>
                    </Card>
                }
            </div>
        </div>
    );
}


export default AddAnalysisPage;
