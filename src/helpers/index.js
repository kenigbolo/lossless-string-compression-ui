export async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  });
  return await response.json();
};

export async function postFile(url = '', formData) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: formData
  });
  return await response.json();
}

// The two functions above can be merged into one if needed