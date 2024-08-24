const fixImageUrl = (url) => {
  return url?.startsWith('//') ? `https:${url}` : url
}

export default fixImageUrl
