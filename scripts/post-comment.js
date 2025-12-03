const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");   // IMPORTANT

console.log("📄 Loading AI suggestions...");

const filePath = path.join(process.cwd(), "data", "pr-ai-suggestions.json");

if (!fs.existsSync(filePath)) {
  console.error("❌ File not found:", filePath);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(filePath));
const pr = data[0];
const s = pr.suggestions;

// Build PR comment
const body = `
🧠 **AI TestGen Suggestions for PR #${pr.pr_number}: ${pr.title}**

### 🔥 Smoke Tests
${s.smoke.map(t => `- ${t}`).join("\n")}

### ❌ Negative Tests
${s.negative.map(t => `- ${t}`).join("\n")}

### ⚠️ Edge Case Tests
${s.edge.map(t => `- ${t}`).join("\n")}
`;

console.log("💬 Posting PR comment...");

const octokit = new Octokit({ auth: process.env.PAT_TOKEN });

octokit.issues.createComment({
  owner: process.env.REPO_OWNER,
  repo: process.env.REPO_NAME,
  issue_number: pr.pr_number,
  body
})
.then(() => {
  console.log("✅ Comment posted successfully!");
})
.catch(err => {
  console.error("❌ Failed to post comment:", err);
  process.exit(1);
});
