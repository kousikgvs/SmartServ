import React, { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
      .then(response => response.json())
      .then(data => {
        const productList = Object.keys(data.products).map(key => {
          return {
            id: key,
            subcategory: data.products[key].subcategory,
            title: data.products[key].title,
            price: data.products[key].price,
            popularity: data.products[key].popularity
          };
        });

        const sortedByPopularity = productList.sort((a, b) => b.popularity - a.popularity);
        setProducts(sortedByPopularity);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.slice(currentPage - 1, currentPage + 9);

  return (
    <div>
      <h1>Product List</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Subcategory</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{product.subcategory}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{product.title}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{product.price}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{product.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
       <div style={{ marginTop: '10px' }}>
        {currentPage > 1 && (
          <button
            style={{
              marginRight: '5px',
              padding: '5px 10px',
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #333',
              cursor: 'pointer'
            }}
            onClick={() => paginate(currentPage - 1)}
          >
            Prev
          </button>
        )}

        {renderPageNumbers.map(number => (
          <button
            key={number}
            style={{
              marginRight: '5px',
              padding: '5px 10px',
              backgroundColor: currentPage === number ? '#333' : '#fff',
              color: currentPage === number ? '#fff' : '#333',
              border: '1px solid #333',
              cursor: 'pointer'
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}

        {currentPage < Math.ceil(products.length / productsPerPage) && (
          <button
            style={{
              marginRight: '5px',
              padding: '5px 10px',
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #333',
              cursor: 'pointer'
            }}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
