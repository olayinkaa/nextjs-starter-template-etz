import Typography from "@/components/ui/typography";
import EmailForm from "./_components/email-form";

export default function ForgotPassword() {
    return (
        <div className="flex w-full max-w-lg flex-col justify-center">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col space-y-3">
                    <Typography weight="bold" variant="default" size="h3">
                        Forgot Password
                    </Typography>
                    <Typography weight="normal" variant="default" size="h4">
                        Enter your email address to reset your password
                    </Typography>
                </div>
            </div>
            <div className="mt-10">
                <EmailForm />
            </div>
        </div>
    );
}
