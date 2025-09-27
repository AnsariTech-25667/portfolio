import { NextResponse } from 'next/server';
import { githubClient, GET_CONTRIBUTIONS, getDateRange, formatContributionData } from '@/lib/github';

export async function GET(request) {
  try {
    // Check if GitHub token is available
    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const login = searchParams.get('login') || process.env.GITHUB_LOGIN || 'AnsariTech-25667';
    const days = parseInt(searchParams.get('days') || '365');
    
    const { from, to } = getDateRange(days);
    
    const data = await githubClient.request(GET_CONTRIBUTIONS, {
      login,
      from,
      to,
    });

    const contributionCalendar = data.user.contributionsCollection.contributionCalendar;
    const formattedData = formatContributionData(contributionCalendar);
    
    const response = {
      total: formattedData.total,
      data: formattedData.data,
      byType: {
        commits: data.user.contributionsCollection.totalCommitContributions,
        prs: data.user.contributionsCollection.totalPullRequestContributions,
        issues: data.user.contributionsCollection.totalIssueContributions,
        reviews: data.user.contributionsCollection.totalPullRequestReviewContributions,
      },
    };

    // Set cache headers (5 minutes)
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('GitHub contributions API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}