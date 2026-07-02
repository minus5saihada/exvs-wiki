type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <main>
      <h1>ニュース詳細: {slug}</h1>
    </main>
  )
}
