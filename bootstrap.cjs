(async () => {
  try {
    await import("./index.js");
  } catch (err) {
    console.error("Bootstrap failed:", err);
    process.exit(1);
  }
})();
