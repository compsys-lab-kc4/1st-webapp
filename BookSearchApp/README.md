# 書籍検索アプリ(未完成)

d3sparql.queryの部分でエラーが発生したため、検索結果がうまく表示されなかった.

以下にエラー内容を表示.
-------------------------------------------------
SEC7120: [CORS] 送信元 'file://' で、'http://id.ndl.go.jp/auth/ndla/?query=%20PREFIX%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%20PREFIX%20xl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2008%2F05%2Fskos-xl%23%3E%20SELECT%20*%20WHERE%20%7B%20%3Furi%20dcterms%3Asource%20%3Fbook.%20%3Furi%20xl%3AprefLabel%20%5Bxl%3AliteralForm%20%3Fheading%5D.%20FILTER%20REGEX%20(str(%3Fbook)%2C%20!%26quot%E5%A5%A5%E4%BB%98%26quot)%20FILTER%20REGEX%20(str(%3Fbook)%2C%20%26quot%5Bobject%20HTMLInputElement%5D%26quot)%20FILTER%20REGEX%20(str(%3Fheading)%2C%20!%26quot%E6%89%80%5E%26quot)%20FILTER%20REGEX%20(str(%3Fheading)%2C%20!%26quot%E4%BC%9A%5E%26quot)%20FILTER%20REGEX%20(str(%3Fheading)%2C%20!%26quot%E5%A4%A7%E5%AD%A6%5E%26quot)%20FILTER%20REGEX%20(str(%3Fheading)%2C%20!%26quot%E7%A4%BE%5E%26quot)%7D' の cross-origin  リソースの Access-Control-Allow-Origin response header に 'file://' が見つかりませんでした。

SCRIPT5007: Unable to get property 'responseText' of undefined or null reference
(d3sparql.js(61,4))
