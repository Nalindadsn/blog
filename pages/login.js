
import Layout from '../components/Layout'


export default function T() {

    return (
    <Layout>---------
        <form>
            <input type="text" name="email" id="email" className="border" /><br/>
            <input type="password" name="password" id="password" className="border" /><br/>
            <button type="submit">submit</button>

        </form>----------
    </Layout>
  )
}
