import { NextResponse } from 'next/server';
import { githubClient, GET_REPOSITORIES, getCuratedRepoData, CURATED_REPOS } from '@/lib/github';

export async function GET(request) {
  try {
    // Check if GitHub token is available
    if (!process.env.GITHUB_TOKEN) {
      // Return static fallback data when token is missing
      const fallbackRepos = CURATED_REPOS.map((repo, index) => ({
        name: repo.name,
        description: repo.description,
        techs: repo.techs,
        url: `https://github.com/AnsariTech-25667/${repo.name}`,
        homepageUrl: null,
        primaryLanguage: { name: repo.techs[0], color: '#3178c6' },
        stargazerCount: Math.floor(Math.random() * 20),
        forkCount: Math.floor(Math.random() * 5),
        updatedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        isPrivate: false,
      }));

      return NextResponse.json({
        repos: fallbackRepos,
        source: 'fallback',
        message: 'Add GITHUB_TOKEN to .env.local for live data',
      });
    }

    const { searchParams } = new URL(request.url);
    const login = searchParams.get('login') || process.env.GITHUB_LOGIN || 'AnsariTech-25667';
    
    const data = await githubClient.request(GET_REPOSITORIES, {
      login,
      first: 50, // Get more repos to filter from
    });

    // Combine pinned and recent repos, prioritizing pinned
    const pinnedRepos = data.user.pinnedItems.nodes || [];
    const allRepos = data.user.repositories.nodes || [];
    
    // Create a combined list, removing duplicates
    const repoMap = new Map();
    
    // Add pinned repos first
    pinnedRepos.forEach(repo => {
      if (!repo.isPrivate) {
        repoMap.set(repo.name, repo);
      }
    });
    
    // Add recent repos
    allRepos.forEach(repo => {
      if (!repo.isPrivate && !repoMap.has(repo.name)) {
        repoMap.set(repo.name, repo);
      }
    });

    // Get curated repos from the combined list
    const repos = Array.from(repoMap.values());
    const curatedRepos = getCuratedRepoData(repos);

    return NextResponse.json({
      repos: curatedRepos,
      source: 'live',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
      },
    });
  } catch (error) {
    console.error('GitHub repos API error:', error);
    
    // Return fallback data on error
    const fallbackRepos = CURATED_REPOS.map(repo => ({
      name: repo.name,
      description: repo.description,
      techs: repo.techs,
      url: `https://github.com/AnsariTech-25667/${repo.name}`,
      homepageUrl: null,
      primaryLanguage: { name: repo.techs[0], color: '#3178c6' },
      stargazerCount: 0,
      forkCount: 0,
      updatedAt: new Date().toISOString(),
      isPrivate: false,
    }));

    return NextResponse.json({
      repos: fallbackRepos,
      source: 'fallback',
      error: 'Failed to fetch live data',
    });
  }
}