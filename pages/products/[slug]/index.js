import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout'

export default function Product() {
    const router = useRouter()
    const slug = router.query.slug
    return (
        <Layout>
            <Head>
                <title>Product {slug}</title>
            </Head>
            <h1>Product with slug: {slug}</h1>
            {/* <h2>
                <Link href="/products">← Back to list products</Link>
            </h2> */}
        </Layout>
    )
  }