# Professional Media Management System

## Directory Structure

```
public_html/
└── media/
    ├── site-assets.json          # Master manifest file
    ├── .htaccess                 # Performance & security config
    ├── branding/                 # Logos, favicons, brand assets
    │   ├── logo-main.png
    │   ├── logo-white.png
    │   └── favicon.png
    ├── documents/                # PDFs, whitepapers, reports
    │   ├── annual-report-2024.pdf
    │   ├── program-guide.pdf
    │   └── whitepapers/
    ├── videos/                   # MP4/WebM video files
    │   ├── hero-background.mp4
    │   └── about-introduction.mp4
    └── gallery/                  # Event & program photos
        ├── conferences/
        │   ├── 2024/
        │   │   ├── spring/
        │   │   └── fall/
        │   └── 2023/
        ├── programs/
        └── team/
```

## File Permissions (cPanel)

**Security Best Practices:**
- Folders: `755` (drwxr-xr-x) - Publicly readable, owner can write
- Files: `644` (-rw-r--r--) - Publicly readable, owner can write

**How to set in cPanel:**
1. Go to File Manager
2. Right-click folder/file → Change Permissions
3. Set numeric value or check appropriate boxes

## Performance Optimization

### 1. Browser Caching
The `.htaccess` file configures aggressive caching:
- Images: 1 year
- Videos: 1 year  
- PDFs: 1 month
- JSON manifest: 1 day (allows quick updates)

### 2. Video Hosting Recommendations
For videos larger than 10MB, consider using:
- **Mux** (https://mux.com) - Professional video streaming
- **Cloudinary** (https://cloudinary.com) - Media optimization & CDN
- **Bunny CDN** (https://bunny.net) - Affordable video streaming

Benefits: Adaptive streaming, automatic quality adjustment, faster loading

### 3. PDF Optimization
Ensure PDFs are "web-optimized" (linearized):
- **Adobe Acrobat**: File → Save As Other → Optimized PDF → Check "Linearize"
- **Online Tools**: https://www.ilovepdf.com/compress_pdf

This allows the first page to display instantly while the rest loads in background.

## Updating Assets

### Method 1: Direct cPanel Upload
1. Log into cPanel → File Manager
2. Navigate to `public_html/media/[category]/`
3. Upload new files
4. Update `site-assets.json` with new URLs

### Method 2: FTP/SFTP
Use FileZilla or similar:
- Host: Your domain
- Username: cPanel username
- Password: cPanel password
- Port: 21 (FTP) or 22 (SFTP)

### Method 3: Update Manifest Only
If file names stay the same, just replace the file in cPanel. The app will automatically use the new version after cache expires.

## Usage in React Components

### Import the Hook
```typescript
import { useMedia } from '../context/MediaContext';
```

### Access Assets
```typescript
const { assets, loading, error } = useMedia();

// Logo
<img src={assets?.branding.logo_main} alt="Logo" />

// PDF Download
<a href={assets?.documents.annual_report_2024} download>
  Download Report
</a>

// Video Background
<video src={assets?.videos.hero_bg} autoPlay loop muted />
```

## Troubleshooting

### Assets Not Loading?
1. Check file permissions (755 for folders, 644 for files)
2. Verify URLs in `site-assets.json` are correct
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for CORS errors

### Slow Loading?
1. Compress images (use TinyPNG or ImageOptim)
2. Convert videos to web-optimized formats
3. Enable GZIP in `.htaccess` (already configured)
4. Consider using a CDN for large files

### Cache Not Working?
1. Verify `.htaccess` is in the correct directory
2. Check if `mod_expires` is enabled in cPanel (usually is)
3. Test with browser DevTools → Network tab → Check "Disable cache" is OFF

## Security Notes

- Never store sensitive files in the `media/` directory
- The `.htaccess` prevents directory listing
- CORS is configured to allow asset loading
- File permissions prevent unauthorized modifications
- Regular backups recommended (use cPanel backup feature)

## Support

For issues with:
- **cPanel**: Contact your hosting provider
- **React Integration**: Check the MediaContext documentation
- **Performance**: Review the optimization checklist above
