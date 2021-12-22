
import Layout from '../../components/Layout'
import db from '../../utils/db';
import Product from '../../models/Product';

export default function PostScreen(props) {
    const { product } = props;
    if (!product) {
        return <div>Product Not Found</div>;
      }
  return (
    <Layout>

<div>{product.name}</div>
 
test


    </Layout>
  )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
  
    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    return {
      props: {
        product: db.convertDocToObj(product),
      },
    };
  }