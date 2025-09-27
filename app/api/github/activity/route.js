export async function GET() {
  const USERNAME = "AnsariTech-25667";
  const token = process.env.GITHUB_TOKEN;
  const headers = { "User-Agent": "portfolio" };
  if (token) headers.Authorization = `token ${token}`;

  async function j(path) {
    const r = await fetch(`https://api.github.com${path}`, { headers, cache: "no-store" });
    if (!r.ok) throw new Error(`${r.status} ${path}`);
    return r.json();
  }
  async function raw(path) {
    const r = await fetch(`https://api.github.com${path}`, { headers, cache: "no-store" });
    if (!r.ok) throw new Error(`${r.status} ${path}`);
    return r;
  }
  async function starredCount() {
    const res = await raw(`/users/${USERNAME}/starred?per_page=1`);
    const link = res.headers.get("link") || "";
    const m = link.match(/[\?&]page=(\d+)>;\s*rel="last"/);
    if (m) return parseInt(m[1], 10);
    const arr = await res.json().catch(() => []);
    return Array.isArray(arr) ? arr.length : 0;
  }

  try {
    const [user, events] = await Promise.all([
      j(`/users/${USERNAME}`),
      j(`/users/${USERNAME}/events/public?per_page=100`)
    ]);

    const targetRepos = [
      "PromptPilot",
      "NovaDraft",
      "SyncSlate",
      "FinSight-AI-Finance-Platform",
      "employee-management-system-pro",
      "MernStack-Tour-Management",
      "ECommerce-Website",
      "PulseChat",
      "php-react-blog-maaz",
    ];

    // Fetch repo details in parallel but cap fanout
    const repoPromises = targetRepos.map((name) =>
      j(`/repos/${USERNAME}/${encodeURIComponent(name)}`).catch(() => null)
    );
    const repoDetails = (await Promise.all(repoPromises)).filter(Boolean);

    const recentCommits = events
      .filter((e) => e.type === "PushEvent")
      .reduce((a, e) => a + (e.payload?.size || 0), 0);

    const data = {
      public_repos: user?.public_repos ?? 0,
      starredCount: await starredCount(),
      recentCommits,
      latest: repoDetails.map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        html_url: r.html_url,
      })),
    };

    return Response.json({ ok: true, data }, { status: 200 });
  } catch (e) {
    return Response.json({ ok: false, error: "github_unavailable" }, { status: 200 });
  }
}