import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import myContexts from '../../context/myContexts'

export default function HomePage() {
  const { searchedCategory, getAllProduct } = useContext(myContexts);

  // Filter products by searched category if set
  const filteredProducts = searchedCategory
    ? getAllProduct.filter((item) =>
        item.category?.toLowerCase().includes(searchedCategory.toLowerCase())
      )
    : getAllProduct;

  return (
    <Layout>
      <HeroSection />
      <Category />
      {/* Pass filteredProducts to HomePageProductCard */}
      <HomePageProductCard products={filteredProducts} />
      <Track />
      <Testimonial />
    </Layout>
  )
}