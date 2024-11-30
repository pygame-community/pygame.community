/**
 * @file server.js
 * @description Links static assets for a Next.js standalone server and starts it.
 */

const fs = require("fs").promises;
const path = require("path");

async function createLink(source, dest, type = "junction") {
  const sourcePath = path.resolve(__dirname, source);
  const destPath = path.resolve(__dirname, dest);

  try {
    try {
      const existingLink = await fs.readlink(destPath);
      if (existingLink === sourcePath) return;
    } catch {
      // Path doesn't exist or isn't a symlink, continue
    }

    await fs.rm(destPath, { recursive: true, force: true });
    await fs.mkdir(path.dirname(destPath), { recursive: true });

    await fs.symlink(sourcePath, destPath, type);
    console.log(`Created symlink: ${destPath}`);
  } catch {
    try {
      const sourceStats = await fs.stat(sourcePath);
      try {
        const destStats = await fs.stat(destPath);
        if (destStats.mtime >= sourceStats.mtime) return;
      } catch {
        // Destination doesn't exist, continue with copy
      }

      await fs.cp(sourcePath, destPath, { recursive: true, force: true });
      console.log(`Copied (symlink failed): ${destPath}`);
    } catch {
      throw new Error(
        `Failed to copy ${sourcePath} to ${destPath}: ${error.message}`,
      );
    }
  }
}

async function setupAssets() {
  await Promise.all([
    createLink(
      path.join(".next", "static"),
      path.join(".next", "standalone", ".next", "static"),
    ),
    createLink("public", path.join(".next", "standalone", "public")),
  ]);
}

setupAssets()
  .then(() => {
    require("./.next/standalone/server.js"); // run the actual standalone server
  })
  .catch((error) => {
    console.error("Failed to setup assets:", error);
    process.exit(1);
  });
