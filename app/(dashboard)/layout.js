"use client";

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { Home, LineChart, Menu, Plus, LogOut, Settings, ChevronsRight, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Loader from '@/components/pages/loader';
import { AuthWrapper, Logout } from "@/utils/auth"
import { dashboardStore } from "@/stores/dashboard.js";
import { fetchAllAnalyse } from "@/utils/dashboard";
import { useEffect, useRef, useState } from "react";

const DashboardLayout = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const useEffectRan = useRef(false);

    const { setAnalyseList, setTotalAnalyse, setSelectedAnalyseId } = dashboardStore();
    const [isLoading, setIsLoading] = useState(true);

    const handleLogout = async () => {
        try {
            await Logout();
            return router.push("/login")
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const allAnalyse = await fetchAllAnalyse();
            setAnalyseList(allAnalyse.data.map(analyse => ( analyse.status === 'completed' )));
            setSelectedAnalyseId(allAnalyse.data[1].id)
            setTotalAnalyse(allAnalyse.total);
            setIsLoading(false);
        }

        if (!useEffectRan.current) {
            useEffectRan.current = true;
            fetchData()
        }

    }, [])

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr]">
            <div className="hidden border-r md:block">
                <div className="sticky top-0 flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/home" className="flex items-center gap-2 font-semibold">
                            <ChevronsRight absoluteStrokeWidth={3} size={16} className="h-6 w-6 text-primary" />
                            <span className="text-primary">Procure Sense</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link href="/home" className={"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary " + (pathname === '/home' ? "text-primary" : "")}>
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                            <Link href="/analysis" className={"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary " + (pathname === '/analysis' ? "text-primary" : "")}>
                                <LineChart className="h-4 w-4" />
                                Analysis
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-2">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle className="text-sm">Add Analysis</CardTitle>
                                <CardDescription className="text-xs">
                                    Add Analysis to your dashboard to get insights on your proposals.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="flex flex-row gap-2 w-full">
                                    <Plus size={12} absoluteStrokeWidth={1} />
                                    <Link href="/add-analysis">Add Analysis</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="sticky top-0 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 bg-white z-10">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link href="/home" className="flex items-center gap-2 text-lg font-semibold mb-3">
                                    <ChevronsRight absoluteStrokeWidth={3} size={16} className="h-6 w-6" />
                                    <span className="">Procure Sense</span>
                                </Link>
                                <Link href="/home" className={"mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground " + (pathname === '/home' ? "text-primary" : "")}>
                                    <Home className="h-4 w-4" />
                                    Home
                                </Link>
                                <Link href="/analysis" className={"mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground " + (pathname === '/analysis' ? "text-primary" : "")}>
                                    <LineChart className="h-4 w-4" />
                                    Analysis
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-sm">Add Analysis</CardTitle>
                                        <CardDescription className="text-xs">
                                            Add Analysis to your dashboard to get insights on your proposals.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <Button size="sm" className="flex flex-row gap-2 w-full">
                                            <Plus size={12} absoluteStrokeWidth={1} />
                                            <Link href="/add-analysis">Add Analysis</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Toby&backgroundColor=ecad80" />
                                <AvatarFallback>SX</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <div className="flex flex-row gap-3 hover:text-primary items-center">
                                    <Settings size={14} />
                                    <span>Settings</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="flex flex-row gap-3 hover:text-primary items-center" onClick={() => { handleLogout() }}>
                                    <LogOut size={14} />
                                    <span >Logout</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 min-h-[80%] bg-muted/40">
                    {isLoading ? <Loader /> : children}
                </main>
            </div>
        </div>
    )
}

export default AuthWrapper(DashboardLayout);