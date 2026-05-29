
export const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET, PROJECTID } = process.env;

const REQUIRED_ENV = ["AWS_REGION", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "S3_BUCKET", "PROJECTID"];

export function validateEnv() {
    const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
    if (missing.length > 0) {
        console.error(
            `[FATAL] Missing required environment variables: ${missing.join(", ")}`
        );
        process.exit(1);
    }
}