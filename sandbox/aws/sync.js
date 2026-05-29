import "dotenv/config";
import { bootstrap } from "./src/bootstrap.js";
import { startWatcher } from "./src/watcher.js";
import { buildPrefix, log } from "./src/utils.js";
import { validateEnv } from "./src/config/env.config.js";
import s3Client from "./src/config/s3.config.js"
import { S3_BUCKET, PROJECTID } from "./src/config/env.config.js"

const WORKDIR = process.env.WORKDIR || "/workspace";


async function main() {

    validateEnv();

    const projectPrefix = buildPrefix(PROJECTID);

    log(`Starting sync — project: "${PROJECTID}", bucket: "${S3_BUCKET}", workdir: "${WORKDIR}"`);

    // ── Step 1: Initial two-way sync ──────────────────────────────────────────
    await bootstrap(s3Client, S3_BUCKET, projectPrefix, WORKDIR);

    // ── Step 2: Watch for changes and sync continuously ───────────────────────
    startWatcher(s3Client, S3_BUCKET, projectPrefix, WORKDIR);
}

// ── Graceful shutdown ────────────────────────────────────────────────────────

process.on("SIGTERM", () => {
    log("Received SIGTERM — shutting down gracefully.");
    process.exit(0);
});

process.on("SIGINT", () => {
    log("Received SIGINT — shutting down.");
    process.exit(0);
});

process.on("uncaughtException", (err) => {
    log(`Uncaught exception: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
});

main().catch((err) => {
    log(`Fatal error in main: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
});