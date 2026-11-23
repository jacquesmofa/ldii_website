import fitz, io, json, os, zipfile, zxingcpp, shutil
from pptx import Presentation
from pptx.util import Inches
from PIL import Image
TEAM=json.load(open('team.json'))
shutil.rmtree('team-out',ignore_errors=True); os.makedirs('team-out/HD-images')
src=fitz.open('team-bleed.pdf'); assert src.page_count==2*len(TEAM)
IN=72; B=.125*IN; trim=fitz.Rect(B,B,B+3.5*IN,B+2*IN)
def meta(d,t): d.set_metadata({'title':t,'author':'Livelihood Development International Initiatives (LDII)','subject':'Business card 3.5 x 2 in, two-sided, 1/8 in bleed, vector'})
allp=fitz.open()
for k,p in enumerate(TEAM):
    f,b=2*k,2*k+1; base=f"LDII_Card_{p['slug']}"; nm=p['name'].split(',')[0]
    d=fitz.open(); d.insert_pdf(src,from_page=f,to_page=b)
    for pg in d: pg.set_bleedbox(pg.rect); pg.set_trimbox(trim)
    meta(d,f"{nm} business card"); d.save(f"team-out/{base}_PRINT-SHOP.pdf",garbage=4,deflate=True); allp.insert_pdf(d)
    o=fitz.open(); W,H=8.5*IN,11*IN; L,T=.75*IN,.5*IN; cw,ch=3.5*IN,2*IN
    for i in (f,b):
        pg=o.new_page(width=W,height=H)
        for r in range(5):
            for c in range(2):
                x=L+c*cw; y=T+r*ch; pg.show_pdf_page(fitz.Rect(x,y,x+cw,y+ch),src,i,clip=trim)
        sh=pg.new_shape(); xs=[L,L+cw,L+2*cw]; ys=[T+j*ch for j in range(6)]
        for x in xs: sh.draw_line((x,4),(x,T-6)); sh.draw_line((x,H-4),(x,ys[-1]+6))
        for y in ys: sh.draw_line((4,y),(L-6,y)); sh.draw_line((W-4,y),(xs[-1]+6,y))
        sh.finish(color=(.55,.55,.55),width=.4); sh.commit()
    meta(o,f"{nm} business cards, 10 per sheet"); o.save(f"team-out/{base}_OFFICE-SHEET_10-up.pdf",garbage=4,deflate=True)
    pr=Presentation(); pr.slide_width=Inches(3.5); pr.slide_height=Inches(2)
    for i,side in ((f,'front'),(b,'back')):
        tp=f"team-out/HD-images/{base}_{side}_1200dpi.png"
        src[i].get_pixmap(dpi=1200,clip=trim).save(tp)
        src[i].get_pixmap(dpi=1200).save(f"team-out/HD-images/{base}_{side}_1200dpi_with-bleed.png")
        s=pr.slides.add_slide(pr.slide_layouts[6]); s.shapes.add_picture(tp,0,0,pr.slide_width,pr.slide_height)
    pr.save(f"team-out/{base}.pptx")
    src[b].get_pixmap(dpi=200).save('_q.png'); r=zxingcpp.read_barcodes(Image.open('_q.png'))
    txt=src[f].get_text()
    print(p['slug'],'QR ok' if r and r[0].text==p['vcard'] else 'QR FAIL', 'phone on card ok' if p['phone'] in txt else 'PHONE MISSING')
for pg in allp: pg.set_bleedbox(pg.rect); pg.set_trimbox(trim)
meta(allp,'LDII team business cards'); allp.save("team-out/LDII_Team-Cards_ALL-3_PRINT-SHOP.pdf",garbage=4,deflate=True)
ims=[Image.open(io.BytesIO(src[i].get_pixmap(dpi=250,clip=trim).tobytes('png'))) for i in range(src.page_count)]
w,h=ims[0].size; g=50; rows=len(TEAM)
pv=Image.new('RGB',(w*2+g*3,h*rows+g*(rows+1)),'#D8D4CC')
for i,im in enumerate(ims):
    x=g+(i%2)*(w+g); y=g+(i//2)*(h+g); pv.paste(Image.new('RGB',(w,h),'#B9B4AA'),(x+7,y+9)); pv.paste(im,(x,y))
pv.save('team-out/LDII_Team-Cards_PREVIEW.png')
with zipfile.ZipFile('team-out/LDII_Team-Cards_ULTRA-HD-images_1200dpi.zip','w',zipfile.ZIP_DEFLATED) as z:
    for fn in sorted(os.listdir('team-out/HD-images')): z.write(f'team-out/HD-images/{fn}',fn)
