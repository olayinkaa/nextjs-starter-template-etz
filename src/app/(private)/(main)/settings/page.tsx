import { Typography } from "@/components/ui/typography";

export default function SettingsPage() {
    return (
        <div className="p-8">
            <Typography size="h3" weight="medium" className="mb-2">
                Business Profile
            </Typography>
            <Typography as="p" size="pmd" variant="slate">
                Update your business information for NRS e-invoicing compliance
            </Typography>
            {/* Info Box */}
            <div className="bg-primary-200 mt-3 rounded-xl p-5">
                <Typography as="h1" size="pmd" weight={"medium"} variant="primary">
                    Important Information
                </Typography>
                <ul className="text-pmd text-primary mt-3 space-y-1">
                    <li>• Changes to these details may affect invoice signing</li>
                    <li>• Ensure all information matches your FIRS registration</li>
                    <li>• Contact support if you need help locating these values</li>
                </ul>
            </div>

            {/* Form */}
            <div className="mt-3 space-y-6">
                {/* Business ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Business ID
                    </label>
                    <input
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        defaultValue="BUS_123456"
                    />
                </div>

                {/* Service ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Service ID
                    </label>
                    <input
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        defaultValue="SVC-789012"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        defaultValue="080-687-7896"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Business Address
                    </label>
                    <input
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        defaultValue="4 lake ademola road lekki phase 1"
                    />
                </div>

                {/* Grid Fields */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <input
                        placeholder="Postal Code"
                        className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        defaultValue="1243334"
                    />

                    <select className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none">
                        <option>Eiti-Osa</option>
                    </select>

                    <select className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none">
                        <option>Lagos</option>
                    </select>

                    <select className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-500 focus:outline-none">
                        <option>Nigeria</option>
                    </select>
                </div>

                {/* Button */}
                <div className="pt-6">
                    <button className="w-full rounded-xl bg-linear-to-r from-blue-600 to-blue-500 py-3 font-medium text-white shadow-md transition hover:opacity-90">
                        Save Change
                    </button>
                </div>
            </div>
        </div>
    );
}
