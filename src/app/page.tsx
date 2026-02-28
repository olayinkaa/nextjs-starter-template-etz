// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* <Image
                    src="/images/login-bg.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                /> */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                {/* <Card className="w-full max-w-md rounded-2xl bg-white/95 shadow-2xl backdrop-blur"> */}
                <Card className="w-full max-w-md rounded-xl border border-gray-200 bg-white shadow-xl">
                    <CardHeader className="space-y-3 text-center">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <span className="text-2xl font-bold text-red-600">
                                e<span className="text-blue-500">tranzact</span>
                            </span>
                        </div>

                        <div>
                            <h1 className="text-lg font-semibold">
                                👋 Welcome To Management Portal
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Enter your credentials to continue!
                            </p>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter email address" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                            />
                            <div className="text-right">
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <Button className="w-full bg-blue-700 hover:bg-blue-800">
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 py-2 text-center text-xs">
                Copyright © 2026 Privacy Policy
            </div>
        </div>
    );
}
