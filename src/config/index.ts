const config = {
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
    appName: process.env.NEXT_PUBLIC_APP_NAME,
};

export default config;
