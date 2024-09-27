import Link from 'next/link';

export default function Card({ title, url }: { title: string; url: string }) {
  return (
    <Link
      href={`/individual?url=${encodeURIComponent(url)}`}
      className="w-full shadow min-w-10 hover:bg-slate-50 p-3 cursor-pointer transition-all"
    >
      {title}
    </Link>
  );
}
