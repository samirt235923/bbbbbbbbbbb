import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-md mb-6">
      <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Link href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="text-gray-400">/</span>}
          </div>
        ))}
      </div>
    </nav>
  );
}
