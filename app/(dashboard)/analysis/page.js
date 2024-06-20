"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useEffect, useState, useRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Loader from '@/components/pages/loader';

import { dashboardStore } from "@/stores/dashboard.js";
import { fetchAnalyse } from "@/utils/dashboard";

const AnalysisPage = () => {

    const { analyseList, selectedAnalyseId, setSelectedAnalyseId } = dashboardStore();
    const useEffectRan = useRef(false);

    const [selectedAnalyseData, setSelectedAnalyseData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyseSelection = (id) => {
        setSelectedAnalyseId(id)
    }

    const fetchSelectedAnalyseData = async () => {
        try {
            setIsLoading(true);
            const analyseData = await fetchAnalyse(selectedAnalyseId)
            setIsLoading(false);
        }
        catch (error) {
            console.error(error)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const fetchAnalyseData = async () => {
            await fetchSelectedAnalyseData();
        }
        if (!useEffectRan.current) {
            fetchAnalyseData()
            useEffectRan.current = true;
        }
    }, [])

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Analysis</h1>
                <Select onValueChange={(id) => handleAnalyseSelection(id)} defaultValue={analyseList[0].id}>
                    <SelectTrigger className="w-[380px] bg-white">
                        <SelectValue placeholder="Select analyse" />
                    </SelectTrigger>
                    <SelectContent className="w-[380px] bg-white">
                        {
                            analyseList.map((analyse, idx) => (
                                <SelectItem key={idx} value={analyse.id}>
                                    {analyse.name}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            {isLoading ? <Loader /> :
                selectedAnalyseId ?
                    (
                        <div className="flex flex-1">
                            <div className="flex flex-col gap-4 w-full">
                                <Tabs defaultValue="general" className="w-full">
                                    <TabsList>
                                        <TabsTrigger value="general">General</TabsTrigger>
                                        <TabsTrigger value="finanical">Finanical</TabsTrigger>
                                        <TabsTrigger value="risk">Risk</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="general">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>General</CardTitle>
                                                <CardDescription>
                                                    Manage your products and view their sales performance.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>General content</p>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="finanical">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Finanical</CardTitle>
                                                <CardDescription>
                                                    Manage your products and view their sales performance.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Finanical content</p>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="risk">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Risk</CardTitle>
                                                <CardDescription>
                                                    Manage your products and view their sales performance.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Risk content</p>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="flex flex-1 items-center justify-center">
                            <div className="flex flex-col items-center gap-1 text-center">
                                <h3 className="text-2xl font-bold tracking-tight">
                                    You have no analysis
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    You can start adding analysis to your dashboard to get insights on your proposals.
                                </p>
                                <Button size="sm" className="flex flex-row gap-2">
                                    <Plus size={12} absoluteStrokeWidth={1} />
                                    <Link href="/add-analysis">Add Analysis</Link>
                                </Button>
                            </div >
                        </div >
                    )
            }
        </>
    )
}

export default AnalysisPage;