
import Layout from '../components/Layout'
import db from '../utils/db';
import Product from '../models/Product';

export default function T(props) {
    const { products } = props;
  return (
    <Layout>
 {products.map((product) => (

<div key={product._id}>{product._id}-{product.name}</div>
 ))}



    </Layout>
  )
}
export async function getServerSideProps() {
    await db.connect();
    const products = await Product.find({}).lean();
    await db.disconnect();
    return {
      props: {
        products: products.map(db.convertDocToObj),
      },
    };
  }