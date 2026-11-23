<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>LDII · Ronald Lwabaayi · business cards</title>
<style>
@font-face{font-family:"Source Serif 4";font-weight:600;src:url(/home/claude/ldii_website/node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-600-normal.woff2)}
@font-face{font-family:"Source Serif 4";font-weight:400;font-style:italic;src:url(/home/claude/ldii_website/node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-400-italic.woff2)}
@font-face{font-family:"Source Serif 4";font-weight:600;font-style:italic;src:url(/home/claude/ldii_website/node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-600-italic.woff2)}
@font-face{font-family:"Plex";font-weight:400;src:url(/home/claude/ldii_website/node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2)}
@font-face{font-family:"Plex";font-weight:500;src:url(/home/claude/ldii_website/node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2)}
@font-face{font-family:"Plex";font-weight:600;src:url(/home/claude/ldii_website/node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2)}
@font-face{font-family:"Mark";font-weight:700;src:url(/home/claude/bizcard/node_modules/@fontsource/oswald/files/oswald-latin-700-normal.woff2)}

:root{
  --ink:#0B1726; --navy:#0A1E3D; --green:#3CCB7F; --deep:#146C3E; --leaf:#547A38;
  --sand:#F7F4EE; --mist:#F2F7F3; --line:#D9D3C6;
}
@page{size:3.75in 2.25in;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{-webkit-print-color-adjust:exact;print-color-adjust:exact;font-family:"Plex",sans-serif;color:var(--navy)}
/* one page = one card side, 1/8 in bleed on every edge */
.card{width:3.75in;height:2.25in;position:relative;overflow:hidden;page-break-after:always;break-after:page}
/* trim area (what is left after cutting) */
.trim{position:absolute;left:.125in;top:.125in;width:3.5in;height:2in}
.mark{font-family:"Mark";font-weight:700;letter-spacing:.01em;line-height:1}

/* the LDII meridian: dot, line, dot */
.meridian{display:flex;align-items:center}
.meridian i{display:block;width:6px;height:6px;min-height:6px;max-height:6px;border-radius:50%;background:var(--deep);flex:0 0 6px}
.meridian b{display:block;height:1px;background:var(--deep);flex:1}
.meridian.v{display:block;position:relative;width:6px}
.meridian.v i{position:absolute;left:0}
.meridian.v i:first-child{top:0}
.meridian.v i:last-child{bottom:0}
.meridian.v b{position:absolute;left:2.5px;top:3px;bottom:3px;width:1px;height:auto}

/* ---------- Concept A · front ---------- */
.a-front{background:var(--sand)}
.a-front .band{position:absolute;left:0;top:0;bottom:0;width:calc(.125in + .09in);background:var(--deep)}
.a-front .band::after{content:"";position:absolute;left:0;right:0;top:0;height:calc(.125in + .62in);background:var(--green)}
.a-front .head{position:absolute;left:.3in;top:.22in;right:.2in;display:flex;align-items:center;gap:7pt}
.a-front .head .mark{font-size:22pt;color:var(--leaf)}
.a-front .head .org{font-size:5.6pt;font-weight:500;letter-spacing:.06em;text-transform:uppercase;line-height:1.35;color:var(--navy);opacity:.85;border-left:.6pt solid var(--line);padding-left:7pt}
.a-front .who{position:absolute;left:.3in;top:.78in}
.a-front .name{font-family:"Source Serif 4";font-weight:600;font-size:16.5pt;letter-spacing:-.005em;line-height:1}
.a-front .role{margin-top:4pt;font-size:6.3pt;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--deep)}
.a-front .rule{position:absolute;left:.3in;right:.2in;top:1.33in}
.a-front .contact{position:absolute;left:.3in;right:.2in;top:1.45in;display:grid;grid-template-columns:1.32in 1fr;column-gap:.14in;font-size:6.6pt;line-height:1.45}
.a-front .contact span{color:var(--deep);font-weight:600;display:inline-block;width:8pt}
.a-front .contact .addr{border-left:.6pt solid var(--line);padding-left:.12in}

