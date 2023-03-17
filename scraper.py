import bs4
import urllib3
import re
resto = []
http = urllib3.PoolManager()
response=http.request('GET','http://leveninleuven.be/leuvense-restaurants/')
soup = bs4.BeautifulSoup(response.data)
for x in soup.findAll('a'):
    if 'href' in x.attrs.keys():
        if '/?p' in x.attrs['href']:
            print(x.string)
    else:
        pass


for x in soup.findAll('a'):
    if 'href' in x.attrs.keys():
        if '/?p' in x.attrs['href']:
            resto.append(x.string)
    else:
        pass

filtered_restaurants = [restaurant for restaurant in resto if not re.search(r' \d$', restaurant)]
with open("Restolist.txt", "w") as f:
    f.write(str(filtered_restaurants))
