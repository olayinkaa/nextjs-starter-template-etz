import ResetPasswordForm from "../(login)/_components/reset-password-form";

export default function ResetPassword() {
    return (
        <div className="lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-bold">Reset Password</h3>
                <p className="">Enter your new password to reset your password</p>
            </div>
            <ResetPasswordForm />
        </div>
    );
}
