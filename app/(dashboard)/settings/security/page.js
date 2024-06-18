"use client";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SecurityPage = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                        Change your account password.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form className="grid w-full items-start gap-4 overflow-auto pt-0">
                        <div className="grid gap-2">
                            <Label htmlFor="company_name">Current Password</Label>
                            <Input id="company_name" placeholder="Enter analyse name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="release_date">New Password</Label>
                            <Input id="company_name" placeholder="Enter analyse name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="company_address">Confirm New Password</Label>
                            <Input id="company_address" placeholder="Enter analyse description" />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row justify-end">
                    <Button>Change Password</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SecurityPage;