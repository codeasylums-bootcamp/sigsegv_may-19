import requests
import csv
from bs4 import BeautifulSoup
url='http://results.eci.gov.in/pc/en/partywise/partywiseresult-U01.htm'
headers = {'User-Agent':'Mozilla/5.0'}
response = requests.get(url, headers=headers)
response.status_code
soup = BeautifulSoup(response.content,'html.parser')
stat_table = soup.find_all('table',class_='table-party')
len(stat_table)
stat_table = stat_table[0]
for row in stat_table.find_all('tr'):
    for cell in row.find_all('td'):
        print("cell.text")
with open ('UP.csv','w') as r:
    for row in stat_table.find_all('tr'):
        for cell in row.find_all('td'):
            r.write(cell.text)
        r.write(*\n)    
    
