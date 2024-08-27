"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Register } from "@/utils/auth"
import { useState } from "react"
import { userStore } from "@/stores/user";
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { RotateCw } from 'lucide-react';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()
    const { setUserData } = userStore();

    const handleSignup = async () => {
        console.log('firstName', firstName, lastName, email, password, confirmPassword)
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            toast.error("Please fill all the fields")
        }
        else {
            if (password !== confirmPassword) {
                toast.error("Passwords do not match")
                return
            }
            try {
                setIsLoading(true)
                const userData = await Register({ email, password, firstName, lastName })
                setUserData(userData);
                toast.success(`Welcome, ${userData.firstName} ${userData.lastName} !`)
                setIsLoading(false)
                router.push("/home")
            }
            catch (error) {
                toast.error(error.response.data.message)
                setIsLoading(false)
                console.error(error)
            }
        }
    }
    return (
        <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[400px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-balance text-muted-foreground">
                        Enter your information to create an account
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input
                                    id="first-name"
                                    placeholder="Max"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input
                                    id="last-name"
                                    placeholder="Robinson"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button onClick={() => { handleSignup() }} className="w-full">
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
                                            Create an account
                                        </>
                                    )
                            }
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;