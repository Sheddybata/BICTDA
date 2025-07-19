import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { newsPosts } from '@/pages/LatestNews';

const getExcerpt = (caption: string) => {
  if (!caption) return '';
  const paraBreak = caption.indexOf('\n\n');
  if (paraBreak !== -1) return caption.slice(0, paraBreak) + '...';
  if (caption.length > 120) return caption.slice(0, 120) + '...';
  return caption;
};

const LatestNewsSection: React.FC = () => {
  const sorted = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const topFour = sorted.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bictda-dark">Latest News</h2>
          <a href="/latest-news">
            <button className="px-5 py-2 rounded-lg bg-bictda-accent text-white font-bold shadow hover:bg-bictda-dark transition-colors">View All News</button>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topFour.map((post, idx) => (
            <Card key={idx} className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border-0 rounded-2xl overflow-hidden">
              {post.image && (
                <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center group overflow-hidden">
                  <img src={post.image} alt={post.title || 'News'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-bictda-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl bg-bictda-dark/60 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.91a2 2 0 011.447-1.814L9 10m6 0V7a3 3 0 00-6 0v3m6 0H9' /></svg></span>
                  </div>
                </div>
              )}
              <CardHeader className="flex-1 pb-2">
                <Badge variant="info" className="mb-2 w-fit bg-bictda-accent/10 text-bictda-accent font-semibold px-3 py-1 rounded-full text-xs shadow-none">{post.date}</Badge>
                {post.title && <CardTitle className="text-lg font-bold text-bictda-dark mb-2 leading-tight line-clamp-2">{post.title}</CardTitle>}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-bictda-dark font-medium mb-4 whitespace-pre-line text-sm leading-relaxed line-clamp-4">{getExcerpt(post.caption)}</div>
                <div className="flex items-center justify-between text-xs text-bictda-dark/70 mt-auto pt-4 border-t border-bictda-light">
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>BICTDA</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" /></svg>0</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 