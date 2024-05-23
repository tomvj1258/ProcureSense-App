"use client"

import { createContext, useState, useContext, useEffect } from 'react';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
    const [analysisId, setAnalysisId] = useState('');
    const [analysisData, setAnalysisData] = useState({});
    const [analysisResult, setAnalysisResult] = useState({});
    const [proposals, setProposals] = useState([]);
    const [requestForProposal, setRequestForProposal] = useState({});
    const [proposalAnalysis, setProposalAnalysis] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedAnalysisId = localStorage.getItem('analysisId');
            if (storedAnalysisId) {
                setAnalysisId(storedAnalysisId);
            }
        }
    }, []);

    return (
        <AnalysisContext.Provider value={{
            analysisId, setAnalysisId, analysisData, setAnalysisData,
            analysisResult, setAnalysisResult, proposals, setProposals,
            requestForProposal, setRequestForProposal, proposalAnalysis, setProposalAnalysis
        }}>
            {children}
        </AnalysisContext.Provider>
    );
};

export const useAnalysisContext = () => useContext(AnalysisContext);
