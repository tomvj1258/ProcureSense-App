"use client";

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { Login } from "@/utils/auth"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleLogin = async () => {
        try {
            const userData = await Login({ email: email, password: password })
            toast.success(`Welcome back, ${userData.firstName} ${userData.lastName} !`)
            router.push("/home")
        }
        catch (error) {
            toast.error(error.response.data.message)
            console.error(error.response)
        }
    }

    return (
        <div className="mx-auto grid w-[400px] gap-6">
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button className="w-full" onClick={() => { handleLogin() }}>
                    Login
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default LoginPage;