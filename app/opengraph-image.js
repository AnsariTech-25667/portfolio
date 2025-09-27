import { ImageResponse } from 'next/og';
import { me } from '@/data/profile';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const name = me?.name || 'Portfolio';
  const tagline = me?.tagline || 'Building things that matter';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #111827 40%, #1f2937 100%)',
          color: '#e5e7eb'
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>{name}</div>
        <div style={{ marginTop: 12, fontSize: 28, color: '#a3a3a3', maxWidth: 900 }}>
          {tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 20, color: '#9ca3af' }}>
          {process.env.NEXT_PUBLIC_SITE_URL || 'your-domain.example'}
        </div>
      </div>
    ),
    { ...size }
  );
}