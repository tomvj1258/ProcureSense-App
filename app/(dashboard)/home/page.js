"use client";

import Link from "next/link"
import { Plus, SquareArrowOutUpRight, Pencil } from "lucide-react"
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"

const HomePage = () => {
    const [analysisList, setAnalysisList] = useState([{ id: 1, title: "Analysis 1" }, { id: 2, title: "Analysis 2" }]);
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
                <Button size="sm" className="flex flex-row gap-2">
                    <Plus size={12} absoluteStrokeWidth={1} />
                    <Link href="/add-analysis">Add Analysis</Link>
                </Button>
            </div>
            {
                analysisList.length ?
                    (
                        <div className="flex flex-1">
                            <div className="flex flex-col gap-4 w-full">
                                {analysisList.map((analysis, index) => (
                                    <Card key={index} className="p-1">
                                        <CardHeader className="flex flex-row justify-between items-center p-2">
                                            <CardTitle>Card Title</CardTitle>
                                            <div className="flex flex-row gap-3">
                                                <Button size="sm" className="flex flex-row gap-2" variant="outline">
                                                    <Pencil size={16} />
                                                    <span>Edit</span>
                                                </Button>
                                                <Button size="sm" className="flex flex-row gap-2">
                                                    <SquareArrowOutUpRight size={16} />
                                                    <span>View</span>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
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

export default HomePage;