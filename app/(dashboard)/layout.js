"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import { GeistSans } from "geist/font/sans";
import { AxiosInstance } from '@/services/axios.service';
import { useAnalysisContext } from '@/contexts/analysis.context.js';

const axios_instance = new AxiosInstance();

const { Content, Sider } = Layout;

const MenuItems = [
    {
        key: '1',
        icon: <span class="material-symbols-rounded mr-2">dashboard</span>,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        key: '2',
        icon: <span class="material-symbols-rounded mr-2">receipt_long</span>,
        label: <span className='ml-4'>Proposals</span>,
        label: 'Proposals',
        path: '/proposal/0'
    },
    {
        key: '3',
        label: <span className='ml-4'>Assessment</span>,
        disabled: true,
    },
    {
        key: '4',
        icon: <span class="material-symbols-rounded mr-2">assignment</span>,
        label: 'General',
        path: '/general'
    },
    {
        key: '5',
        icon: <span class="material-symbols-rounded mr-2">payments</span>,
        label: 'Finanical',
        path: '/financial'
    },
    {
        key: '6',
        icon: <span class="material-symbols-rounded mr-2">running_with_errors</span>,
        label: 'Risk',
        path: '/risk'
    },
];

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const { analysisId, setAnalysisData, setAnalysisResult, setProposals, setRequestForProposal, setProposalAnalysis } = useAnalysisContext();
    const [selectedMenu, setSelectedMenu] = useState('1');
    const effectRan = useRef(false);

    const handleMenuBarClick = ({ item, key, keyPath, e }) => {
        const selectedItem = MenuItems.find(item => item.key === key);
        setSelectedMenu(key);
        router.push(selectedItem.path);
    };

    useEffect(() => {
        const fetch_analysis_result = async () => {
            await axios_instance.initialize();
            console.log(analysisId)
            axios_instance.post(`/api/get-analysis?analysisId=${analysisId}`)
                .then(response => {
                    setAnalysisData(response.data)
                    setAnalysisResult(response.data.analysisResult)
                    setProposals(response.data.proposals)
                    setRequestForProposal(response.data.requestForProposal)
                    setProposalAnalysis(response.data.analysisResult.proposalAnalysis)
                })
                .catch(error => {
                    console.error(error);
                });
        }
        if (effectRan.current) return;
        else {
            if (analysisId) {
                fetch_analysis_result();
                effectRan.current = true;
            }
        }
    }, [analysisId, setAnalysisData, setAnalysisResult, setProposalAnalysis, setProposals, setRequestForProposal]);

    return (
        <Layout hasSider className={GeistSans.className}>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: '#fff',
                    borderRight: '1px solid #f0f0f0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                }}
            >
                <div className="flex flex-row justify-center items-center py-3 -ml-5 text-[16px] select-none">
                    <span className="material-symbols-sharp text-4xl text-[#1677ff]">
                        keyboard_double_arrow_right
                    </span>
                    <span className='text-[#1677ff] font-bold'>Procure Sense</span>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={[selectedMenu]} items={MenuItems} onClick={handleMenuBarClick} selectable />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Content style={{ minHeight: '100vh', overflow: 'initial' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;