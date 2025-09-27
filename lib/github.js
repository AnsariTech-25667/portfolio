import { GraphQLClient } from 'graphql-request';

// GitHub GraphQL API endpoint
const GITHUB_API_ENDPOINT = 'https://api.github.com/graphql';

// Create GraphQL client with authentication
export const githubClient = new GraphQLClient(GITHUB_API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

// GraphQL queries
export const GET_CONTRIBUTIONS = `
  query GetContributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;

export const GET_REPOSITORIES = `
  query GetRepositories($login: String!, $first: Int!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            homepageUrl
            description
            primaryLanguage {
              name
              color
            }
            stargazerCount
            forkCount
            updatedAt
            isPrivate
          }
        }
      }
      repositories(first: $first, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
        nodes {
          name
          url
          homepageUrl
          description
          primaryLanguage {
            name
            color
          }
          stargazerCount
          forkCount
          updatedAt
          isPrivate
        }
      }
    }
  }
`;

// Utility functions
export function getDateRange(days = 365) {
  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - days);
  
  return {
    from: from.toISOString(),
    to: to.toISOString(),
  };
}

export function formatContributionData(contributionCalendar) {
  const { weeks, totalContributions } = contributionCalendar;
  
  // Flatten weeks into days for react-activity-calendar
  const data = weeks.flatMap(week => 
    week.contributionDays.map(day => ({
      date: day.date,
      count: day.contributionCount,
      level: getContributionLevel(day.contributionCount),
    }))
  );
  
  return {
    data,
    total: totalContributions,
  };
}

function getContributionLevel(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Curated repositories list with technical descriptions
export const CURATED_REPOS = [
  {
    name: "PromptPilot",
    description: "AI-powered prompt engineering platform with React frontend and Node.js backend",
    techs: ["React", "Node.js", "AI/ML"],
  },
  {
    name: "NovaDraft",
    description: "Modern document collaboration tool with real-time editing and version control",
    techs: ["React", "WebSocket", "MongoDB"],
  },
  {
    name: "SyncSlate",
    description: "Team productivity dashboard with task management and analytics",
    techs: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "FinSight-AI-Finance-Platform",
    description: "AI-driven financial analytics platform with predictive modeling",
    techs: ["Python", "TensorFlow", "React"],
  },
  {
    name: "employee-management-system-pro",
    description: "Enterprise HR management system with role-based access control",
    techs: ["Java", "Spring Boot", "MySQL"],
  },
  {
    name: "MernStack-Tour-Management",
    description: "Full-stack travel booking platform with payment integration",
    techs: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "ECommerce-Website",
    description: "Modern e-commerce platform with cart management and order processing",
    techs: ["React", "Redux", "Stripe API"],
  },
  {
    name: "PulseChat",
    description: "Real-time messaging app with WebSocket communication",
    techs: ["React", "Socket.io", "Node.js"],
  },
  {
    name: "php-react-blog-maaz",
    description: "Full-stack blog platform with content management system",
    techs: ["PHP", "React", "MySQL"],
  },
];

export function getCuratedRepoData(repos, curatedList = CURATED_REPOS) {
  const curatedNames = curatedList.map(r => r.name);
  
  return repos
    .filter(repo => curatedNames.includes(repo.name))
    .map(repo => {
      const curatedInfo = curatedList.find(c => c.name === repo.name);
      return {
        ...repo,
        description: repo.description || curatedInfo?.description || '',
        techs: curatedInfo?.techs || [repo.primaryLanguage?.name].filter(Boolean),
      };
    })
    .sort((a, b) => curatedNames.indexOf(a.name) - curatedNames.indexOf(b.name));
}