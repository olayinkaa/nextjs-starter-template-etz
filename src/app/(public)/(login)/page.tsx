import config from "@/config";
import LoginForm from "./_components/login-form";
import { Typography } from "@/components/ui/typography";

export default function LoginPage() {
    return (
        <div className="flex w-full max-w-lg flex-col justify-center">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col space-y-0">
                    <Typography weight="bold">WELCOME TO {config.appName}</Typography>
                    <Typography variant="primary" weight="bold">
                        MIDDLEWARE SOLUTION
                    </Typography>
                </div>
                <div className="w-full">
                    <Typography as="span" size="h4">
                        Everything you will need at your service
                    </Typography>{" "}
                    &nbsp;
                    <Typography as="span" size="h4" weight="bold">
                        convenience,
                    </Typography>{" "}
                    <br />
                    <Typography as="span" size="h4" weight="bold">
                        speed and functionality.
                    </Typography>
                </div>
            </div>
            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
    );
}
