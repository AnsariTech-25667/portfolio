import Card from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';

export default function SkillGroup({ title, items, icon: Icon }) {
  return (
    <Card as="section" title={title}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="p-2 rounded-lg bg-slate-800/40">
            <Icon className="w-6 h-6 text-sky-400" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-slate-100">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <Chip key={item} variant="solid" size="sm">
            {item}
          </Chip>
        ))}
      </div>
    </Card>
  );
}