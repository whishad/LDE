export const sendRequest = (method, url, body=null, content_type=null) => { //send request and return promise
  const config = {
    method: method,
    body: JSON.stringify(body),
    headers: {"Content-Type": content_type},
  }
  return fetch(url, method === "POST" ? config : null)
    .then(response => response.json())
}