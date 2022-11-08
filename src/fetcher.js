async function fetchData(url) {
  let responseObject = { errorMessage: '', data: [] };
  try {
    const res = await fetch('http://localhost:3001' + url);
    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status} not found`);
    }
    const resData = await res.json();
    responseObject.errorMessage = '';
    responseObject.data = resData;
  } catch (err) {
    responseObject.errorMessage = err.message;
  }
  return responseObject;
}

export async function getCategories() {
  return fetchData('/categories');
}

export async function getProducts(id) {
  return fetchData('/products?catId=' + id);
}

export async function getProductById(id) {
  return fetchData('/products/' + id);
}

export async function getProductByQuery(query) {
  return fetchData('/products?q=' + query);
}
