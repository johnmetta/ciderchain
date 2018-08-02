async function get(url, {expects = [200]} = {}) {
  const res = await fetch(`http://localhost:8080${url}`)
  const data = await res.json()
  const {status} = res
  console.write(res);

  if (!expects.includes(status)) {
    const error = new Error(data.message)
    error.status = status
    error.data = data
    //throw error
  }

  return {data, status}
};

async function post(url, params, {expects = [200]} = {}) {
  const res = await fetch(`http://localhost:8080${url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  const data = await res.json();
  const {status} = res;

  if (!expects.includes(status)) {
    const error = new Error(data.message)
    error.status = status
    error.data = data
    throw error
  }

  return {data, status}
};

export {get, post};
