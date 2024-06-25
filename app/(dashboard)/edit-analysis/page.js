"use client"

import Step1Page from "@/components/pages/step1";
import Step2Page from "@/components/pages/step2";
import Step3Page from "@/components/pages/step3";
import Step4Page from "@/components/pages/step4";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, RotateCw, Save } from 'lucide-react';
import { useState } from "react";
import { toast } from "sonner";
import {
    ingestResquestForProposal,
    ingestProposal,
    fetchResquestForProposal,
    fetchProposal,
    editAnalyse,
    editProposal,
    editResquestForProposal
} from "@/utils/addAnalyse";
import { startAnalyse } from "@/utils/dashboard";
import { editAnalyseStore } from '@/stores/editAnalyse'

const EditAnalysisPage = () => {

    const { setAnalyseId, setAnalyseData, setRequestForProposalData, setProposalData, setRequestForProposalFileList } = editAnalyseStore();
    const { analyseId, requestForProposalFileList, proposalFileList } = editAnalyseStore();

    return (<span>Edit Analysis</span>)
}

export default EditAnalysisPage