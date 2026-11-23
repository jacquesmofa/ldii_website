import json, qrcode, html
TEAM = [
  {"slug":"Ronald-Lwabaayi","name":"Ronald Lwabaayi","first":"Ronald","last":"Lwabaayi","title":"President & Founder","phone":"+1 647 656 3026"},
  {"slug":"Elvis-Tanwie","name":"Elvis Tanwie, PMP","first":"Elvis","last":"Tanwie","title":"Project Manager","phone":"+1 437 551 3155"},
  {"slug":"Jacques-N-Mofa","name":"Jacques N. Mofa","first":"Jacques","last":"Mofa","title":"Communications Coordinator & IT Lead","phone":"+1 647 303 8471"},
]
PHONE_SHOW="+1 647 656 3026"; PHONE="+16476563026"; EMAIL="admin@ldiinitiatives.org"
tpl=open('front_back.tpl').read(); head=open('head.tpl').read()
pages=[]
for p in TEAM:
    fn=p["name"].split(",")[0]
    v=(f"BEGIN:VCARD\nVERSION:3.0\nN:{p['last']};{p['first']}\nFN:{fn}\nORG:LDII\nTITLE:{p['title']}\n"
       f"TEL:{p['phone'].replace(' ','')}\nEMAIL:{EMAIL}\nURL:ldiinitiatives.org\nADR:;Unit 315;3701 Chesswood Dr;Toronto;ON;M3J 2P6;Canada\nEND:VCARD")
    q=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_L,border=0); q.add_data(v); q.make(fit=True)
    m=q.get_matrix(); n=len(m)
    d="".join(f"M{x},{y}h1v1h-1z" for y,row in enumerate(m) for x,c in enumerate(row) if c)
    open(f"qr-{p['slug']}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges"><path fill="#0B1726" d="{d}"/></svg>')
    p["vcard"]=v; p["modules"]=n
    t=(tpl.replace('<h1 class="name">Ronald Lwabaayi</h1>',f'<h1 class="name">{html.escape(p["name"])}</h1>')
          .replace('<p class="role">President &amp; Founder</p>',f'<p class="role">{html.escape(p["title"])}</p>')
          .replace('<span>T</span>+1 647 656 3026',f'<span>T</span>{p["phone"]}')
          .replace('src="qr.svg"',f'src="qr-{p["slug"]}.svg"'))
    assert p["name"] in t or html.escape(p["name"]) in t
    pages.append(t)
open('team.html','w').write(head+"".join(pages)+"</body>\n</html>\n")
json.dump(TEAM,open('team.json','w'),indent=1)
print([(p['slug'],p['modules']) for p in TEAM])
