"use client";

import Link from "next/link"
import { Plus, SquareArrowOutUpRight, Pencil, Trash2 } from "lucide-react"
import { useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"

import { dashboardStore } from "@/stores/dashboard.js";

const HomePage = () => {

    const pageLimit = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const { analyseList, totalAnalyse } = dashboardStore();

    const [paginatedAnalyseList, setPaginatedAnalyseList] = useState([]);
    const [totalPages, setTotalPages] = useState(Math.ceil(totalAnalyse / pageLimit));

    useEffect(() => {
        const paginateAnalyse = () => {
            const startIndex = (currentPage - 1) * pageLimit;
            const endIndex = startIndex + pageLimit;
            setPaginatedAnalyseList(analyseList.slice(startIndex, endIndex));
        }
        paginateAnalyse()
    }, [currentPage, analyseList]);

    const handlePaginatePrev = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }

    const handlePaginateNext = () => {
        if (currentPage < Math.ceil(totalAnalyse / pageLimit))
            setCurrentPage(currentPage + 1);
    }

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
                paginatedAnalyseList.length ?
                    (
                        <div className="flex flex-1">
                            <div className="flex flex-col gap-4 w-full">
                                {paginatedAnalyseList.map((analyse, index) => (
                                    <Card key={index} className="p-1">
                                        <CardHeader className="flex flex-row justify-between items-center p-2">
                                            <CardTitle className="flex flex-col gap-2">
                                                <span>{analyse.name}</span>
                                                <span className="text-xs text-muted-foreground font-normal w-5/6">{analyse.description}</span>
                                            </CardTitle>
                                            <div className="flex flex-row gap-3">
                                                <Button size="sm" className="flex flex-row gap-2" variant="outline" disabled>
                                                    <Pencil size={16} />
                                                    <span>Edit</span>
                                                </Button>
                                                <Button size="sm" variant="destructive" className="flex flex-row gap-2">
                                                    <Trash2 size={16} />
                                                    <span>Delete</span>
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
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => handlePaginatePrev()} disabled={currentPage > 1} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={() => handlePaginateNext()} disabled={currentPage < Math.ceil(totalAnalyse / pageLimit)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <div className="flex flex-row justify-center gap-6 text-sm font-medium">
                <div>Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span></div>
                <div>Total Pages: <span className="font-bold">{totalPages}</span></div>
            </div>
        </>
    )
}

export default HomePage;