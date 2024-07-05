import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function Search() {

const [search,setSearch] = useState("")
const [sort,setSort] = useState("")
const [maxPrice,setMaxPrice] = useState(100000)
const[category,setCategory] = useState("")
const [page,setPage] = useState(1)


 const isNextPage = true
 const isPreviousPage = true
const img = 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg'


const addToCartHandlar = ()=>{

}



  return (
    <div className="product-search-page">
    <aside>
      <h2>Filters</h2>
      <div>
        <h4>Sort</h4>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Price (Low to High)</option>
          <option value="dsc">Price (High to Low)</option>
        </select>
      </div>

      <div>
        <h4>Max Price: {maxPrice || ""}</h4>
        <input
          type="range"
          min={100}
          max={100000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <h4>Category</h4>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">ALL</option>
          <option value="">Sample1</option>
          <option value="">Sample 2</option>
        
        </select>
      </div>
    </aside>
    <main>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

        <div className="search-product-list">
        <ProductCard
      
        productId="sfsfsf"
name="Macbook"
price={45644}
stock={50}
handler={addToCartHandlar}
photo={img}
        
        />
        </div>
<article>
  <button
   onClick={()=>setPage((prev)=> prev-1)}
   disabled = {!isPreviousPage}
   >prev</button>
  <span>{page}of {4}</span>
  <button 
  onClick={()=>setPage((prev)=> prev+1)}
  disabled = {!isNextPage}
  >next</button>
</article>
    </main>
  </div>
  )
}

export default Search