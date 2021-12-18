import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Navigation" />
    <h1>改姓後の変更</h1>
    <p>苗字変えるのがどれだけめんどくさいかを理解すべき</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
