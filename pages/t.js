
import Layout from '../components/Layout'

import data from '../utils/data';
export default function T() {
  return (
    <Layout>

{data.products.map((product) => (
<div key={product.image}>{product.image}</div>
))}


    </Layout>
  )
}
