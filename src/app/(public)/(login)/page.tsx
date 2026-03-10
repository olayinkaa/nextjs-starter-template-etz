import config from "@/config";
// import Typography from "@/components/ui/typography";
import LoginForm from "./_components/login-form";

export default function LoginPage() {
    return (
        <div className="flex w-full max-w-lg flex-col justify-center">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col space-y-0">
                    <h4>WELCOME TO {config.appName}</h4>
                    <h4>MIDDLEWARE SOLUTION</h4>
                </div>
                <div className="w-full">
                    <span>Everything you will need at your service</span> &nbsp;
                    <span className="font-semibold">convenience,</span> <br />
                    <span className="font-semibold">speed and functionality.</span>
                </div>
            </div>
            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
    );
}
