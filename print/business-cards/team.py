import json, qrcode, html
# People and contact details live in team-contacts.json (not in git: this repo is public).
# Copy team-contacts.example.json to team-contacts.json and fill it in.
TEAM = json.load(open("team-contacts.json"))
PHONE_SHOW="+1 647 656 3026"; PHONE="+16476563026"; EMAIL="admin@ldiinitiatives.org"
tpl=open('front_back.tpl').read(); head=open('head.tpl').read()
pages=[]
for p in TEAM:
    fn=p["name"].split(",")[0]
    v=(f"BEGIN:VCARD\nVERSION:3.0\nN:{p['last']};{p['first']}\nFN:{fn}\nORG:LDII\nTITLE:{p['title']}\n"
       f"TEL:{p['phone'].replace(' ','')}\nEMAIL:{EMAIL}\nEMAIL:{p['email']}\nEMAIL:info@ldiinitiatives.org\nURL:ldiinitiatives.org\nADR:;Unit 315;3701 Chesswood Dr;Toronto;ON;M3J 2P6;Canada\nEND:VCARD")
    q=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_L,border=0); q.add_data(v); q.make(fit=True)
    m=q.get_matrix(); n=len(m)
    d="".join(f"M{x},{y}h1v1h-1z" for y,row in enumerate(m) for x,c in enumerate(row) if c)
    open(f"qr-{p['slug']}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges"><path fill="#0B1726" d="{d}"/></svg>')
    p["vcard"]=v; p["modules"]=n
    t=(tpl.replace('<h1 class="name">Ronald Lwabaayi</h1>',f'<h1 class="name">{html.escape(p["name"])}</h1>')
          .replace('<p class="role">President &amp; Founder</p>',f'<p class="role">{html.escape(p["title"])}</p>')
          .replace('{{PHONE}}',p["phone"]).replace('{{EMAIL}}',p["email"])
          .replace('src="qr.svg"',f'src="qr-{p["slug"]}.svg"'))
    assert p["name"] in t or html.escape(p["name"]) in t
    pages.append(t)
open('team.html','w').write(head+"".join(pages)+"</body>\n</html>\n")
json.dump(TEAM,open('team.json','w'),indent=1)
print([(p['slug'],p['modules']) for p in TEAM])