/* ---------- Concept A · back ---------- */
.a-back{background:var(--ink);color:#fff}
.a-back .top{position:absolute;left:.22in;top:.2in;font-size:5.6pt;letter-spacing:.2em;text-transform:uppercase;color:var(--green);font-weight:500}
.a-back .tag{position:absolute;left:.22in;top:.38in;font-family:"Source Serif 4";font-weight:600;font-size:15pt;line-height:1.08;letter-spacing:-.005em}
.a-back .tag em{display:block;font-style:italic;color:var(--green)}
.a-back .route{position:absolute;left:.22in;top:1.02in;height:.74in;display:grid;grid-template-columns:5pt 1fr;column-gap:7pt}
.a-back .route .meridian i{background:var(--green)}
.a-back .route .meridian b{background:var(--green);opacity:.7}
.a-back .route .stops{display:flex;flex-direction:column;justify-content:space-between;font-size:6.2pt;line-height:1.3;margin-top:-2.4pt;margin-bottom:-2.4pt}
.a-back .route strong{font-weight:600;color:#fff}
.a-back .route small{display:block;font-size:5.6pt;color:#C9D3DF}
.a-back .qr{position:absolute;right:.2in;top:.22in;width:1.02in;text-align:center}
.a-back .qr .tile{background:var(--sand);padding:.07in;border-radius:2pt}
.a-back .qr img{display:block;width:100%}
.a-back .qr p{margin-top:5pt;font-size:5.2pt;letter-spacing:.1em;white-space:nowrap;text-transform:uppercase;color:#C9D3DF}
.a-back .web{position:absolute;right:.2in;bottom:.2in;font-size:6.6pt;font-weight:500;letter-spacing:.04em;color:#fff}

/* ---------- Concept B · single front ---------- */
.b-front{background:#fff}
.b-front .panel{position:absolute;left:0;top:0;bottom:0;width:calc(.125in + 1.1in);background:var(--ink)}
.b-front .panel .meridian{position:absolute;left:calc(.125in + .55in);top:calc(.125in + .14in);bottom:calc(.125in + .14in);transform:translateX(-50%)}
.b-front .panel .meridian i{background:var(--green)}
.b-front .panel .meridian b{background:var(--green);opacity:.45}
.b-front .roundel{position:absolute;left:calc(.125in + .55in);top:calc(.125in + .36in);transform:translateX(-50%);width:.82in;height:.82in;border-radius:50%;background:#F9F9F9;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3pt var(--ink)}
.b-front .roundel .mark{font-size:21pt;color:var(--leaf)}
.b-front .motto{position:absolute;left:.125in;width:1.1in;top:calc(.125in + 1.38in);text-align:center;font-family:"Source Serif 4";font-style:italic;font-size:6.4pt;line-height:1.3;color:#fff;background:var(--ink);padding:2pt 0}
.b-front .motto em{color:var(--green);font-style:italic}
.b-front .main{position:absolute;left:calc(.125in + 1.1in + .22in);right:.32in;top:calc(.125in + .17in)}
.b-front .org{font-size:5.5pt;font-weight:500;letter-spacing:.08em;text-transform:uppercase;line-height:1.4;color:var(--navy);opacity:.8}
.b-front .name{margin-top:.13in;font-family:"Source Serif 4";font-weight:600;font-size:15.5pt;line-height:1}
.b-front .role{margin-top:4pt;font-size:6.1pt;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--deep)}
.b-front .rule{margin:.09in 0 .065in}
.b-front dl{display:grid;grid-template-columns:9pt 1fr;row-gap:.8pt;font-size:6.4pt;line-height:1.32}
.b-front dt{color:var(--deep);font-weight:600}
.b-front .reach{position:absolute;left:calc(.125in + 1.1in + .22in);right:.32in;bottom:calc(.125in + .14in);font-size:5.2pt;letter-spacing:.14em;text-transform:uppercase;color:#5B6676}

/* screen preview only: show the trim line */
@media screen{
  body{padding:20px;display:flex;flex-wrap:wrap;gap:24px;background:#888}
  .card{outline:1px solid #555}
  .trim{outline:1px dashed rgba(255,0,0,.6)}
}
</style>
</head>
<body>

