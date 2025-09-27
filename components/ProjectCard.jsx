import Card from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Card as="article" title={project.title} className="group">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold text-slate-100 mb-3">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-300/85 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <Chip key={idx} variant="outline" size="sm">
                {tag}
              </Chip>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          <Button 
            variant="secondary"
            href={project.codeUrl}
            className="flex-1 justify-center"
            iconLeft={<Github className="w-4 h-4" />}
          >
            Code
          </Button>
          <Button
            variant="primary"
            href={project.demoUrl}
            className="flex-1 justify-center"
            iconLeft={<ExternalLink className="w-4 h-4" />}
          >
            Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}