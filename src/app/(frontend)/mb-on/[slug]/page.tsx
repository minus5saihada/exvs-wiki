type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function MbOnUnitDetailPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <main>
      <h1>マキオン機体詳細: {slug}</h1>
    </main>
  )
}
