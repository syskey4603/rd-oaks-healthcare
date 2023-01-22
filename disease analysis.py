from bs4 import BeautifulSoup
import requests
import webbrowser

def wikiscrape(disease):
    URL = "https://www.health.harvard.edu/a-through-c"
    r = requests.get(URL + disease)
    soup = BeautifulSoup(r.content, 'html5lib')
    diseaselist = soup.findAll('p')

    for p in diseaselist:
      print(p.text)

def nextscrape(disease):
    URL = ""
    r = requests.get(URL + disease)
    soup = BeautifulSoup(r.content, 'html5lib')
    diseaselist = soup.findAll('p')

    for p in diseaselist:
      print(p.text)

nextscrape("acne")
wikiscrape("acne")

