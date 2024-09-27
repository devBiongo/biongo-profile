interface Props {
  params: {
    url: string;
  };
}

export default function Page({ params }: Props) {
  return <div>{params.url}</div>;
}
