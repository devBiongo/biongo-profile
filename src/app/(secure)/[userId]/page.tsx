interface Props {
  params: {
    userId: string;
  };
}

export default function Page({ params: { userId } }: Props) {
  return (
    <div className="flex flex-col  gap-3 h-[2000px]">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-2 p-4 bg-white rounded-lg border">
          <div className="h-[300px]">{userId}</div>
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg border ">
          <div className="h-[300px]"></div>
        </div>
      </div>
    </div>
  );
}
