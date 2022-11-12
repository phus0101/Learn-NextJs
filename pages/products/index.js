import Head from 'next/head'
import Link from 'next/link'

export default function ListProduct() {
    return (
        <>
            <Head>
                <title>List Products</title>
            </Head>
            <h1>List Products</h1>
            <h2>
                <Link href={{pathname: "products/[slug]", query:{slug: "product-1"}}}>Product 1</Link>
            </h2>
            <h2>
                <Link href="/products/product-2">Product 2</Link>
            </h2>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </>
    )
  }