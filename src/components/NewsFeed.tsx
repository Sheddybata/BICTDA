import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsPosts } from '@/pages/LatestNews';
import { Badge } from '@/components/ui/badge';

const parseDate = (dateStr) => {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/gi, '$1');
  let d = Date.parse(cleaned);
  if (!isNaN(d)) return d;
  const parts = cleaned.match(/(\d{1,2}) ([A-Za-z]+) (\d{4})/);
  if (parts) {
    return Date.parse(`${parts[2]} ${parts[1]}, ${parts[3]}`);
  }
  const year = cleaned.match(/(\d{4})/);
  if (year) return Date.parse(`Jan 1, ${year[1]}`);
  return 0;
};

const getExcerpt = (caption) => {
  if (!caption) return '';
  const paraBreak = caption.indexOf('\n\n');
  if (paraBreak !== -1) return caption.slice(0, paraBreak) + '...';
  if (caption.length > 120) return caption.slice(0, 120) + '...';
  return caption;
};

const NewsFeed: React.FC = () => {
  const sorted = [...newsPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const topThree = sorted.slice(0, 3);
  return (
    <div id="news">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-bictda-dark">Latest News</h2>
        <Button variant="ghost" className="text-bictda-accent hover:text-bictda-dark" asChild>
          <a href="/latest-news">
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
      <div className="space-y-6">
        {topThree.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            {item.image && (
              <img src={item.image} alt={item.title || 'News'} className="w-full h-40 object-cover rounded-t-lg" />
            )}
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="info" className="bg-bictda-accent/10 text-bictda-accent font-semibold px-3 py-1 rounded-full text-xs shadow-none">{item.date}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-bictda-dark mb-2 hover:text-bictda-accent cursor-pointer line-clamp-2">
                {item.title}
              </h3>
              <p className="text-bictda-dark leading-relaxed text-sm line-clamp-3">
                {getExcerpt(item.caption)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed; 