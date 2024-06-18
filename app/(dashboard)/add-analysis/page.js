"use client";

import Step1Page from "@/components/pages/step1";
import Step2Page from "@/components/pages/step2";
import Step3Page from "@/components/pages/step3";
import Step4Page from "@/components/pages/step4";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from "react";
import { addAnalyseStore } from "@/stores/addAnalyse";
import { toast } from "sonner"

const AddAnalysisPage = () => {

    const [currentStep, setCurrentStep] = useState(2);
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

    const handleStep1Next = () => {

        if (requestForProposalFileList.length !== 1) {
            toast.error('Please upload a request for proposal file !');
            return;
        }

        console.log(requestForProposalFileList);

        //     setIsLoading(true);

        //     const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, 'multipart/form-data');

        //     const formData = new FormData();

        //     requestForProposalFileList.forEach((file) => {
        //         formData.append('file', file);
        //     });

        //     axios_instance.post('/ingest/rp', formData)
        //         .then((response) => {
        //             setRequestForProposalData(response.data);
        //             setIsLoading(false);
        //             handleNext();
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             setIsLoading(false);
        //         });
    }

    const handleStep2Previous = () => {
        handlePrevious();
    }

    const handleStep2Next = () => {
        handleNext();
    }

    const handleStep3Next = () => {
        console.log(proposalFileList);
        // handleNext();
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
                            <Button className="flex flex-row gap-2" onClick={() => { handleStep1Next() }}>
                                <span>Next</span>
                                <ChevronRight size={20} />
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
